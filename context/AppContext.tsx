import React, { createContext, useContext } from "react";

interface AppContextType {
  mainModalIsOpen: boolean;
  setMainModalIsOpen: (isOpen: boolean) => void;
}

const AppContext = createContext<AppContextType | null>(null);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === null) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};

export default AppContext;
