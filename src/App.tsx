import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Schedule from './pages/Schedule';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-blue-900">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/agenda" element={<Schedule />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}