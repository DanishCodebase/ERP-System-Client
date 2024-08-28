// src/components/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-gray-800">TsTechnos</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {['Dashboard', 'All Positions', 'Client'].map((tab) => (
                <NavLink
                  key={tab}
                  to={tab.toLowerCase().replace(/\s+/g, '-')}
                  className={({ isActive }) =>
                    isActive
                      ? 'border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                  }
                >
                  {tab}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
