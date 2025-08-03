import React, { createContext, useContext, useState, ReactNode } from "react";

interface ModalContextType {
  isContactModalOpen: boolean;
  toggleContactModal: () => void;
}

const ModalContext = createContext<ModalContextType | null>(null);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === null) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const toggleContactModal = () => {
    setIsContactModalOpen(prev => !prev);
  };

  return (
    <ModalContext.Provider value={{ isContactModalOpen, toggleContactModal }}>
      {children}
    </ModalContext.Provider>
  );
};
