import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider, useAuth } from './context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) return <div className="flex min-h-screen items-center justify-center">Loading...</div>;
  return user ? children : <Navigate to="/login" />;
};

const AppContent = () => (
  <BrowserRouter>
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Routes>
        <Route path="/" element={<div>Home Page Coming Soon</div>} />
        <Route path="/login" element={<div>Login Form Coming</div>} />
        <Route path="/register" element={<div>Register Form Coming</div>} />
        <Route path="/dashboard" element={<ProtectedRoute><div>Dashboard</div></ProtectedRoute>} />
      </Routes>
      <Toaster />
    </div>
  </BrowserRouter>
);

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;