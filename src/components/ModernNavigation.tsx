import { Icon } from '@iconify/react';
import { useState, useEffect, useRef } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useTheme } from '../util/context/ThemeContext';
import { useTLDR } from '../util/context/TLDRContext';

export const ModernNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showTLDRHint, setShowTLDRHint] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { isTLDRMode, toggleTLDR } = useTLDR();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const tldrButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Show TLDR hint on first visit if not already in TLDR mode
  useEffect(() => {
    const hintShown = localStorage.getItem('tldr-hint-shown');
    if (!isTLDRMode && !hintShown) {
      setShowTLDRHint(true);
      const timer = setTimeout(() => {
        setShowTLDRHint(false);
        localStorage.setItem('tldr-hint-shown', 'true');
      }, 8000);

      return () => clearTimeout(timer);
    }
  }, [isTLDRMode]);

  const handleTLDRClick = () => {
    toggleTLDR();
    setShowTLDRHint(false);
    localStorage.setItem('tldr-hint-shown', 'true');
  };

  const dismissHint = () => {
    setShowTLDRHint(false);
    localStorage.setItem('tldr-hint-shown', 'true');
  };

  const navItems = [
    { name: 'Home', to: 'hero', icon: 'ph:house', type: 'scroll' },
    { name: 'Work', to: 'services', icon: 'ph:briefcase', type: 'scroll' },
    { name: 'Experience', to: 'experience', icon: 'ph:medal', type: 'scroll' },
    { name: 'Contact', to: 'contact', icon: 'ph:envelope', type: 'scroll' },
  ];

  const routeItems = [
    { name: 'Projects', to: '/projects', icon: 'ph:code' },
    { name: 'Skills', to: '/skills', icon: 'ph:lightning' },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 shadow-lg backdrop-blur-md dark:bg-neutral-900/95'
            : 'bg-transparent'
        }`}
      >
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='flex h-16 items-center justify-between'>
            {/* Logo */}
            <div className='flex items-center'>
              {isHomePage ? (
                <ScrollLink
                  to='hero'
                  smooth={true}
                  duration={500}
                  className='cursor-pointer text-2xl font-bold text-neutral-900 dark:text-white'
                >
                  Devin O'Brien
                </ScrollLink>
              ) : (
                <RouterLink
                  to='/'
                  className='cursor-pointer text-2xl font-bold text-neutral-900 dark:text-white'
                >
                  Devin O'Brien
                </RouterLink>
              )}
            </div>

            {/* Desktop Menu */}
            <div className='hidden md:block'>
              <div className='ml-10 flex items-baseline space-x-4'>
                {navItems.map((item) => {
                  if (isHomePage) {
                    // On home page, use scroll links
                    return (
                      <ScrollLink
                        key={item.name}
                        to={item.to}
                        smooth={true}
                        duration={500}
                        className='cursor-pointer rounded-lg px-3 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white'
                      >
                        {item.name}
                      </ScrollLink>
                    );
                  } else {
                    // On other pages, route to home with section hash
                    return (
                      <RouterLink
                        key={item.name}
                        to={`/#${item.to}`}
                        className='cursor-pointer rounded-lg px-3 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white'
                      >
                        {item.name}
                      </RouterLink>
                    );
                  }
                })}

                {/* Divider */}
                <div className='h-6 w-px bg-neutral-300 dark:bg-neutral-700'></div>

                {/* Route Links */}
                {routeItems.map((item) => (
                  <RouterLink
                    key={item.name}
                    to={item.to}
                    className='cursor-pointer rounded-lg px-3 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white'
                  >
                    {item.name}
                  </RouterLink>
                ))}
              </div>
            </div>

            {/* Toggle Controls */}
            <div className='hidden items-center space-x-3 md:flex'>
              {/* TLDR Toggle */}
              <div className='relative'>
                <button
                  ref={tldrButtonRef}
                  onClick={handleTLDRClick}
                  className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-all ${
                    isTLDRMode
                      ? 'bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100'
                      : 'text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800'
                  }`}
                  title={isTLDRMode ? 'Show full content' : 'Show TLDR version'}
                >
                  <Icon icon='ph:lightning' className='size-4' />
                  <span>TLDR</span>
                </button>

                {/* TLDR Hint Popup */}
                {showTLDRHint && (
                  <div className='absolute left-1/2 top-full z-[1000] mt-2 w-64 -translate-x-1/2'>
                    <div className='relative rounded-lg bg-white p-3 shadow-xl ring-1 ring-neutral-200 dark:bg-neutral-800 dark:ring-neutral-700'>
                      {/* Arrow pointing up */}
                      <div className='absolute -top-1 left-1/2 size-2 -translate-x-1/2 rotate-45 bg-white ring-1 ring-neutral-200 dark:bg-neutral-800 dark:ring-neutral-700'></div>

                      <div className='flex items-center gap-2 text-sm'>
                        <Icon
                          icon='ph:clock'
                          className='size-4 text-blue-600 dark:text-blue-400'
                        />
                        <span className='text-neutral-700 dark:text-neutral-300'>
                          Short on time?
                        </span>
                        <button
                          onClick={dismissHint}
                          className='ml-1 text-neutral-400 hover:text-neutral-600 dark:text-neutral-500 dark:hover:text-neutral-300'
                        >
                          <Icon icon='ph:x' className='size-3' />
                        </button>
                      </div>

                      <p className='mt-1 text-xs text-neutral-600 dark:text-neutral-400'>
                        Try TLDR mode for quick highlights!
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className='rounded-lg p-2 text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-white'
                title={
                  theme === 'dark'
                    ? 'Switch to light mode'
                    : 'Switch to dark mode'
                }
              >
                <Icon
                  icon={theme === 'dark' ? 'ph:sun' : 'ph:moon'}
                  className='size-5'
                />
              </button>
            </div>

            {/* CTA Button */}
            <div className='hidden md:block'>
              <ScrollLink
                to='contact'
                smooth={true}
                duration={500}
                className='cursor-pointer rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700'
              >
                Let's Talk
              </ScrollLink>
            </div>

            {/* Mobile menu button */}
            <div className='md:hidden'>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className='inline-flex items-center justify-center rounded-md p-2 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white'
              >
                <Icon
                  icon={isMobileMenuOpen ? 'ph:x' : 'ph:list'}
                  className='size-6'
                />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className='md:hidden'>
            <div className='space-y-1 bg-white px-2 pb-3 pt-2 shadow-lg dark:bg-neutral-900'>
              {navItems.map((item) => {
                if (isHomePage) {
                  // On home page, use scroll links
                  return (
                    <ScrollLink
                      key={item.name}
                      to={item.to}
                      smooth={true}
                      duration={500}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className='flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-base font-medium text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white'
                    >
                      <Icon icon={item.icon} className='size-5' />
                      {item.name}
                    </ScrollLink>
                  );
                } else {
                  // On other pages, route to home with section hash
                  return (
                    <RouterLink
                      key={item.name}
                      to={`/#${item.to}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className='flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-base font-medium text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white'
                    >
                      <Icon icon={item.icon} className='size-5' />
                      {item.name}
                    </RouterLink>
                  );
                }
              })}

              {/* Divider */}
              <div className='my-2 h-px bg-neutral-200 dark:bg-neutral-700'></div>

              {/* Mobile Toggle Controls */}
              <div className='flex items-center justify-between px-3 py-2'>
                {/* TLDR Toggle */}
                <button
                  onClick={handleTLDRClick}
                  className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-all ${
                    isTLDRMode
                      ? 'bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100'
                      : 'text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800'
                  }`}
                >
                  <Icon icon='ph:lightning' className='size-4' />
                  <span>TLDR Mode</span>
                </button>

                {/* Theme Toggle */}
                <button
                  onClick={toggleTheme}
                  className='rounded-lg p-2 text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white'
                >
                  <Icon
                    icon={theme === 'dark' ? 'ph:sun' : 'ph:moon'}
                    className='size-5'
                  />
                </button>
              </div>

              {/* Divider */}
              <div className='my-2 h-px bg-neutral-200 dark:bg-neutral-700'></div>

              {/* Route Links */}
              {routeItems.map((item) => (
                <RouterLink
                  key={item.name}
                  to={item.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className='flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-base font-medium text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-white'
                >
                  <Icon icon={item.icon} className='size-5' />
                  {item.name}
                </RouterLink>
              ))}

              {isHomePage ? (
                <ScrollLink
                  to='contact'
                  smooth={true}
                  duration={500}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className='mt-4 block cursor-pointer rounded-lg bg-blue-600 px-3 py-2 text-center text-base font-medium text-white hover:bg-blue-700'
                >
                  Let's Talk
                </ScrollLink>
              ) : (
                <RouterLink
                  to='/#contact'
                  onClick={() => setIsMobileMenuOpen(false)}
                  className='mt-4 block cursor-pointer rounded-lg bg-blue-600 px-3 py-2 text-center text-base font-medium text-white hover:bg-blue-700'
                >
                  Let's Talk
                </RouterLink>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Quick Contact Floating Button */}
      <div className='fixed bottom-8 right-8 z-30'>
        {isHomePage ? (
          <ScrollLink
            to='contact'
            smooth={true}
            duration={500}
            className='group flex size-14 cursor-pointer items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-all hover:scale-110 hover:bg-blue-700 hover:shadow-xl'
          >
            <Icon icon='ph:chat-circle' className='size-6' />
          </ScrollLink>
        ) : (
          <RouterLink
            to='/#contact'
            className='group flex size-14 cursor-pointer items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-all hover:scale-110 hover:bg-blue-700 hover:shadow-xl'
          >
            <Icon icon='ph:chat-circle' className='size-6' />
          </RouterLink>
        )}
      </div>
    </>
  );
};
