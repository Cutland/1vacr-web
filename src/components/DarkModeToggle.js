import React, { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
      aria-label="Toggle Dark Mode"
    >
      {isDark ? <FiSun className="text-gray-900" /> : <FiMoon className="text-gray-100" />}
    </button>
  );
}