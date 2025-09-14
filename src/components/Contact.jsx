// src/components/Contact.jsx
import React from "react";

function Contact() {
  return (
    <div className="bg-gray-50 text-gray-800 p-8 space-y-6">
      <h2 className="text-3xl font-bold text-center">Contact Me</h2>
      <p className="text-center">
        You can reach me via email, phone, or LinkedIn.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="p-4 border rounded-lg shadow-sm">
          <h3 className="font-semibold text-lg">Email</h3>
          <p>supriyasukale11@example.com</p>
        </div>
        <div className="p-4 border rounded-lg shadow-sm">
          <h3 className="font-semibold text-lg">Phone</h3>
          <p>+91 8080050394</p>
        </div>
        <div className="p-4 border rounded-lg shadow-sm">
          <h3 className="font-semibold text-lg">LinkedIn</h3>
          <p>
            <a
              href="https://www.linkedin.com/in/supriya-sukale-6252b91a8/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              linkedin.com/in/supriya-sukale
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;

