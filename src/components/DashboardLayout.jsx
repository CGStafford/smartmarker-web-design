import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  const navLinks = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Assessments', path: '/dashboard/assessments' },
    { name: 'Settings', path: '/dashboard/settings' },
    { name: 'Help', path: '/dashboard/help' },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white h-screen">
        <div className="p-6">
          <h2 className="text-2xl font-bold">Student Portal</h2>
          <nav className="mt-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `block py-2 px-4 rounded hover:bg-gray-700 ${
                    isActive ? 'bg-gray-700' : ''
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-grow p-6 bg-gray-100 min-h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
