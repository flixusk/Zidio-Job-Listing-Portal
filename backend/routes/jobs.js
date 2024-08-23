const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const checkRole = require('../middleware/checkrole');
const Job = require('../models/jobsModel'); // Assuming you have a Job model
const User = require('../models/userModel');

// Create a new job (for employers only)
router.post('/jobs', auth, checkRole('employer'), async (req, res) => {
  const { title, description, type, location, salary } = req.body;

  try {
    const job = new Job({
      title,
      description,
      location,
      type,
      salary,
      employer: req.user.id, // Link job to the current user (employer)
    });

    await job.save();
    res.status(201).json({ success: true, job });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, errors: 'Server error' });
  }
});

// Get all jobs with optional filtering (accessible to everyone)
router.get('/jobs', async (req, res) => {
  try {
    const { title, type, location } = req.query;

    // Build filter object
    const filter = {};

    if (title) {
      filter.title = { $regex: new RegExp(title, 'i') }; // Case-insensitive search
    }
    if (type) {
      filter.type = type;
    }
    if (location) {
      filter.location = { $regex: new RegExp(location, 'i') }; // Case-insensitive search
    }

    // Fetch jobs from the database with the built filter
    const jobs = await Job.find(filter);

    res.json({ success: true, jobs });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, errors: 'Server error' });
  }
});

// Get jobs applied by the current employee
router.get('/applied-jobs', auth, checkRole('employee'), async (req, res) => {
  try {
    const user = req.user;
    const jobs = await Job.find({ applicants: user.id });
    res.json({ success: true, jobs });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, errors: 'Server error' });
  }
});

// In your routes file, add this route for applying to a job
router.post('/users/apply-job', auth, checkRole('employee'), async (req, res) => {
  try {
    const { jobId } = req.body;
    const user = req.user;

    // Find the job and add the user to the applicants list
    const job = await Job.findById(jobId);
    if (!job) return res.status(404).json({ success: false, errors: 'Job not found' });

    if (!job.applicants.includes(user.id)) {
      job.applicants.push(user.id);
      await job.save();
    }

    res.json({ success: true });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, errors: 'Server error' });
  }
});

// In your routes file, add this route for removing an applied job
router.delete('/users/remove-applied-job/:jobId', auth, checkRole('employee'), async (req, res) => {
  try {
    const { jobId } = req.params;
    const user = req.user;

    // Find the job and remove the user from the applicants list
    const job = await Job.findById(jobId);
    if (!job) return res.status(404).json({ success: false, errors: 'Job not found' });

    // Filter out the current user's ID from the applicants list
    job.applicants = job.applicants.filter(applicantId => applicantId.toString() !== user.id);

    // Save the updated job
    await job.save();

    res.json({ success: true });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, errors: 'Server error' });
  }
});

module.exports = router;
