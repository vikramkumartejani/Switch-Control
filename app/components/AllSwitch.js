'use client'
import React, { useState } from 'react';
import { GiPowerButton } from 'react-icons/gi';

const AllSwitch = ({ defaultChecked = false, onChange }) => {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const switchId = `switch-${Math.random().toString(36).substr(2, 9)}`;

  const handleChange = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    if (onChange) onChange(newChecked);
  };

  return (
    <div>
      <input
        type="checkbox"
        id={switchId} // Unique ID
        checked={isChecked}
        onChange={handleChange}
        className="hidden"
      />
      <label
        htmlFor={switchId}
        className={`switchmain ${isChecked ? 'switch-active' : ''}`}
      >
        <GiPowerButton className="icon-style" size={24} />
        {isChecked ? 'All Switch On' : 'All Switch Off'}
      </label>
    </div>
  );
};

export default AllSwitch;
