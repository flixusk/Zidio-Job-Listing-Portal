// /controllers/jobController.js
const Job = require('../models/jobsModel');

// Add a new job
const addJob = async (req, res) => {
  const { title, description, location, type, salary } = req.body;

  try {
    const job = new Job({
      title,
      description,
      location,
      type,
      salary,
    });

    const savedJob = await job.save();
    res.status(201).json(savedJob);
  } catch (error) {
    res.status(400).json({ message: 'Error adding job', error });
  }
};

// Fetch all jobs with optional filtering
const getJobs = async (req, res) => {
  try {
    const { title, type, location } = req.query;

    // Build filter object
    const filter = {};

    if (title) {
      console.log(`Title filter: ${title}`);
      filter.title = { $regex: new RegExp(`^${title}$`, 'i') }; // Exact match or case-insensitive search
    }
    if (type) {
      console.log(`Type filter: ${type}`);
      filter.type = type;
    }
    if (location) {
      console.log(`Location filter: ${location}`);
      filter.location = { $regex: new RegExp(`^${location}$`, 'i') }; // Exact match or case-insensitive search
    }

    // Log the filter object
    console.log('Filter:', filter);

    // Fetch jobs from the database with the built filter
    const jobs = await Job.find(filter);

    // Log the jobs fetched
    console.log('Jobs fetched:', jobs);

    res.status(200).json({
      success: true,
      jobs,
    });
  } catch (err) {
    console.error('Error fetching jobs:', err);
    res.status(500).json({
      success: false,
      message: 'Error fetching jobs',
    });
  }
};

module.exports = {
  addJob,
  getJobs,
};
