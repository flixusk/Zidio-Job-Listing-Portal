const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {  // Changed to camelCase
    type: String,
    required: [true, 'Please provide your name'],
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    unique: [true, 'Email already exists'],  // Adjusted error message
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
  },
  role: {
    type: String,
    enum: ['employee', 'employer'], // Role can be either 'employee' or 'employer'
    required: true,
  },
});

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);  // Changed to singular "User"
