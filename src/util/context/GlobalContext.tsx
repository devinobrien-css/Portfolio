import React, { createContext, useEffect, useState } from 'react';

interface GlobalContextProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
  modalOpen?: boolean;
  setModalOpen?: (modalOpen: boolean) => void;
}

// Create a context for your variable
export const GlobalContext = createContext<GlobalContextProps>({
  darkMode: false,
  setDarkMode: () => null,
  modalOpen: false,
  setModalOpen: () => null,
});

// Provider component to wrap your app and manage the variable
export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [darkModeFlag, setDarkModeFlag] = useState(false);

  const setDarkMode = (value: boolean) => {
    if (value) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.setProperty(
        '--color-primary',
        '59 130 246',
      );
      document.documentElement.style.setProperty(
        '--color-primary-light',
        '96 165 250',
      );
      document.documentElement.style.setProperty(
        '--color-secondary',
        '167 139 250',
      );
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.setProperty(
        '--color-primary',
        '59 130 246',
      );
      document.documentElement.style.setProperty(
        '--color-primary-light',
        '96 165 250',
      );
      document.documentElement.style.setProperty(
        '--color-secondary',
        '139 92 246',
      );
      localStorage.theme = 'light';
    }
    setDarkModeFlag(value);
  };

  useEffect(() => {
    if ('theme' in localStorage) {
      setDarkMode(localStorage.theme === 'dark');
    } else {
      setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  const exportContext = {
    darkMode: darkModeFlag,
    setDarkMode: setDarkMode,
  };

  return (
    <GlobalContext.Provider value={exportContext}>
      {children}
    </GlobalContext.Provider>
  );
};
