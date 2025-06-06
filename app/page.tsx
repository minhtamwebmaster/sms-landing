'use client';

import React, { useEffect } from 'react';
import ClientLayout from '../components/ClientLayout';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Features from '../components/Features';
import Benefits from '../components/Benefits';
import Pricing from '../components/Pricing';
import CaseStudies from '../components/CaseStudies';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';
import { useModalContext } from '../contexts/ModalContext';
import { scrollToSection } from '../utils/scrollUtils';

export default function Home() {
  const { openTrialModal, openContactModal } = useModalContext();

  // Handle hash navigation when page loads
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      // Delay scroll to ensure page is fully loaded
      setTimeout(() => {
        scrollToSection(hash);
      }, 100);
    }
  }, []);

  return (
    <ClientLayout>
      <div className="min-h-screen bg-white">
        <Hero onOpenTrialModal={openTrialModal} />
        <Services />
        <Features />
        <Benefits onOpenTrialModal={openTrialModal} />
        <Pricing onOpenContactModal={openContactModal} />
        <CaseStudies />
        <Testimonials />
        <FAQ onOpenContactModal={openContactModal} />
        <FinalCTA onOpenTrialModal={openTrialModal} />
      </div>
    </ClientLayout>
  );
}
