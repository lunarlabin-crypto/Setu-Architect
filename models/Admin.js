import mongoose from 'mongoose';

const AdminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please provide an email.'],
    unique: true,
    trim: true,
    lowercase: true,
  },
  role: {
    type: String,
    default: 'admin',
  }
}, {
  timestamps: true,
});

export default mongoose.models.Admin || mongoose.model('Admin', AdminSchema);
