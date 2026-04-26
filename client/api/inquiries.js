const { MongoClient } = require('mongodb');

let cachedClient;

async function getClient() {
  if (cachedClient) {
    return cachedClient;
  }

  if (!process.env.MONGODB_URI) {
    const error = new Error('MongoDB URI is not configured in Vercel.');
    error.statusCode = 500;
    error.publicMessage = 'MongoDB URI is not configured in Vercel.';
    throw error;
  }

  cachedClient = new MongoClient(process.env.MONGODB_URI);
  await cachedClient.connect();
  return cachedClient;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const allowedTypes = new Set(['general', 'project', 'investment', 'partnership']);

function validateInquiry(payload) {
  const errors = [];

  if (!payload.name?.trim()) errors.push('Name is required.');
  if (!payload.phone?.trim()) errors.push('Phone number is required.');
  if (!payload.email?.trim()) errors.push('Email address is required.');
  if (!payload.message?.trim()) errors.push('Message is required.');
  if (payload.email && !emailPattern.test(payload.email)) errors.push('Email address is invalid.');

  return errors;
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const errors = validateInquiry(req.body || {});

    if (errors.length > 0) {
      return res.status(400).json({ error: errors[0], errors });
    }

    const type = allowedTypes.has(req.body.type) ? req.body.type : 'general';
    const client = await getClient();
    const db = client.db(process.env.MONGODB_DB || 'alandalus');

    const result = await db.collection('inquiries').insertOne({
      name: req.body.name.trim(),
      email: req.body.email.trim().toLowerCase(),
      phone: req.body.phone.trim(),
      message: req.body.message.trim(),
      type,
      projectId: req.body.projectId?.trim() || '',
      createdAt: new Date(),
      updatedAt: new Date()
    });

    return res.status(201).json({
      message: 'Inquiry received successfully.',
      inquiryId: result.insertedId
    });
  } catch (error) {
    console.error(error);

    if (error.publicMessage) {
      return res.status(error.statusCode || 500).json({ error: error.publicMessage });
    }

    const isMongoConnectionError = [
      'MongoServerError',
      'MongoNetworkError',
      'MongoServerSelectionError',
      'MongoParseError'
    ].includes(error.name);

    if (isMongoConnectionError || error.message?.includes('querySrv')) {
      return res.status(500).json({
        error: 'Database connection failed. Check your MongoDB Atlas URI, database user password, and Network Access settings.'
      });
    }

    return res.status(500).json({ error: 'Server error. Please try again later.' });
  }
};
