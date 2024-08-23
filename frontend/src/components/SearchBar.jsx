import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [title, setTitle] = useState('');
  const [jobType, setJobType] = useState('');
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to the results page with search parameters
    navigate(`/search-results?title=${title}&type=${jobType}&location=${location}`);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-4xl mx-auto">
      <div className="flex items-center bg-stone-950 rounded-lg shadow-md p-4 max-w-4xl mx-auto">
        <input 
          type="text" 
          placeholder="Skills/Keywords" 
          className="flex-grow p-2 rounded-l-lg border border-gray-300"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select 
          className="mx-2 p-2 border border-gray-300 rounded"
          value={jobType}
          onChange={(e) => setJobType(e.target.value)}
        >
          <option value="">Job Type</option>
          <option value="full-time">Full-Time</option>
          <option value="part-time">Part-Time</option>
          <option value="contract">Contract</option>
          <option value="internship">Internship</option>
        </select>
        <input 
          type="text" 
          placeholder="Location" 
          className="flex-grow p-2 border border-gray-300 rounded"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button 
          type="submit"
          className="ml-2 p-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
