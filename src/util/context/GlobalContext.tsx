import React, { createContext, useEffect, useState } from 'react';

interface GlobalContextProps {
  tldr: boolean;
  setTldr: (tldr: boolean) => void;
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

// Create a context for your variable
export const GlobalContext = createContext<GlobalContextProps>({
  tldr: false,
  setTldr: () => null,
  darkMode: false,
  setDarkMode: () => null,
});

// Provider component to wrap your app and manage the variable
export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [tldrFlag, setTldrFlag] = useState(true);
  const [darkModeFlag, setDarkModeFlag] = useState(false);

  const setDarkMode = (value: boolean) => {
    if (value) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
    setDarkModeFlag(value);
  };

  const setTldr = (value: boolean) => {
    if (value) {
      localStorage.tldr = 'true';
      setTldrFlag(true);
    } else {
      localStorage.removeItem('tldr');
      setTldrFlag(false);
    }
  };

  useEffect(() => {
    // On page load or when changing themes
    if (!('theme' in localStorage)) {
      if (
        localStorage.theme === 'dark' ||
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        setDarkMode(true);
      } else {
        setDarkMode(false);
      }
    } else {
      setDarkMode(localStorage.theme === 'dark');
    }

    if (localStorage.tldr === 'true') {
      setTldrFlag(true);
    }
  }, []);

  const exportContext = {
    tldr: tldrFlag,
    setTldr: setTldr,
    darkMode: darkModeFlag,
    setDarkMode: setDarkMode,
  };

  return (
    <GlobalContext.Provider value={exportContext}>
      {children}
    </GlobalContext.Provider>
  );
};
