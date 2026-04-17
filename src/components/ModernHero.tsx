import { Icon } from '@iconify/react';
import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ContactForm } from './forms/ContactForm';
import { useTLDR } from '../util/context/TLDRContext';

export const ModernHero = () => {
  const { isTLDRMode } = useTLDR();
  const [showContactForm, setShowContactForm] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = useMemo(
    () => ['scalable', 'performant', 'production-grade', 'secure'],
    [],
  );

  const achievements = [
    {
      number: '6+',
      label: 'Companies Served',
      icon: 'ph:buildings',
    },
    {
      number: '7+',
      label: 'Years Building',
      icon: 'ph:code',
    },
    {
      number: '400K+',
      label: 'Users Supported',
      icon: 'ph:users-three',
    },
    {
      number: '70%',
      label: 'Cost Reduction',
      icon: 'ph:arrow-down',
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

  // Entrance animation
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className='relative overflow-hidden bg-neutral-50 dark:bg-neutral-950'>
      {/* Subtle Background */}
      <div className='absolute inset-0'>
        <div className='bg-grid-pattern absolute inset-0 opacity-[0.03]'></div>
      </div>

      <div className='relative mx-auto max-w-5xl px-4 pb-24 pt-28 sm:px-6 lg:px-8 lg:pt-36'>
        <div className='text-center'>
          {/* Status Badge */}
          <div
            className={`mb-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
          >
            <span className='inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-700 dark:text-emerald-300'>
              <span className='size-2 animate-pulse rounded-full bg-emerald-500'></span>
              Available for new projects
            </span>
          </div>

          {/* Main Heading */}
          <div
            className={`transition-all delay-200 duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
          >
            <h1 className='text-5xl font-bold leading-[1.1] tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-6xl lg:text-7xl'>
              Building
              <br />
              <span className='text-blue-600 dark:text-blue-500'>
                {typedText}
                <span className='animate-pulse'>|</span>
              </span>
              <br />
              applications.
            </h1>

            <p className='mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-xl'>
              {isTLDRMode ? (
                <>
                  <span className='font-semibold text-neutral-900 dark:text-white'>
                    Devin O&apos;Brien
                  </span>{' '}
                  &middot; Full-Stack Engineer &middot; 7+ Years &middot;{' '}
                  <span className='text-emerald-600 dark:text-emerald-400'>
                    Available for hire
                  </span>
                </>
              ) : (
                <>
                  I&apos;m{' '}
                  <span className='font-semibold text-neutral-900 dark:text-white'>
                    Devin O&apos;Brien
                  </span>
                  , a full-stack engineer who builds production systems serving
                  hundreds of thousands of users — from healthcare platforms to
                  streaming infrastructure.
                </>
              )}
            </p>
          </div>

          {/* Call to Actions */}
          <div
            className={`mt-12 flex flex-col items-center gap-4 transition-all delay-400 duration-1000 sm:flex-row sm:justify-center ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
          >
            <button
              onClick={() => setShowContactForm(true)}
              className='group flex items-center gap-3 rounded-xl bg-neutral-900 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-neutral-800 active:scale-[0.98] dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100'
            >
              Let&apos;s Build Something
              <Icon
                icon='ph:arrow-right'
                className='size-5 transition-transform group-hover:translate-x-1'
              />
            </button>

            <Link
              to='/projects'
              className='group flex items-center gap-3 rounded-xl border border-neutral-300 px-8 py-4 text-lg font-semibold text-neutral-700 transition-all hover:border-neutral-400 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-neutral-600 dark:hover:bg-neutral-800'
            >
              <Icon icon='ph:play-circle' className='size-5' />
              View My Work
            </Link>
          </div>

          {/* Achievement Stats */}
          <div
            className={`mt-20 transition-all delay-600 duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
          >
            <div className='grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-200 dark:border-neutral-800 dark:bg-neutral-800 lg:grid-cols-4'>
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className='bg-white px-6 py-8 text-center dark:bg-neutral-900'
                >
                  <Icon
                    icon={achievement.icon}
                    className='mx-auto mb-3 size-5 text-neutral-400'
                  />
                  <div className='text-2xl font-bold text-neutral-900 dark:text-white sm:text-3xl'>
                    {achievement.number}
                  </div>
                  <div className='mt-1 text-sm text-neutral-500'>
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          {!isTLDRMode && (
            <div
              className={`mt-12 flex flex-wrap items-center justify-center gap-4 transition-all delay-800 duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            >
              <a
                href='mailto:devinobrien@icloud.com'
                className='flex items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-neutral-900 dark:hover:text-white'
              >
                <Icon icon='ph:envelope' className='size-4' />
                devinobrien@icloud.com
              </a>
              <span className='text-neutral-300 dark:text-neutral-700'>|</span>
              <a
                href="https://access-portfolio-images.s3.amazonaws.com/Devin+P+O'Brien.pdf"
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-neutral-900 dark:hover:text-white'
              >
                <Icon icon='ph:download' className='size-4' />
                Resume
              </a>
              <span className='text-neutral-300 dark:text-neutral-700'>|</span>
              <a
                href='https://www.linkedin.com/in/obrien-devin/'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-neutral-900 dark:hover:text-white'
              >
                <Icon icon='ph:linkedin-logo' className='size-4' />
                LinkedIn
              </a>
              <span className='text-neutral-300 dark:text-neutral-700'>|</span>
              <a
                href='https://github.com/devinobrien-css'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-neutral-900 dark:hover:text-white'
              >
                <Icon icon='ph:github-logo' className='size-4' />
                GitHub
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm'>
          <div className='max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-neutral-900'>
            <div className='mb-6 flex items-center justify-between'>
              <div>
                <h2 className='text-2xl font-bold text-neutral-900 dark:text-white'>
                  Let&apos;s Build Something
                </h2>
                <p className='text-neutral-500'>
                  Tell me about your project and let&apos;s get started
                </p>
              </div>
              <button
                onClick={() => setShowContactForm(false)}
                className='rounded-full p-2 text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white'
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
