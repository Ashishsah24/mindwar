import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Timer from './components/Timer'; // Your timer component
import Home from './components/Home'; // Your home component
import Signup from './components/Signup'; // Import your Signup component
import Login from './components/Login'; // Import your Login component
import { AuthProvider } from './AuthContext'; // Import the AuthProvider
import ProtectedRoute from './components/ProtectedRoute'; // Import ProtectedRoute

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/timer" element={<ProtectedRoute element={<Timer />} />} /> {/* Protected Route */}
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
