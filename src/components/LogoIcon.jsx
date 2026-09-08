import React from 'react';

/**
 * LogoIcon component - Uses the main eye-logo.png
 * Replaces CoralEyeIcon throughout the site
 */
export default function LogoIcon({ className = 'w-5 h-5', ...props }) {
  return (
    <img 
      src="/eye-logo.png" 
      alt="Divyam Eye Care" 
      className={className}
      {...props}
    />
  );
}
