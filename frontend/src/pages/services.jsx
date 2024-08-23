import React from 'react';

const Services = () => {
  return (
    <div className="bg-stone-950 text-white min-h-screen">
      {/* Header Section */}
      <header className="text-center py-16 bg-zinc-800">
        <h1 className="text-5xl font-extrabold text-blue-400">Our Services</h1>
        <p className="text-xl mt-4 text-gray-300">
          Empowering Employers and Job Seekers with the Best Tools
        </p>
      </header>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-16">
          {/* Employer Services */}
          <div className="mb-16">
            <h2 className="text-4xl font-semibold text-blue-400 mb-8">For Employers</h2>
            <ul className="space-y-6">
              <li className="bg-gray-800 p-6 rounded-lg">
                <strong className="text-xl font-medium text-white">Job Posting:</strong>
                <p className="text-gray-400 mt-2">
                  Post job listings effortlessly and reach a vast pool of talented candidates.
                </p>
              </li>
              <li className="bg-gray-800 p-6 rounded-lg">
                <strong className="text-xl font-medium text-white">Candidate Screening:</strong>
                <p className="text-gray-400 mt-2">
                  Use our advanced tools to filter and review applicants effectively.
                </p>
              </li>
              <li className="bg-gray-800 p-6 rounded-lg">
                <strong className="text-xl font-medium text-white">Employer Dashboard:</strong>
                <p className="text-gray-400 mt-2">
                  Manage job postings and track applications all in one place.
                </p>
              </li>
              <li className="bg-gray-800 p-6 rounded-lg">
                <strong className="text-xl font-medium text-white">Analytics & Reporting:</strong>
                <p className="text-gray-400 mt-2">
                  Gain insights with detailed analytics to track your job postings' performance.
                </p>
              </li>
            </ul>
          </div>

          {/* Employee Services */}
          <div className="mb-16">
            <h2 className="text-4xl font-semibold text-blue-400 mb-8">For Employees</h2>
            <ul className="space-y-6">
              <li className="bg-gray-800 p-6 rounded-lg">
                <strong className="text-xl font-medium text-white">Job Search:</strong>
                <p className="text-gray-400 mt-2">
                  Find jobs that match your skills, location, and preferences.
                </p>
              </li>
              <li className="bg-gray-800 p-6 rounded-lg">
                <strong className="text-xl font-medium text-white">Resume Builder:</strong>
                <p className="text-gray-400 mt-2">
                  Craft a professional resume using our easy-to-use builder.
                </p>
              </li>
              <li className="bg-gray-800 p-6 rounded-lg">
                <strong className="text-xl font-medium text-white">Job Alerts:</strong>
                <p className="text-gray-400 mt-2">
                  Set up alerts to be notified of new job postings that match your criteria.
                </p>
              </li>
              <li className="bg-gray-800 p-6 rounded-lg">
                <strong className="text-xl font-medium text-white">Application Tracking:</strong>
                <p className="text-gray-400 mt-2">
                  Keep track of your job applications and their statuses.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6 lg:px-16">
          <h2 className="text-4xl font-semibold text-center text-blue-400 mb-12">What Our Users Say</h2>
          <div className="space-y-8">
            <blockquote className="text-center text-lg font-light text-gray-300">
              “This platform made finding a job so much easier!” - Jane Doe
            </blockquote>
            <blockquote className="text-center text-lg font-light text-gray-300">
              “We found the perfect candidate within days of posting our job!” - John Smith
            </blockquote>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <footer className="text-center py-16 bg-gray-900">
        <h3 className="text-3xl font-semibold text-blue-400">Ready to get started?</h3>
        <p className="mt-4 text-lg text-gray-300">
          Sign up now and start your journey with us.
        </p>
        <button className="mt-8 px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-lg font-medium">
          <a href='/login'>Sign Up</a>
        </button>
      </footer>
    </div>
  );
};

export default Services;
