import React from 'react';

/**
 * Brand Eye Icon component
 * Uses the authentic vibrant Teal (#00C1CA) and Orange (#FD7401) from the logo.
 */
export default function CoralEyeIcon({ className = 'w-5 h-5', ...props }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block flex-shrink-0 ${className}`}
      {...props}
    >
      <path
        d="M4 24C4 24 11 10 24 10C37 10 44 24 44 24C44 24 37 38 24 38C11 38 4 24 4 24Z"
        stroke="#FD7401"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="24" r="8" fill="#FFFFFF" stroke="#1C2B33" strokeWidth="3" />
      <circle cx="24" cy="24" r="4.5" fill="#00C1CA" />
      <circle cx="26" cy="22" r="1.5" fill="#FFFFFF" />
      <path
        d="M18 16C20 13.5 22 12.5 24 12.5"
        stroke="#00C1CA"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
