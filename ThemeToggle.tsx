import React from 'react';
import { Sun, Moon } from 'lucide-react';

type ThemeToggleProps = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

const ThemeToggle: React.FC<ThemeToggleProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="theme-toggle">
      <button
        className="theme-toggle-button"
        onClick={toggleDarkMode}
        title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        aria-label={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>
    </div>
  );
};

export default ThemeToggle;