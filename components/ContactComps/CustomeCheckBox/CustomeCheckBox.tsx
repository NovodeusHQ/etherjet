'use client';

import React, { useState } from 'react';
import './CustomeCheckBox.css';

interface CustomCheckboxProps {
  id: string;
  name: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}
const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  id,
  name,
  checked,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const toggleChecked = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    if (onChange) {
      onChange(newCheckedState);
    }
  };

  return (
    <label className='custom-checkbox'>
      <input
        id={id}
        name={name}
        type='checkbox'
        checked={isChecked}
        onChange={toggleChecked}
      />
      <span className='checkmark'></span>
    </label>
  );
};

export default CustomCheckbox;
