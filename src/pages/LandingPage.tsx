import React from 'react';
import Hero from '../components/Hero';
import Solutions from '../components/Solutions';
import AgentDetails from '../components/AgentDetails';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';
import ScrollToTop from '../components/ScrollToTop';
import CookieConsent from '../components/CookieConsent';

export default function LandingPage() {
  return (
    <main>
      <Hero />
      <Solutions />
      <AgentDetails />
      <Features />
      <Testimonials />
      <Pricing />
      <Contact />
      <ScrollToTop />
      <CookieConsent />
    </main>
  );
}