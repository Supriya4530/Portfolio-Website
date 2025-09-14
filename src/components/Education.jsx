import React from "react";

function Education() {
  return (
    <section id="education" className="bg-gray-50 py-16 px-6 md:px-20 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">Education</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        
        {/* Degree */}
        <div className="p-6 border border-gray-200 rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold text-gray-800">
            Bachelor of Computer Science
          </h3>
          <p className="text-lg text-gray-600">Dr. Babasaheb Ambedkar Technological University,Lonare</p>
          <p className="text-gray-500">2021 - 2025</p>
        </div>

        {/* Example Extra Course/Cert */}
     {/*  <div className="p-6 border border-gray-200 rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold text-gray-800">
            Java with Spring Boot Course
          </h3>
          <p className="text-lg text-gray-600">Tudip Learning</p>
          <p className="text-gray-500">Completed in 2025</p>
        </div> */}

      </div> 
    </section>
  );
}

export default Education;

