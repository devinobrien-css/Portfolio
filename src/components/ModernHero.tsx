import { Icon } from '@iconify/react';
import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ContactForm } from './forms/ContactForm';
import { useTLDR } from '../util/context/TLDRContext';
import { useTheme } from '../util/context/ThemeContext';

export const ModernHero = () => {
  const { isTLDRMode, toggleTLDR } = useTLDR();
  const { theme, toggleTheme } = useTheme();
  const [showContactForm, setShowContactForm] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentTime, setCurrentTime] = useState(new Date());
  const [typedText, setTypedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [particlePositions, setParticlePositions] = useState<
    Array<{ x: number; y: number; delay: number }>
  >([]);
  const [rocketLaunched, setRocketLaunched] = useState(false);

  const words = useMemo(
    () => ['innovative', 'scalable', 'performant', 'beautiful', 'secure'],
    [],
  );

  const achievements = [
    {
      number: '50+',
      label: 'Projects Delivered',
      icon: 'ph:rocket-launch',
      description: 'Successful launches',
      trend: '+12% this month',
    },
    {
      number: '5+',
      label: 'Years Building',
      icon: 'ph:code',
      description: 'Professional experience',
      trend: 'Since 2019',
    },
    {
      number: '98%',
      label: 'Client Success',
      icon: 'ph:heart-fill',
      description: 'Satisfaction rate',
      trend: '+2% vs last year',
    },
    {
      number: '24/7',
      label: 'Support Ready',
      icon: 'ph:shield-check',
      description: 'Always available',
      trend: 'Instant response',
    },
  ];

  // Typewriter effect
  useEffect(() => {
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseTime = 2000;

    const currentWord = words[currentWordIndex];

    const timer = setTimeout(
      () => {
        if (!isDeleting && typedText !== currentWord) {
          setTypedText(currentWord.substring(0, typedText.length + 1));
        } else if (isDeleting && typedText !== '') {
          setTypedText(currentWord.substring(0, typedText.length - 1));
        } else if (!isDeleting && typedText === currentWord) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        } else if (isDeleting && typedText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      },
      isDeleting ? deleteSpeed : typeSpeed,
    );

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentWordIndex, words]);

  // Initialize floating particles
  useEffect(() => {
    const particles = Array.from({ length: 20 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
    }));
    setParticlePositions(particles);
  }, []);

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Entrance animation
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Mouse tracking for interactive elements with throttling
  useEffect(() => {
    let rafId: number;
    const handleMouseMove = (e: MouseEvent) => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setMousePosition({
          x: (e.clientX / window.innerWidth) * 2 - 1,
          y: (e.clientY / window.innerHeight) * 2 - 1,
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section className='via-blue-150 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-blue-950  dark:to-slate-900'>
      {/* Animated Background */}
      <div className='absolute inset-0'>
        <div className='bg-grid-pattern absolute inset-0 opacity-10'></div>
        <div
          className='absolute inset-0 opacity-20'
          style={{
            background: `radial-gradient(circle at ${50 + mousePosition.x * 10}% ${50 + mousePosition.y * 10}%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)`,
          }}
        ></div>

        {/* Floating Particles */}
        {particlePositions.map((particle, index) => (
          <div
            key={index}
            className='absolute size-1 animate-float rounded-full bg-blue-400/30'
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: '6s',
            }}
          />
        ))}
      </div>

      {/* Floating Orbs */}
      <div className='absolute left-10 top-20 size-32 animate-float rounded-full bg-gradient-to-br from-blue-400/20 to-indigo-600/20 blur-xl dark:from-blue-400/20 dark:to-purple-600/20'></div>
      <div className='absolute right-10 top-40 size-24 animate-float-delayed rounded-full bg-gradient-to-br from-purple-400/20 to-pink-600/20 blur-xl'></div>
      <div className='absolute bottom-20 left-1/3 size-20 animate-float-slow rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-600/20 blur-xl'></div>

      {/* Interactive Spotlight Effect */}
      <div
        className='pointer-events-none absolute inset-0 opacity-30 transition-all duration-500'
        style={{
          background: `radial-gradient(600px at ${mousePosition.x * 50 + 50}% ${mousePosition.y * 50 + 50}%, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      ></div>

      {/* Hero Section - Intro */}
      <div className='relative mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 lg:px-8'>
        <div className='text-center'>
          {/* Status Badge */}
          <div
            className={`mb-8 inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 backdrop-blur-sm transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
          >
            <div className='mr-2 size-2 animate-pulse rounded-full bg-emerald-400'></div>
            <span className='text-sm font-medium text-emerald-300'>
              Available for new projects
            </span>
          </div>

          {/* Main Heading */}
          <div
            className={`mb-16 space-y-8 transition-all delay-200 duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
          >
            <h1 className='text-5xl font-bold leading-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl xl:text-8xl'>
              Building
              <span className='block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent'>
                <span>{typedText}</span>
                <span className='animate-pulse text-blue-400'>|</span>
              </span>
              <span className='block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl'>
                applications
              </span>
            </h1>

            <p className='mx-auto max-w-3xl text-xl text-gray-700 dark:text-slate-300 sm:text-2xl lg:text-3xl'>
              {isTLDRMode ? (
                <>
                  <span className='font-semibold text-gray-900 dark:text-white'>
                    Devin O'Brien
                  </span>{' '}
                  • Full-Stack Engineer •
                  <span className='text-green-400'>Available for hire</span>
                </>
              ) : (
                <>
                  I'm{' '}
                  <span className='font-semibold text-gray-900 dark:text-white'>
                    Devin O'Brien
                  </span>
                  , a full-stack engineer who transforms complex ideas into
                  scalable, high-performance solutions.
                </>
              )}
            </p>

            {/* Live Status Dashboard */}
            {!isTLDRMode && (
              <div className='mx-auto max-w-2xl rounded-2xl border border-gray-200 bg-white/80 p-6 backdrop-blur-sm dark:border-slate-700/50 dark:bg-slate-800/30'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-2'>
                    <div className='size-3 animate-pulse rounded-full bg-green-400'></div>
                    <span className='text-sm text-gray-700 dark:text-slate-300'>
                      Currently Available
                    </span>
                  </div>
                  <div className='text-sm text-slate-400'>
                    {currentTime.toLocaleTimeString('en-US', {
                      hour: '2-digit',
                      minute: '2-digit',
                      timeZone: 'America/New_York',
                    })}{' '}
                    EST
                  </div>
                </div>
              </div>
            )}

            {/* TLDR Quick Stats */}
            {isTLDRMode && (
              <div className='mx-auto max-w-lg'>
                <div className='grid grid-cols-2 gap-4 text-center'>
                  <div className='rounded-lg border border-green-500/30 bg-green-500/10 p-4'>
                    <div className='text-2xl font-bold text-green-400'>
                      Available
                    </div>
                    <div className='text-sm text-slate-400'>Ready to start</div>
                  </div>
                  <div className='rounded-lg border border-blue-500/30 bg-blue-500/10 p-4'>
                    <div className='text-2xl font-bold text-blue-400'>
                      5+ Years
                    </div>
                    <div className='text-sm text-slate-400'>Experience</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Feature Promotion Cards */}
          <div
            className={`mb-16 transition-all delay-300 duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
          >
            <div className='mx-auto grid max-w-4xl gap-4 md:grid-cols-2'>
              {/* TLDR Mode Promotion */}
              <button
                onClick={toggleTLDR}
                className='group relative overflow-hidden rounded-xl border border-yellow-500/30 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 p-6 backdrop-blur-sm transition-all hover:scale-105 hover:border-yellow-400/50 focus:outline-none focus:ring-2 focus:ring-yellow-400/50'
              >
                <div className='absolute right-2 top-2'>
                  <Icon
                    icon={isTLDRMode ? 'ph:lightning-fill' : 'ph:lightning'}
                    className='size-6 text-yellow-500 dark:text-yellow-400'
                  />
                </div>
                <div className='mb-3 text-left'>
                  <h3 className='text-lg font-semibold text-yellow-600 dark:text-yellow-300'>
                    ⚡ TLDR Mode {isTLDRMode ? '(Active)' : ''}
                  </h3>
                  <p className='text-sm text-gray-700 dark:text-slate-300'>
                    {isTLDRMode
                      ? 'Click to view full content with detailed information.'
                      : 'Short on time? Click here for a quick read!'}
                  </p>
                </div>
                <div className='flex items-center gap-2 text-xs text-yellow-600 dark:text-yellow-400'>
                  <span>•</span>
                  <span>
                    {isTLDRMode ? 'Currently active' : 'Perfect for recruiters'}
                  </span>
                  <span>•</span>
                  <span>
                    {isTLDRMode ? 'Click to disable' : 'Key metrics only'}
                  </span>
                </div>
                <div className='absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 opacity-0 transition-opacity group-hover:opacity-100'></div>
              </button>

              {/* Dark Mode Promotion */}
              <button
                onClick={toggleTheme}
                className='group relative overflow-hidden rounded-xl border border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-blue-500/10 p-6 backdrop-blur-sm transition-all hover:scale-105 hover:border-purple-400/50 focus:outline-none focus:ring-2 focus:ring-purple-400/50'
              >
                <div className='absolute right-2 top-2'>
                  <Icon
                    icon={
                      theme === 'dark' ? 'ph:moon-stars-fill' : 'ph:sun-fill'
                    }
                    className='size-6 text-purple-600 dark:text-purple-400'
                  />
                </div>
                <div className='mb-3 text-left'>
                  <h3 className='text-lg font-semibold text-purple-600 dark:text-purple-300'>
                    {theme === 'dark' ? '🌙 Dark Mode' : '☀️ Light Mode'}{' '}
                    (Active)
                  </h3>
                  <p className='text-sm text-gray-700 dark:text-slate-300'>
                    {theme === 'dark'
                      ? 'Switch to light mode for bright, high-contrast viewing.'
                      : 'Switch to dark mode for comfortable, low-light viewing.'}
                  </p>
                </div>
                <div className='flex items-center gap-2 text-xs text-purple-600 dark:text-purple-400'>
                  <span>•</span>
                  <span>
                    {theme === 'dark'
                      ? 'Dark theme active'
                      : 'Light theme active'}
                  </span>
                  <span>•</span>
                  <span>Click to toggle</span>
                </div>
                <div className='absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20 opacity-0 transition-opacity group-hover:opacity-100'></div>
              </button>
            </div>
          </div>

          {/* Call to Actions */}
          <div
            className={`delay-400 mb-20 flex flex-col items-center gap-6 transition-all duration-1000 sm:flex-row sm:justify-center ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
          >
            <button
              onClick={() => {
                setRocketLaunched(true);
                setTimeout(() => {
                  setShowContactForm(true);
                  setRocketLaunched(false);
                }, 800);
              }}
              className={`group relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-10 py-5 text-xl font-semibold text-white shadow-2xl transition-all hover:scale-105 hover:shadow-blue-500/25 active:scale-95 dark:from-blue-600 dark:to-purple-600 ${
                rocketLaunched ? 'animate-pulse' : ''
              }`}
            >
              <div className='absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 transition-opacity group-hover:opacity-100 dark:from-blue-700 dark:to-purple-700'></div>

              {/* Rocket Trail Effect */}
              {rocketLaunched && (
                <div className='absolute inset-0 -z-10'>
                  <div className='absolute -right-2 top-1/2 size-4 -translate-y-1/2 animate-ping rounded-full bg-blue-400'></div>
                  <div
                    className='absolute -right-4 top-1/2 size-2 -translate-y-1/2 animate-ping rounded-full bg-purple-400'
                    style={{ animationDelay: '0.1s' }}
                  ></div>
                  <div
                    className='absolute -right-6 top-1/2 size-1 -translate-y-1/2 animate-ping rounded-full bg-cyan-400'
                    style={{ animationDelay: '0.2s' }}
                  ></div>
                </div>
              )}

              <span className='relative flex items-center justify-center gap-3'>
                <Icon
                  icon='ph:rocket-launch'
                  className={`size-6 transition-transform ${rocketLaunched ? 'animate-bounce' : 'group-hover:rotate-12'}`}
                />
                Let's Build Something Amazing
              </span>
            </button>

            <Link
              to='/projects'
              className='group flex items-center justify-center gap-3 rounded-xl border-2 border-gray-300 bg-white/80 px-8 py-4 text-lg font-semibold text-gray-700 backdrop-blur-sm transition-all hover:border-gray-400 hover:bg-gray-100 dark:border-slate-600 dark:bg-slate-800/50 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:bg-slate-700/50'
            >
              <Icon
                icon='ph:play-circle'
                className='size-5 transition-transform group-hover:scale-110'
              />
              View My Work
            </Link>
          </div>
        </div>
      </div>

      {/* Achievement Stats Section */}
      {!isTLDRMode && (
        <div className='relative mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8'>
          <div
            className={`delay-600 grid gap-6 transition-all duration-1000 sm:grid-cols-2 lg:grid-cols-4 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
          >
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className='group relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-white/80 to-gray-50/80 p-6 text-center backdrop-blur-sm transition-all hover:scale-105 hover:border-gray-300 dark:border-slate-700/50 dark:bg-gradient-to-br dark:from-slate-800/50 dark:to-slate-900/50 dark:hover:border-slate-600/50'
                style={{ animationDelay: `${index * 200 + 800}ms` }}
              >
                {/* Animated background on hover */}
                <div className='absolute inset-0 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 opacity-0 transition-opacity group-hover:opacity-100 dark:from-blue-600/10 dark:to-purple-600/10'></div>

                <div className='relative z-10'>
                  <div className='mb-4 flex justify-center'>
                    <div className='rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 p-3 transition-transform group-hover:rotate-12 dark:from-blue-500 dark:to-purple-600'>
                      <Icon
                        icon={achievement.icon}
                        className='size-6 text-gray-700 dark:text-white'
                      />
                    </div>
                  </div>
                  <div className='text-3xl font-bold text-gray-900 transition-all group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-300'>
                    {achievement.number}
                  </div>
                  <div className='mb-2 text-sm text-slate-400'>
                    {achievement.label}
                  </div>
                  <div className='text-xs text-slate-500 opacity-0 transition-opacity group-hover:opacity-100'>
                    {achievement.description}
                  </div>
                  <div className='mt-2 text-xs font-medium text-green-400 opacity-0 transition-opacity group-hover:opacity-100'>
                    {achievement.trend}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Performance Dashboard Section */}
      {/* <div className='relative mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8'>
        <div
          className={`mb-12 text-center transition-all delay-1000 duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
        >
          <h2 className='mb-4 text-3xl font-bold text-gray-900 dark:text-white'>
            Performance Metrics
          </h2>
          <p className='text-slate-400'>
            Real-time insights into development efficiency
          </p>
        </div>

        <div
          className={`delay-1100 grid gap-6 transition-all duration-1000 lg:grid-cols-3 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
        >
          <div className='rounded-2xl border border-gray-200 bg-white/80 p-6 backdrop-blur-sm dark:border-slate-700/50 dark:bg-slate-800/30 lg:col-span-2'>
            <div className='mb-6 flex items-center justify-between'>
              <h3 className='text-lg font-semibold text-slate-200'>
                Development Activity
              </h3>
              <div className='flex items-center gap-2 text-sm text-slate-400'>
                <div className='size-2 animate-pulse rounded-full bg-green-500'></div>
                <span>Active</span>
              </div>
            </div>

            <div className='relative h-32 overflow-hidden rounded-lg bg-gray-100 dark:bg-slate-900/50'>
              <div className='absolute inset-0 flex items-end justify-around gap-1 p-4'>
                {Array.from({ length: 24 }, (_, i) => {
                  const height = Math.sin(i * 0.5) * 40 + 50;
                  const isActive = i >= 18; // Show recent activity
                  return (
                    <div
                      key={i}
                      className={`flex-1 rounded-t-sm transition-all duration-1000 ${
                        isActive ? 'bg-blue-500' : 'bg-slate-600'
                      }`}
                      style={{
                        height: `${height}%`,
                        animationDelay: `${i * 50}ms`,
                      }}
                    />
                  );
                })}
              </div>

              <div className='absolute bottom-0 left-0 right-0 flex justify-between px-4 py-1 text-xs text-slate-500'>
                <span>00:00</span>
                <span>12:00</span>
                <span>Now</span>
              </div>
            </div>

            <div className='mt-4 grid grid-cols-3 gap-4 text-center'>
              <div className='rounded-lg border border-gray-200 bg-white/80 p-3 dark:border-slate-700/30 dark:bg-slate-900/30'>
                <div className='text-lg font-semibold text-blue-400'>127</div>
                <div className='text-xs text-gray-600 dark:text-slate-500'>
                  Commits This Week
                </div>
              </div>
              <div className='rounded-lg border border-gray-200 bg-white/80 p-3 dark:border-slate-700/30 dark:bg-slate-900/30'>
                <div className='text-lg font-semibold text-green-400'>
                  98.5%
                </div>
                <div className='text-xs text-gray-600 dark:text-slate-500'>
                  Uptime
                </div>
              </div>
              <div className='rounded-lg border border-gray-200 bg-white/80 p-3 dark:border-slate-700/30 dark:bg-slate-900/30'>
                <div className='text-lg font-semibold text-purple-400'>4.9</div>
                <div className='text-xs text-gray-600 dark:text-slate-500'>
                  Performance Score
                </div>
              </div>
            </div>
          </div>


          <div className='space-y-4'>
            <div className='rounded-2xl border border-gray-200 bg-white/80 p-6 backdrop-blur-sm dark:border-slate-700/50 dark:bg-slate-800/30'>
              <div className='mb-4 flex items-center gap-3'>
                <div className='rounded-lg bg-blue-500 p-2'>
                  <Icon
                    icon='ph:lightning-fill'
                    className='size-4 text-white'
                  />
                </div>
                <div>
                  <div className='text-sm font-medium text-gray-700 dark:text-slate-200'>
                    Response Time
                  </div>
                  <div className='text-xs text-gray-500 dark:text-slate-500'>
                    Average API latency
                  </div>
                </div>
              </div>
              <div className='text-2xl font-bold text-blue-400'>23ms</div>
              <div className='mt-2 text-xs text-green-400'>
                ↗ 15% improvement
              </div>
            </div>

            <div className='rounded-2xl border border-gray-200 bg-white/80 p-6 backdrop-blur-sm dark:border-slate-700/50 dark:bg-slate-800/30'>
              <div className='mb-4 flex items-center gap-3'>
                <div className='rounded-lg bg-green-500 p-2'>
                  <Icon
                    icon='ph:shield-check-fill'
                    className='size-4 text-white'
                  />
                </div>
                <div>
                  <div className='text-sm font-medium text-gray-700 dark:text-slate-200'>
                    Security Score
                  </div>
                  <div className='text-xs text-gray-500 dark:text-slate-500'>
                    Vulnerability assessment
                  </div>
                </div>
              </div>
              <div className='text-2xl font-bold text-green-400'>A+</div>
              <div className='mt-2 text-xs text-gray-500 dark:text-slate-400'>
                No critical issues
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Live Terminal Code Preview */}
      {!isTLDRMode && (
        <div className='relative mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8'>
          <div
            className={`delay-800 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
          >
            {/* Live Terminal Code Preview */}
            <div className='rounded-2xl border border-gray-200 bg-white/90 p-6 backdrop-blur-sm dark:border-slate-700/50 dark:bg-slate-900/80'>
              <div className='mb-4 flex items-center gap-2'>
                <div className='flex gap-1'>
                  <div className='size-3 rounded-full bg-red-500'></div>
                  <div className='size-3 rounded-full bg-yellow-500'></div>
                  <div className='size-3 rounded-full bg-green-500'></div>
                </div>
                <span className='ml-2 text-sm text-slate-400'>
                  ~/portfolio/src/hero.tsx
                </span>
                <div className='ml-auto flex items-center gap-2 text-xs text-slate-500'>
                  <div className='size-2 animate-pulse rounded-full bg-green-500'></div>
                  <span>Live coding...</span>
                </div>
              </div>
              <div className='font-mono text-sm'>
                <div className='text-slate-500'>
                  // Building the future, one line at a time
                </div>
                <div className='mt-3 space-y-1'>
                  <div>
                    <span className='text-purple-400'>const</span>{' '}
                    <span className='text-blue-400'>developer</span>{' '}
                    <span className='text-slate-300'>=</span>{' '}
                    <span className='text-slate-300'>{'{'}</span>
                  </div>
                  <div className='ml-4 space-y-1'>
                    <div>
                      <span className='text-green-400'>name</span>
                      <span className='text-slate-300'>: </span>
                      <span className='text-yellow-300'>'Devin O'Brien'</span>
                      <span className='text-slate-300'>,</span>
                    </div>
                    <div>
                      <span className='text-green-400'>role</span>
                      <span className='text-slate-300'>: </span>
                      <span className='text-yellow-300'>
                        'Full Stack Engineer'
                      </span>
                      <span className='text-slate-300'>,</span>
                    </div>
                    <div>
                      <span className='text-green-400'>experience</span>
                      <span className='text-slate-300'>: </span>
                      <span className='text-blue-300'>5+</span>
                      <span className='text-slate-300'>,</span>
                    </div>
                    <div>
                      <span className='text-green-400'>passion</span>
                      <span className='text-slate-300'>: </span>
                      <span className='text-yellow-300'>'Creating Impact'</span>
                    </div>
                  </div>
                  <div className='text-slate-300'>{'}'}</div>
                </div>

                {/* Animated Terminal Cursor */}
                <div className='mt-2 flex items-center'>
                  <span className='text-green-400'>$ </span>
                  <span className='text-slate-300'>
                    npm run build-amazing-products
                  </span>
                  <span className='ml-1 animate-pulse text-slate-400'>|</span>
                </div>
              </div>{' '}
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA & Contact */}
      {!isTLDRMode && (
        <div className='relative mx-auto max-w-4xl px-4 pb-20 text-center sm:px-6 lg:px-8'>
          <div
            className={`delay-1200 space-y-6 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
          >
            <h2 className='text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl'>
              Ready to bring your ideas to life?
            </h2>
            <p className='text-xl text-gray-700 dark:text-slate-300'>
              Let's discuss your project and create something extraordinary
              together.
            </p>
            <div className='flex flex-col items-center gap-4 sm:flex-row sm:justify-center'>
              <a
                href="mailto:devinobrien@icloud.com?subject=Project%20Inquiry&body=Hi%20Devin,%0D%0A%0D%0AI'm%20interested%20in%20discussing%20a%20project%20with%20you."
                className='group flex items-center gap-3 rounded-xl border border-slate-600/50 bg-slate-800/30 px-6 py-3 font-medium text-slate-300 backdrop-blur-sm transition-all hover:bg-slate-700/50'
              >
                <Icon icon='ph:envelope' className='size-5' />
                devinobrien@icloud.com
              </a>
              <a
                href="https://access-portfolio-images.s3.amazonaws.com/Devin+P+O'Brien.pdf"
                target='_blank'
                rel='noopener noreferrer'
                download="Devin P. O'Brien Resume"
                className='group flex items-center gap-3 rounded-xl border border-slate-600/50 bg-slate-800/30 px-6 py-3 font-medium text-slate-300 backdrop-blur-sm transition-all hover:bg-slate-700/50'
              >
                <Icon icon='ph:download' className='size-5' />
                Download Resume
              </a>{' '}
            </div>
          </div>
        </div>
      )}

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm'>
          <div className='max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-slate-700/50 bg-slate-900/95 p-8 shadow-2xl backdrop-blur-sm'>
            <div className='mb-6 flex items-center justify-between'>
              <div>
                <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>
                  Let's Build Something Amazing
                </h2>
                <p className='text-slate-400'>
                  Tell me about your project and let's get started
                </p>
              </div>
              <button
                onClick={() => setShowContactForm(false)}
                className='rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white'
              >
                <Icon icon='ph:x' className='size-6' />
              </button>
            </div>
            <ContactForm onSubmit={() => setShowContactForm(false)} />
          </div>
        </div>
      )}
    </section>
  );
};
