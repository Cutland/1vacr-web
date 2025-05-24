import React from 'react';

export default function JoinUp() {
  return (
    <section id="join" className="w-full px-4 py-12">
      <div className="w-full max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
        <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Join Up</h3>
        <p className="text-gray-800 dark:text-gray-200 mb-2">
          Ready to jump in? We keep things casual but coordinated. Fill out our short form and we’ll send you the rundown.
        </p>
        <a
          href="https://forms.gle/your-form-link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600"
        >Sign Up Now</a>
      </div>
    </section>
  );
}