// src/layouts/DashboardLayout.jsx
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const navLinks = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Assessments", path: "/dashboard/assessments" },
  { name: "Settings", path: "/dashboard/settings" },
];

const DashboardLayout = () => (
  <div className="flex min-h-screen">
    {/* Sidebar */}
    <aside className="w-64 h-screen sticky top-0 flex-shrink-0 p-6 bg-gray-800 text-white">
      <h2 className="text-2xl font-bold">SmartMarker</h2>
      <nav className="mt-8">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            end
            className={({ isActive }) =>
              `block py-2 px-4 rounded transition-colors duration-300 hover:bg-gray-700 ${
                isActive ? "underline underline-offset-4" : ""
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </aside>

    {/* Main Content */}
    <div className="flex-grow p-6 bg-gray-100">
      <Outlet />
    </div>
  </div>
);

export default DashboardLayout;
