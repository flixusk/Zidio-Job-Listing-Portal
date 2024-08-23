import React from 'react';

const JobList = ({ jobs }) => {
  return (
    <div className="bg-neutral-950 p-6 rounded-lg shadow-md">
      <h2 className="text-white text-3xl mb-4">Your Job Listings</h2>
      {jobs.length > 0 ? (
        <ul>
          {jobs.map((job, index) => (
            <li key={index} className="mb-4">
              <h3 className="text-2xl text-white">{job.title}</h3>
              <p className="text-white">{job.description}</p>
              <p className="text-white">{job.location} - {job.type}</p>
              <p className="text-white">Salary: {job.salary}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-white">No jobs added yet.</p>
      )}
    </div>
  );
}

export default JobList;
