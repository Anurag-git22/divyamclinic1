import React from 'react';

/**
 * Coral Eye Icon component (scoped to favicon & repeating small icon e.g. next to CTA buttons)
 * Uses the authentic coral palette (#C95E42) as instructed.
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
        stroke="#C95E42"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="24" r="8" fill="#FAF8F7" stroke="#111827" strokeWidth="3" />
      <circle cx="24" cy="24" r="4.5" fill="#C95E42" />
      <circle cx="26" cy="22" r="1.5" fill="#FAF8F7" />
      <path
        d="M18 16C20 13.5 22 12.5 24 12.5"
        stroke="#C9A08C"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
