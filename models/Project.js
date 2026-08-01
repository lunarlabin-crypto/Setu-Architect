import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for this project.'],
    trim: true,
  },
  category: {
    type: String,
    required: [true, 'Please provide a category.'],
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  img: {
    type: String,
    required: [true, 'Please provide an image URL or Base64 string.'],
  },
}, {
  timestamps: true, // Automatically add createdAt and updatedAt timestamps
});

export default mongoose.models.Project || mongoose.model('Project', ProjectSchema);
