import React, { useState, useEffect } from 'react';
import AppliedJobsList from '../components/AppliedJobsList'; // Component to list applied jobs

const EmployeeDashboard = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    const fetchAppliedJobs = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/applied-jobs', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem('auth-token'),
          },
        });
        const data = await response.json();
        setAppliedJobs(data.jobs); // Ensure that you extract the jobs array correctly
      } catch (error) {
        console.error('Error fetching applied jobs:', error);
      }
    };

    fetchAppliedJobs();
  }, []);

  const handleRemove = async (jobId) => {
    try {
      await fetch(`http://localhost:5000/api/users/remove-applied-job/${jobId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': localStorage.getItem('auth-token'),
        },
      });
      // Remove the job from the state
      setAppliedJobs(appliedJobs.filter(job => job._id !== jobId));
    } catch (error) {
      console.error('Error removing job:', error);
    }
  };

  return (
    <div className="p-8 bg-stone-950 min-h-screen">
      <h1 className="text-white text-4xl mb-8">Employee Dashboard</h1>
      <AppliedJobsList jobs={appliedJobs} onRemove={handleRemove} />
    </div>
  );
};

export default EmployeeDashboard;
