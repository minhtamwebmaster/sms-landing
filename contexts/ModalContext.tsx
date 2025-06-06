'use client';

import React, { createContext, useContext, useState } from 'react';

interface ModalContextType {
  // Trial Modal
  isTrialModalOpen: boolean;
  openTrialModal: () => void;
  closeTrialModal: () => void;
  
  // Contact Modal
  isContactModalOpen: boolean;
  openContactModal: () => void;
  closeContactModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModalContext must be used within a ModalProvider');
  }
  return context;
};

interface ModalProviderProps {
  children: React.ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openTrialModal = () => setIsTrialModalOpen(true);
  const closeTrialModal = () => setIsTrialModalOpen(false);
  
  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  const value = {
    isTrialModalOpen,
    openTrialModal,
    closeTrialModal,
    isContactModalOpen,
    openContactModal,
    closeContactModal,
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
    </ModalContext.Provider>
  );
};
