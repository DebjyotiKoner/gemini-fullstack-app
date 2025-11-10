import React from 'react';

function AboutPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">About This Application</h1>
      <p>This is a full-stack application built with React, Node.js, Express, and Docker.</p>
      <p>It is designed to be deployed with a CI/CD pipeline using Jenkins on an AWS EC2 instance.</p>
    </div>
  );
}

export default AboutPage;
