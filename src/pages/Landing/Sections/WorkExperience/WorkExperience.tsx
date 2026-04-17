import { useState, useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';
import { employers } from '../../../../data/employers';
import { WorkCard } from './WorkCard';
import { useTLDR } from '../../../../util/context/TLDRContext';

export const WorkExperience = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { isTLDRMode } = useTLDR();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className='relative overflow-hidden bg-white py-24 dark:bg-neutral-950'
    >
      {/* Background Elements */}
      <div className='absolute inset-0'>
        <div className='bg-grid-pattern absolute inset-0 opacity-5'></div>
        <div className='absolute left-1/4 top-20 size-32 animate-float rounded-full bg-neutral-200/30 blur-2xl dark:bg-neutral-800/30'></div>
        <div className='absolute bottom-20 right-1/4 size-24 animate-float-delayed rounded-full bg-neutral-200/30 blur-2xl dark:bg-neutral-800/30'></div>
      </div>

      <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div
          className={`mb-16 text-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
        >
          <div className='mb-4 inline-flex items-center rounded-full border border-neutral-300 bg-neutral-100 px-4 py-2 dark:border-neutral-700 dark:bg-neutral-800'>
            <Icon
              icon='ph:briefcase'
              className='mr-2 size-5 text-neutral-700 dark:text-neutral-300'
            />
            <span className='text-sm font-medium text-neutral-700 dark:text-neutral-300'>
              Professional Journey
            </span>
          </div>

          <h2 className='mb-6 text-4xl font-bold text-neutral-900 dark:text-white sm:text-5xl lg:text-6xl'>
            Where I've{' '}
            <span className='text-blue-600 dark:text-blue-500'>
              Made an Impact
            </span>
          </h2>

          <p className='mx-auto max-w-3xl text-xl text-neutral-600 dark:text-neutral-400'>
            {isTLDRMode
              ? '7+ years at top companies • Code Founder • Full-Stack expertise'
              : 'A journey through innovative companies and transformative projects that shaped my expertise'}
          </p>
        </div>

        {/* Timeline */}
        <div className='relative mx-auto max-w-4xl'>
          {/* TLDR Quick Summary with Timeline */}
          {isTLDRMode && (
            <div className='mb-12'>
              {/* Stats Cards */}
              <div className='mb-8 grid gap-6 md:grid-cols-3'>
                <div className='rounded-xl border border-neutral-200 bg-neutral-50 p-6 text-center dark:border-neutral-700 dark:bg-neutral-800'>
                  <div className='text-2xl font-bold text-blue-600 dark:text-blue-500'>
                    Current
                  </div>
                  <div className='text-sm text-neutral-600 dark:text-neutral-400'>
                    Code Founder at Maro for Schools
                  </div>
                  <div className='text-xs text-neutral-500 dark:text-neutral-500'>
                    Remote • 2024-Present
                  </div>
                </div>
                <div className='rounded-xl border border-neutral-200 bg-neutral-50 p-6 text-center dark:border-neutral-700 dark:bg-neutral-800'>
                  <div className='text-2xl font-bold text-blue-600 dark:text-blue-500'>
                    7+
                  </div>
                  <div className='text-sm text-neutral-600 dark:text-neutral-400'>
                    Years Experience
                  </div>
                  <div className='text-xs text-neutral-500 dark:text-neutral-500'>
                    Full-Stack Development
                  </div>
                </div>
                <div className='rounded-xl border border-neutral-200 bg-neutral-50 p-6 text-center dark:border-neutral-700 dark:bg-neutral-800'>
                  <div className='text-2xl font-bold text-blue-600 dark:text-blue-500'>
                    50+
                  </div>
                  <div className='text-sm text-neutral-600 dark:text-neutral-400'>
                    Projects Delivered
                  </div>
                  <div className='text-xs text-neutral-500 dark:text-neutral-500'>
                    React • Node.js • AWS
                  </div>
                </div>
              </div>

              {/* Compact Timeline */}
              <div className='relative rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-800'>
                {/* Timeline Container */}
                <div className='relative'>
                  {/* Timeline Line */}
                  <div className='absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-neutral-300 via-neutral-400 to-neutral-300 dark:from-neutral-600 dark:via-neutral-500 dark:to-neutral-600'></div>

                  {/* Timeline Items - Generated from employers data */}
                  <div className='space-y-3'>
                    {employers.map((employer, index) => (
                      <div
                        key={employer.name}
                        className='relative flex items-center'
                      >
                        <div className='z-10 flex size-8 items-center justify-center rounded-full border-2 border-neutral-400 bg-white dark:bg-neutral-900'>
                          <div
                            className={`size-3 rounded-full ${index === 0 ? 'bg-blue-500' : 'bg-neutral-500'}`}
                          ></div>
                        </div>
                        <div className='ml-4 flex-1'>
                          <div className='flex items-center justify-between'>
                            <div>
                              <div
                                className={`font-semibold ${index === 0 ? 'text-blue-600 dark:text-blue-400' : 'text-neutral-700 dark:text-neutral-300'}`}
                              >
                                {employer.title}
                              </div>
                              <div className='text-sm text-neutral-500 dark:text-neutral-400'>
                                {employer.shortName || employer.name}
                              </div>
                            </div>
                            <div className='text-xs text-neutral-500 dark:text-neutral-400'>
                              {employer.timeline}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Timeline Line */}
          {!isTLDRMode && (
            <div className='absolute inset-y-0 left-8 hidden w-0.5 bg-neutral-300 opacity-30 dark:bg-neutral-600 md:block'></div>
          )}

          {/* Work Cards */}
          <div className={isTLDRMode ? 'hidden' : 'space-y-12'}>
            {employers.map((employer, index) => (
              <div
                key={employer.name}
                className={`transition-all duration-1000 ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ animationDelay: `${index * 200 + 500}ms` }}
              >
                <WorkCard
                  employer={employer}
                  initialOpen={index === 0 || index === 1}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
