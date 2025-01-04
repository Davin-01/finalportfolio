import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="min-h-screen py-16 bg-gray-800 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
          <p className="text-lg mb-8">Feel free to reach out to me via the contact information below:</p>
          <div className="space-y-4">
            <p className="text-lg">
              Email: <a href="mailto:your.email@example.com" className="text-blue-600">moengadavid90@gmail.com</a>
            </p>
            <p className="text-lg">
              LinkedIn: <a href="https://www.linkedin.com/in/yourprofile" className="text-blue-600" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourprofile</a>
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;
    