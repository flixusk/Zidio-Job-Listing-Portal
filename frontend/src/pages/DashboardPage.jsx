import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployerDashboard from './EmployerDashboard';
import EmployeeDashboard from './EmployeeDashboard';

const DashboardPage = () => {
  const [userRole, setUserRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/users/me', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem('auth-token'),
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user role');
        }

        const data = await response.json();
        setUserRole(data.role);
      } catch (error) {
        console.error('Error fetching user role:', error);
        navigate('/login'); // Redirect to login if there's an error
      }
    };

    fetchUserRole();
  }, [navigate]);

  if (userRole === null) {
    return <p>Loading...</p>;
  }

  if (userRole === 'employer') {
    return <EmployerDashboard />;
  } else if (userRole === 'employee') {
    return <EmployeeDashboard />;
  } else {
    return <p>Access denied.</p>;
  }
};

export default DashboardPage;
