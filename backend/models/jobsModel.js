// /models/Job.js
const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    index: true, // Add index
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
    index: true, // Add index
  },
  type: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
    required: true,
  },
  applicants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
