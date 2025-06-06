'use client';

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import TrialModal from './TrialModal';
import ContactModal from './ContactModal';
import { useModalContext } from '../contexts/ModalContext';

interface ClientLayoutProps {
  children: React.ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({
  children,
  showHeader = true,
  showFooter = true
}) => {
  const {
    isTrialModalOpen,
    openTrialModal,
    closeTrialModal,
    isContactModalOpen,
    closeContactModal
  } = useModalContext();

  return (
    <>
      {showHeader && <Header onOpenTrialModal={openTrialModal} />}
      {children}
      {showFooter && <Footer />}
      <TrialModal isOpen={isTrialModalOpen} onClose={closeTrialModal} />
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </>
  );
};

export default ClientLayout;
