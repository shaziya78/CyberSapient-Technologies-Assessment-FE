import React from 'react';

export default function AuthFormWrapper({ title, children }) {
  return (
<div className="flex min-h-screen px-4 py-6 justify-center items-center">
  <div className="w-full max-w-md p-8">
    <h2 className="text-2xl font-semibold mb-6 text-center">{title}</h2>
    {children}
  </div>
</div>

  );
}
