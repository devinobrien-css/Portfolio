import { createContext, useContext, useState } from 'react';

interface TLDRContextProps {
  isTLDRMode: boolean;
  toggleTLDR: () => void;
}

const TLDRContext = createContext<TLDRContextProps | undefined>(undefined);

export const TLDRProvider = ({ children }: { children: React.ReactNode }) => {
  const [isTLDRMode, setIsTLDRMode] = useState(false);

  const toggleTLDR = () => {
    setIsTLDRMode((prev) => !prev);
  };

  return (
    <TLDRContext.Provider value={{ isTLDRMode, toggleTLDR }}>
      {children}
    </TLDRContext.Provider>
  );
};

export const useTLDR = () => {
  const context = useContext(TLDRContext);
  if (context === undefined) {
    throw new Error('useTLDR must be used within a TLDRProvider');
  }
  return context;
};
