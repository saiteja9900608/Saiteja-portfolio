import React from 'react';

const Certifications = () => {
  return (
    <section id="certifications" className="p-10 bg-blue-50">
      <h2 className="text-3xl font-bold text-center mb-6">Certifications</h2>

      {/* NIT Warangal */}
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300 mb-6">
        <h3 className="text-xl font-semibold">Machine Learning Intern - NIT Warangal</h3>
        <p className="mt-2 text-gray-700">
          Certified for developing a Cyber Bullying Detection system during internship organized by NITW and Boeing India.
        </p>
      </div>

      {/* Walmart + Forage */}
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
        <h3 className="text-xl font-semibold">Certificate of Completion - Advanced Software Engineering Job Simulation</h3>
        <p className="mt-2 text-gray-700">
          <strong>Issued By:</strong> Walmart and Forage<br />
          <strong>Skills Covered:</strong><br />
          • Advanced Data Structures<br />
          • Relational Database Design<br />
          • Software Architecture<br />
          • Data Munging<br />
          <br />
          <strong>Verification Codes:</strong><br />
          Enrollment: <code>7FHn2yFeonbAs3CDe</code><br />
          User: <code>yPp6jErZdEQRkKPZd</code>
        </p>
      </div>
    </section>
  );
};

export default Certifications;
