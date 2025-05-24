import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-gray-900 text-center py-4">
      <p className="text-sm text-gray-700 dark:text-gray-400">
        &copy; {new Date().getFullYear()} 1VACR. All rights reserved.
      </p>
    </footer>
  );
}