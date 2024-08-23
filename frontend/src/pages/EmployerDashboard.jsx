import React, { useState } from 'react';
import AddJobForm from '../components/AddJobForm';
import JobList from '../components/JobList';

const EmployerDashboard = () => {
  const [jobs, setJobs] = useState([]);

  const handleAddJob = (newJob) => {
    setJobs([...jobs, newJob]);
  }

  return (
    <div className="p-8 bg-stone-950 min-h-screen">
      <h1 className="text-white text-4xl mb-8">Employer Dashboard</h1>
      <AddJobForm onAddJob={handleAddJob} />
      <JobList jobs={jobs} />
    </div>
  );
}

export default EmployerDashboard;
