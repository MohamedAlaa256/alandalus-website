import mongoose from 'mongoose';

const inquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 120
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      maxlength: 160
    },
    phone: {
      type: String,
      required: true,
      trim: true,
      maxlength: 40
    },
    message: {
      type: String,
      required: true,
      trim: true,
      maxlength: 2000
    },
    type: {
      type: String,
      enum: ['general', 'project', 'investment', 'partnership'],
      default: 'general'
    },
    projectId: {
      type: String,
      trim: true,
      default: ''
    }
  },
  { timestamps: true }
);

export default mongoose.model('Inquiry', inquirySchema);
