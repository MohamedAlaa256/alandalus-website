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

function validateContact(payload) {
  const errors = [];

  if (!payload.firstName?.trim()) errors.push('First name is required.');
  if (!payload.email?.trim()) errors.push('Email address is required.');
  if (payload.email && !emailPattern.test(payload.email)) errors.push('Email address is invalid.');

  return errors;
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const payload = req.body || {};
    const errors = validateContact(payload);

    if (errors.length > 0) {
      return res.status(400).json({ success: false, error: errors[0], errors });
    }

    const firstName = payload.firstName.trim();
    const lastName = payload.lastName?.trim() || '';
    const client = await getClient();
    const db = client.db(process.env.MONGODB_DB || 'alandalus');

    const result = await db.collection('inquiries').insertOne({
      name: [firstName, lastName].filter(Boolean).join(' '),
      firstName,
      lastName,
      email: payload.email.trim().toLowerCase(),
      phone: payload.phone?.trim() || '',
      interest: payload.interest?.trim() || '',
      message: payload.message?.trim() || '',
      type: 'consultation',
      createdAt: new Date(),
      updatedAt: new Date()
    });

    return res.status(201).json({
      success: true,
      message: 'Contact request received successfully.',
      inquiryId: result.insertedId
    });
  } catch (error) {
    console.error(error);

    if (error.publicMessage) {
      return res.status(error.statusCode || 500).json({ success: false, error: error.publicMessage });
    }

    const isMongoConnectionError = [
      'MongoServerError',
      'MongoNetworkError',
      'MongoServerSelectionError',
      'MongoParseError'
    ].includes(error.name);

    if (isMongoConnectionError || error.message?.includes('querySrv')) {
      return res.status(500).json({
        success: false,
        error: 'Database connection failed. Check your MongoDB Atlas URI, database user password, and Network Access settings.'
      });
    }

    return res.status(500).json({ success: false, error: 'Server error. Please try again later.' });
  }
};
