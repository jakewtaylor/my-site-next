import React from 'react';

export const Layout: React.FC = ({ children }) => (
  <div className="md:ml-64 bg-gray-900 min-h-screen">
    {children}

    <div className="md:hidden h-24"></div>
  </div>
);
