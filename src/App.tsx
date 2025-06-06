import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Pricing from './components/Pricing';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import TrialModal from './components/TrialModal';
import ContactModal from './components/ContactModal';
import { useTrialModal } from './hooks/useTrialModal';
import { useContactModal } from './hooks/useContactModal';

function App() {
  const { isOpen: isTrialModalOpen, openModal: openTrialModal, closeModal: closeTrialModal } = useTrialModal();
  const { isOpen: isContactModalOpen, openModal: openContactModal, closeModal: closeContactModal } = useContactModal();

  return (
    <div className="min-h-screen bg-white">
      <Header onOpenTrialModal={openTrialModal} />
      <Hero onOpenTrialModal={openTrialModal} />
      <Services />
      <Features />
      <Benefits onOpenTrialModal={openTrialModal} />
      <Pricing onOpenContactModal={openContactModal} />
      <CaseStudies />
      <Testimonials />
      <FAQ onOpenContactModal={openContactModal} />
      <FinalCTA onOpenTrialModal={openTrialModal} />
      <Footer />
      <TrialModal isOpen={isTrialModalOpen} onClose={closeTrialModal} />
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </div>
  );
}

export default App;
