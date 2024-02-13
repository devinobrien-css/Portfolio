import React, { createContext, useContext, useState } from 'react';

// Create a context for your variable
const GlobalContext = createContext({
    tldr: false,
    setTldr: (value: boolean) => {}
});

// Custom hook to access the variable
export const useGlobalContext = () => useContext(GlobalContext);

// Provider component to wrap your app and manage the variable
export const GlobalContextProvider = ({ children }: {
    children: React.ReactNode;
}) => {
  const [tldr, setTldr] = useState(false);

  return (
    <GlobalContext.Provider value={{ tldr, setTldr }}>
      {children}
    </GlobalContext.Provider>
  );
};
