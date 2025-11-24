import mongoose from 'mongoose';

const weddingPlanSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    ref: 'User'
  },
  weddingDate: {
    type: Date,
    required: true
  },
  theme: {
    name: String,
    colors: [String],
    description: String
  },
  budget: {
    total: Number,
    categories: [{
      name: String,
      allocated: Number,
      spent: {
        type: Number,
        default: 0
      }
    }]
  },
  timeline: [{
    time: String,
    event: String,
    duration: String,
    status: {
      type: String,
      enum: ['pending', 'completed', 'in-progress'],
      default: 'pending'
    }
  }],
  vendors: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vendor'
  }],
  guestList: [{
    name: String,
    email: String,
    phone: String,
    status: {
      type: String,
      enum: ['invited', 'confirmed', 'declined'],
      default: 'invited'
    }
  }],
  tasks: [{
    title: String,
    description: String,
    dueDate: Date,
    completed: {
      type: Boolean,
      default: false
    },
    category: String
  }],
  notes: [{
    content: String,
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

const WeddingPlan = mongoose.model('WeddingPlan', weddingPlanSchema);

export default WeddingPlan;
