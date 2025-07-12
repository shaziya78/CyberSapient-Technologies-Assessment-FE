import React, { useState } from 'react';

import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

export default function AuthInput({ type, name, placeholder, value, onChange, ...rest }) {
      const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  const inputType = isPassword && showPassword ? 'text' : type;
  return (
   <div className="relative w-full">
      <input
        type={inputType}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full text-base px-4 py-3 border border-gray-300 rounded-lg pr-12 placeholder:text-sm"
        {...rest}
      />
      {isPassword && (
        <span
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600"
        >
          {showPassword ? <AiOutlineEyeInvisible size={22} /> : <AiOutlineEye size={22} />}
        </span>
      )}
    </div>
  );
}
