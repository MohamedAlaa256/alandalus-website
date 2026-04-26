import express from 'express';
import Inquiry from '../models/Inquiry.js';

const router = express.Router();

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateInquiry(payload) {
  const errors = [];

  if (!payload.name?.trim()) errors.push('Name is required.');
  if (!payload.phone?.trim()) errors.push('Phone number is required.');
  if (!payload.email?.trim()) errors.push('Email address is required.');
  if (!payload.message?.trim()) errors.push('Message is required.');
  if (payload.email && !emailPattern.test(payload.email)) errors.push('Email address is invalid.');

  return errors;
}

router.post('/', async (req, res, next) => {
  try {
    const errors = validateInquiry(req.body);

    if (errors.length > 0) {
      return res.status(400).json({ error: errors[0], errors });
    }

    const inquiry = await Inquiry.create({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      message: req.body.message,
      type: req.body.type || 'general',
      projectId: req.body.projectId || ''
    });

    return res.status(201).json({
      message: 'Inquiry received successfully.',
      inquiryId: inquiry._id
    });
  } catch (error) {
    return next(error);
  }
});

export async function createContactInquiry(req, res, next) {
  try {
    const payload = req.body || {};
    const errors = [];

    if (!payload.firstName?.trim()) errors.push('First name is required.');
    if (!payload.email?.trim()) errors.push('Email address is required.');
    if (payload.email && !emailPattern.test(payload.email)) errors.push('Email address is invalid.');

    if (errors.length > 0) {
      return res.status(400).json({ success: false, error: errors[0], errors });
    }

    const firstName = payload.firstName.trim();
    const lastName = payload.lastName?.trim() || '';
    const interest = payload.interest?.trim();
    const message = payload.message?.trim();

    const inquiry = await Inquiry.create({
      name: [firstName, lastName].filter(Boolean).join(' '),
      email: payload.email,
      phone: payload.phone?.trim() || 'Not provided',
      message: message || (interest ? `Interested in: ${interest}` : 'Contact request'),
      type: interest?.toLowerCase().includes('investment') ? 'investment' : 'general',
      projectId: interest || ''
    });

    return res.status(201).json({
      success: true,
      message: 'Contact request received successfully.',
      inquiryId: inquiry._id
    });
  } catch (error) {
    return next(error);
  }
}

router.post('/contact', createContactInquiry);

export default router;
