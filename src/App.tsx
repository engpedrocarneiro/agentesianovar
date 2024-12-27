import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Schedule from './pages/Schedule';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Header from './components/Header';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-blue-900">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/agenda" element={<Schedule />} />
          <Route path="/sobre" element={<About />} />
        <Route path="/privacidade" element={<Privacy />} />
        <Route path="/termos" element={<Terms />} />
        </Routes>
        <Footer />
        <ChatWidget />
      </div>
    </Router>
  );
}
