import { createContext, useContext, useState } from "react";

interface SidebarDrawerProviderProps {
  children: React.ReactNode;
};

interface SidebarDrawerContextData {
  isDrawerOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  function onOpen() {
    setIsDrawerOpen(true);
  };

  function onClose() {
    setIsDrawerOpen(false);
  };

  return (
    <SidebarDrawerContext.Provider value={{isDrawerOpen, onOpen, onClose}}>
      {children}
    </SidebarDrawerContext.Provider>
  );
};

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);
