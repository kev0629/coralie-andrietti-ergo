import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
  useCallback,
} from "react";

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

  const toggleContactModal = useCallback(() => {
    setIsContactModalOpen((prev) => !prev);
  }, []);

  const value = useMemo(
    () => ({ isContactModalOpen, toggleContactModal }),
    [isContactModalOpen, toggleContactModal]
  );

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
