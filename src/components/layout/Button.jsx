// layout/Button.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Convertbutton = ({ title, className }) => { // Added className prop
  return (
    <button
      className={`bg-[#fe802b] text-2xl text-white font-semibold py-3 px-6 rounded-md hover:bg-[#fe802b] hover:text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 flex items-center gap-2 ${className}`} // Applied className
    >
      {title}
      <FontAwesomeIcon icon={faArrowRight} />
    </button>
  );
};

export default Convertbutton;