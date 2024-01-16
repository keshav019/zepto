import React, { useEffect, useRef } from 'react';
import InputBoxProps from '../model/InputBoxProps';
import '../style/inputBox.css'
const InputBox: React.FC<InputBoxProps> = ({ value, onChange, onClick, onKeyDown, children }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="input-box">
      <input
        type="text"
        ref={inputRef}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onClick={onClick}
        placeholder="Type here..."
      />
      {children}
    </div>
  );
};

export default InputBox;
