import React from 'react';

const AppliedJobsList = ({ jobs, onRemove }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl mb-4">Applied Jobs</h2>
      {jobs.length === 0 ? (
        <p>No jobs applied.</p>
      ) : (
        <ul>
          {jobs.map((job) => (
            <li key={job._id} className="border-b border-gray-300 py-4 flex items-center justify-between">
              <div className="flex flex-col">
                <h3 className="text-xl font-bold">{job.title}</h3>
                <p>{job.description}</p>
                <p><strong>Location:</strong> {job.location}</p>
                <p><strong>Type:</strong> {job.type}</p>
                <p><strong>Salary:</strong> {job.salary}</p>
              </div>
              <button 
                className="ml-4 p-2 bg-red-600 text-white rounded hover:bg-red-700"
                onClick={() => onRemove(job._id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AppliedJobsList;
