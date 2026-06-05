import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  fullname: {
    type: String,
    required: true,
    trim: true
  },
  role: {
    type: String,
    enum: ['author', 'admin'],
    default: 'admin'
    required: true
  }
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);

export default User;
