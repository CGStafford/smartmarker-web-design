// src/App.jsx
import React, { useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import DashboardLayout from './components/DashboardLayout';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Assessments from './pages/Assessments';
import Settings from './pages/Settings';
import Help from './pages/Help';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate(); // Correct usage inside component

  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate('/dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header with authentication props */}
      <Header
        isAuthenticated={isAuthenticated}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
      />

      {/* Main content area */}
      <main className="flex-grow pt-16">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Protected Dashboard Route */}
          <Route
            path="/dashboard/*"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="assessments" element={<Assessments />} />
            <Route path="settings" element={<Settings />} />
            <Route path="help" element={<Help />} />
          </Route>

          {/* Redirect all unknown routes */}
          <Route
            path="*"
            element={
              isAuthenticated ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
