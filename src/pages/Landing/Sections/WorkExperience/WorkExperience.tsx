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
      className='relative overflow-hidden bg-white py-24 dark:bg-gradient-to-br dark:from-slate-900 dark:via-blue-950 dark:to-slate-900'
    >
      {/* Background Elements */}
      <div className='absolute inset-0'>
        <div className='bg-grid-pattern absolute inset-0 opacity-5'></div>
        <div className='absolute left-1/4 top-20 size-32 animate-float rounded-full bg-gradient-to-br from-blue-400/10 to-indigo-600/10 blur-2xl dark:from-blue-400/10 dark:to-purple-600/10'></div>
        <div className='absolute bottom-20 right-1/4 size-24 animate-float-delayed rounded-full bg-gradient-to-br from-purple-400/10 to-pink-600/10 blur-2xl'></div>
      </div>

      <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div
          className={`mb-16 text-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
        >
          <div className='mb-4 inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 backdrop-blur-sm'>
            <Icon icon='ph:briefcase' className='mr-2 size-5 text-blue-400' />
            <span className='text-sm font-medium text-blue-300'>
              Professional Journey
            </span>
          </div>

          <h2 className='mb-6 text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl lg:text-6xl'>
            Where I've{' '}
            <span className='bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent'>
              Made an Impact
            </span>
          </h2>

          <p className='mx-auto max-w-3xl text-xl text-slate-300'>
            {isTLDRMode
              ? '5+ years at top companies • Tech Lead • Full-Stack expertise'
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
                <div className='rounded-xl border border-blue-500/30 bg-blue-500/10 p-6 text-center'>
                  <div className='text-2xl font-bold text-blue-400'>
                    Current
                  </div>
                  <div className='text-sm text-slate-300'>
                    Tech Lead at Maro for Schools
                  </div>
                  <div className='text-xs text-slate-400'>
                    Remote • 2024-Present
                  </div>
                </div>
                <div className='rounded-xl border border-purple-500/30 bg-purple-500/10 p-6 text-center'>
                  <div className='text-2xl font-bold text-purple-400'>5+</div>
                  <div className='text-sm text-slate-300'>Years Experience</div>
                  <div className='text-xs text-slate-400'>
                    Full-Stack Development
                  </div>
                </div>
                <div className='rounded-xl border border-green-500/30 bg-green-500/10 p-6 text-center'>
                  <div className='text-2xl font-bold text-green-400'>50+</div>
                  <div className='text-sm text-slate-300'>
                    Projects Delivered
                  </div>
                  <div className='text-xs text-slate-400'>
                    React • Node.js • AWS
                  </div>
                </div>
              </div>

              {/* Compact Timeline */}
              <div className='relative rounded-xl border border-slate-700/50 bg-slate-100/10 p-6 backdrop-blur-sm dark:bg-slate-800/50'>
                {/* Timeline Container */}
                <div className='relative'>
                  {/* Timeline Line */}
                  <div className='absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500'></div>

                  {/* Timeline Items - Ordered chronologically */}
                  <div className='space-y-3'>
                    {/* 2024 - Present: Maro for Schools */}
                    <div className='relative flex items-center'>
                      <div className='z-10 flex size-8 items-center justify-center rounded-full border-2 border-blue-500 bg-slate-900'>
                        <div className='size-3 rounded-full bg-blue-500'></div>
                      </div>
                      <div className='ml-4 flex-1'>
                        <div className='flex items-center justify-between'>
                          <div>
                            <div className='font-semibold text-blue-400'>
                              Tech Lead
                            </div>
                            <div className='text-sm text-slate-300'>
                              Maro for Schools
                            </div>
                          </div>
                          <div className='text-xs text-slate-400'>
                            2024 - Present
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 2024 - Present: Troy Web Consulting */}
                    <div className='relative flex items-center'>
                      <div className='z-10 flex size-8 items-center justify-center rounded-full border-2 border-indigo-500 bg-slate-900'>
                        <div className='size-3 rounded-full bg-indigo-500'></div>
                      </div>
                      <div className='ml-4 flex-1'>
                        <div className='flex items-center justify-between'>
                          <div>
                            <div className='font-semibold text-indigo-400'>
                              Full Stack Developer
                            </div>
                            <div className='text-sm text-slate-300'>
                              Troy Web Consulting
                            </div>
                          </div>
                          <div className='text-xs text-slate-400'>
                            2024 - Present
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 2024: CDPHP */}
                    <div className='relative flex items-center'>
                      <div className='z-10 flex size-8 items-center justify-center rounded-full border-2 border-purple-500 bg-slate-900'>
                        <div className='size-3 rounded-full bg-purple-500'></div>
                      </div>
                      <div className='ml-4 flex-1'>
                        <div className='flex items-center justify-between'>
                          <div>
                            <div className='font-semibold text-purple-400'>
                              Full Stack Developer
                            </div>
                            <div className='text-sm text-slate-300'>CDPHP</div>
                          </div>
                          <div className='text-xs text-slate-400'>2024</div>
                        </div>
                      </div>
                    </div>

                    {/* 2024: Warner Bros. Discovery */}
                    <div className='relative flex items-center'>
                      <div className='z-10 flex size-8 items-center justify-center rounded-full border-2 border-pink-500 bg-slate-900'>
                        <div className='size-3 rounded-full bg-pink-500'></div>
                      </div>
                      <div className='ml-4 flex-1'>
                        <div className='flex items-center justify-between'>
                          <div>
                            <div className='font-semibold text-pink-400'>
                              Full Stack Developer
                            </div>
                            <div className='text-sm text-slate-300'>
                              Warner Bros. Discovery
                            </div>
                          </div>
                          <div className='text-xs text-slate-400'>2024</div>
                        </div>
                      </div>
                    </div>

                    {/* 2022 - 2024: Jahnel Group */}
                    <div className='relative flex items-center'>
                      <div className='z-10 flex size-8 items-center justify-center rounded-full border-2 border-violet-500 bg-slate-900'>
                        <div className='size-3 rounded-full bg-violet-500'></div>
                      </div>
                      <div className='ml-4 flex-1'>
                        <div className='flex items-center justify-between'>
                          <div>
                            <div className='font-semibold text-violet-400'>
                              Full Stack Developer
                            </div>
                            <div className='text-sm text-slate-300'>
                              Jahnel Group
                            </div>
                          </div>
                          <div className='text-xs text-slate-400'>
                            2022 - 2024
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 2021 - 2022: Content Critical Solutions */}
                    <div className='relative flex items-center'>
                      <div className='z-10 flex size-8 items-center justify-center rounded-full border-2 border-cyan-500 bg-slate-900'>
                        <div className='size-3 rounded-full bg-cyan-500'></div>
                      </div>
                      <div className='ml-4 flex-1'>
                        <div className='flex items-center justify-between'>
                          <div>
                            <div className='font-semibold text-cyan-400'>
                              Associate Developer
                            </div>
                            <div className='text-sm text-slate-300'>
                              Content Critical Sol.
                            </div>
                          </div>
                          <div className='text-xs text-slate-400'>
                            2021 - 2022
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 2021 - 2022: Tekniverse */}
                    <div className='relative flex items-center'>
                      <div className='z-10 flex size-8 items-center justify-center rounded-full border-2 border-teal-500 bg-slate-900'>
                        <div className='size-3 rounded-full bg-teal-500'></div>
                      </div>
                      <div className='ml-4 flex-1'>
                        <div className='flex items-center justify-between'>
                          <div>
                            <div className='font-semibold text-teal-400'>
                              Backend Development Intern
                            </div>
                            <div className='text-sm text-slate-300'>
                              Tekniverse
                            </div>
                          </div>
                          <div className='text-xs text-slate-400'>
                            2021 - 2022
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 2019 - Present: NeuroExed Lab */}
                    <div className='relative flex items-center'>
                      <div className='z-10 flex size-8 items-center justify-center rounded-full border-2 border-green-500 bg-slate-900'>
                        <div className='size-3 rounded-full bg-green-500'></div>
                      </div>
                      <div className='ml-4 flex-1'>
                        <div className='flex items-center justify-between'>
                          <div>
                            <div className='font-semibold text-green-400'>
                              Lead Developer
                            </div>
                            <div className='text-sm text-slate-300'>
                              NeuroExed Lab
                            </div>
                          </div>
                          <div className='text-xs text-slate-400'>
                            2019 - Present
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Timeline Line */}
          {!isTLDRMode && (
            <div className='absolute inset-y-0 left-8 hidden w-0.5 bg-gradient-to-b from-blue-600 via-indigo-500 to-cyan-500 opacity-30 dark:from-blue-500 dark:via-purple-500 dark:to-cyan-500 md:block'></div>
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
