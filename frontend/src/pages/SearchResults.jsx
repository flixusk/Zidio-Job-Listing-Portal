import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const SearchResults = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const title = params.get('title') || ''; 
  const jobType = params.get('type') || '';
  const locationQuery = params.get('location') || '';

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);

        if (title || jobType || locationQuery) {
          const query = new URLSearchParams({
            title,
            type: jobType,
            location: locationQuery
          }).toString();

          console.log(`Fetching jobs with query: ${query}`);
          
          const response = await axios.get(`http://localhost:5000/api/jobs?${query}`);
          console.log('Jobs fetched:', response.data);

          if (response.data.success && Array.isArray(response.data.jobs)) {
            setJobs(response.data.jobs);
          } else {
            console.error('Unexpected response data:', response.data);
            setError('Unexpected response format');
          }
        } else {
          setJobs([]);
        }
      } catch (err) {
        console.error('Error fetching jobs:', err);
        setError('Error fetching jobs');
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [title, jobType, locationQuery]);

  const handleApply = async (jobId) => {
    try {
      await axios.post('http://localhost:5000/api/users/apply-job', { jobId }, {
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': localStorage.getItem('auth-token'),
        },
      });
      // Refresh the job list or notify the user
      alert(`Applied for job ID: ${jobId}`);
    } catch (err) {
      console.error('Error applying for job:', err);
      alert('Error applying for job');
    }
  };

  return (
    <div className='p-8 bg-stone-950 min-h-screen flex flex-col items-center'>
      <h1 className='text-white text-4xl mb-8'>Job Listings</h1>
      {loading && <p className='text-white'>Loading...</p>}
      {error && <p className='text-white'>{error}</p>}
      {jobs.length > 0 ? (
        <ul className='w-full max-w-4xl'>
          {jobs.map(job => (
            <li key={job._id} className='bg-gray-800 p-4 mb-4 rounded-lg flex items-center justify-between'>
              <div className='flex flex-col'>
                <h2 className='text-white text-xl mb-2'>{job.title}</h2>
                <p className='text-gray-300'>{job.type} - {job.location}</p>
                <p className='text-gray-300 mt-1'>Description: {job.description}</p>
                <p className='text-gray-300'>Salary: {job.salary}</p>
              </div>
              <button 
                className='ml-4 p-2 bg-blue-600 text-white rounded hover:bg-blue-700'
                onClick={() => handleApply(job._id)}
              >
                Apply
              </button>
            </li>
          ))}
        </ul>
      ) : (
        !loading && !error && <p className='text-white'>No jobs found matching your criteria.</p>
      )}
    </div>
  );
}

export default SearchResults;
