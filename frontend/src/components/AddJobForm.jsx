import React, { useState } from 'react';
import axios from 'axios';

const AddJobForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('full-time');
  const [salary, setSalary] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isNaN(salary)) {
      setError('Salary must be a number');
      return;
    }

    setIsSubmitting(true);
    setError('');
    setSuccessMessage('');

    const addJob = { title, description, location, type, salary };

    try {
      const response = await axios.post('http://localhost:5000/api/jobs', addJob, {
        headers: {
          'x-auth-token': localStorage.getItem('auth-token'),
        },
      });

      if (response.status === 201) {
        setSuccessMessage('Job added successfully!');
        // Clear form
        setTitle('');
        setDescription('');
        setLocation('');
        setType('full-time');
        setSalary('');
      }
    } catch (err) {
      setError('Failed to add job. Please try again.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-neutral-950 p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-white text-3xl mb-4">Add New Job</h2>
      {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <input 
        type="text" 
        placeholder="Job Title" 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 mb-4 rounded border border-gray-300"
        required
      />
      <textarea 
        placeholder="Job Description" 
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 mb-4 rounded border border-gray-300"
        required
      />
      <input 
        type="text" 
        placeholder="Location" 
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="w-full p-2 mb-4 rounded border border-gray-300"
        required
      />
      <select 
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="w-full p-2 mb-4 rounded border border-gray-300"
      >
        <option value="full-time">Full-Time</option>
        <option value="part-time">Part-Time</option>
        <option value="contract">Contract</option>
        <option value="internship">Internship</option>
      </select>
      <input 
        type="text" 
        placeholder="Salary" 
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
        className="w-full p-2 mb-4 rounded border border-gray-300"
        required
      />
      <button 
        type="submit"
        className={`w-full p-2 text-white rounded ${isSubmitting ? 'bg-gray-500' : 'bg-blue-600 hover:bg-blue-700'}`}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Add Job'}
      </button>
    </form>
  );
};

export default AddJobForm;
