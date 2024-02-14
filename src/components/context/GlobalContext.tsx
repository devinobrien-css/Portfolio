import React, { createContext, useEffect, useState } from 'react';

// Create a context for your variable
export const GlobalContext = createContext({
  tldr: false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setTldr: (_tldr: boolean) => {
    return;
  },
  darkMode: false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setDarkMode: (_darkMode: boolean) => {
    return;
  },
});
  
// Provider component to wrap your app and manage the variable
export const GlobalContextProvider = ({ children }: {
    children: React.ReactNode;
}) => {
  const [tldr, setTldr] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setDarkMode(false);
    }
  }, []);


  // // Whenever the user explicitly chooses light mode
  // localStorage.theme = 'light';

  // // Whenever the user explicitly chooses dark mode
  // localStorage.theme = 'dark';

  // // Whenever the user explicitly chooses to respect the OS preference
  // localStorage.removeItem('theme');


  const exportContext = {
    tldr,
    setTldr,
    darkMode,
    setDarkMode,
  };

  return (
    <GlobalContext.Provider value={exportContext}>
      {children}
    </GlobalContext.Provider>
  );
};
