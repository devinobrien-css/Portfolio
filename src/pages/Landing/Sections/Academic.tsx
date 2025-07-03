import { useState, useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';
import { useTLDR } from '../../../util/context/TLDRContext';

export const AcademicExperience = () => {
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

  const academicData = [
    {
      level: "Master's Degree",
      school: 'State University at Albany, SUNY',
      year: '2024',
      gpa: '3.8',
      description:
        'Advanced Computer Science with focus on AI and Machine Learning',
      courses: [
        'Computer Vision',
        'Data Structures',
        'Discrete Math',
        'Databases',
        'Artificial Intelligence',
        'Machine Learning',
      ],
      icon: 'ph:graduation-cap',
      color: 'from-purple-500 to-pink-500',
    },
    {
      level: "Bachelor's Degree",
      school: 'State University at Albany, SUNY',
      year: '2022',
      gpa: '3.6',
      description:
        'Computer Science with specialization in Software Engineering',
      courses: [
        'Operating Systems',
        'Multimedia Programming',
        'Motion Detection',
        'Artificial Intelligence',
        'Hardware Design',
      ],
      icon: 'ph:certificate',
      color: 'from-blue-500 to-cyan-500',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className='relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-24 dark:bg-gradient-to-br dark:from-slate-900 dark:via-blue-950 dark:to-slate-900'
    >
      {/* Background Elements */}
      <div className='absolute inset-0'>
        <div className='bg-grid-pattern absolute inset-0 opacity-5'></div>
        <div className='absolute right-1/4 top-20 size-32 animate-float rounded-full bg-gradient-to-br from-purple-400/10 to-pink-600/10 blur-2xl'></div>
        <div className='absolute bottom-20 left-1/4 size-24 animate-float-delayed rounded-full bg-gradient-to-br from-blue-400/10 to-cyan-600/10 blur-2xl'></div>
      </div>

      <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div
          className={`mb-16 text-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
        >
          <div className='mb-4 inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 backdrop-blur-sm'>
            <Icon
              icon='ph:graduation-cap'
              className='mr-2 size-5 text-purple-600 dark:text-purple-400'
            />
            <span className='text-sm font-medium text-purple-600 dark:text-purple-300'>
              Academic Foundation
            </span>
          </div>

          <h2 className='mb-6 text-4xl font-bold text-gray-800 dark:text-white sm:text-5xl lg:text-6xl'>
            Educational{' '}
            <span className='bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent dark:from-purple-400 dark:via-pink-400 dark:to-cyan-400'>
              Excellence
            </span>
          </h2>

          <p className='mx-auto max-w-3xl text-xl text-gray-600 dark:text-slate-300'>
            Building the theoretical foundation that powers practical innovation
          </p>
        </div>

        {/* Academic Cards */}
        {isTLDRMode ? (
          // TLDR Mode - Compact Summary
          <div
            className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
          >
            <div className='mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white/80 p-8 shadow-lg shadow-blue-100/20 backdrop-blur-sm dark:border-slate-700/50 dark:bg-slate-800/30 dark:shadow-none'>
              <div className='grid gap-6 md:grid-cols-2'>
                {academicData.map((degree) => (
                  <div
                    key={degree.level}
                    className='group relative overflow-hidden rounded-xl border border-slate-100 bg-white/90 p-6 shadow-md shadow-blue-50/50 transition-all duration-300 hover:border-blue-100 hover:shadow-lg hover:shadow-blue-100/30 dark:border-slate-700/30 dark:bg-slate-800/20 dark:shadow-none dark:hover:border-slate-600/50'
                  >
                    <div className='flex items-center gap-4'>
                      <div
                        className={`rounded-lg bg-gradient-to-br ${degree.color} p-2`}
                      >
                        <Icon
                          icon={degree.icon}
                          className='size-5 text-white'
                        />
                      </div>
                      <div className='flex-1'>
                        <h3 className='text-lg font-bold text-gray-800 dark:text-white'>
                          {degree.level}
                        </h3>
                        <p className='text-sm text-gray-600 dark:text-slate-300'>
                          {degree.school}
                        </p>
                        <div className='mt-2 flex items-center gap-3 text-xs text-gray-500 dark:text-slate-400'>
                          <span>Graduated {degree.year}</span>
                          <span>•</span>
                          <span>GPA: {degree.gpa}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* TLDR Key Highlights */}
              <div className='mt-6 grid grid-cols-3 gap-4 rounded-lg bg-slate-100/80 p-4 dark:bg-slate-700/20'>
                <div className='text-center'>
                  <div className='text-lg font-bold text-green-600 dark:text-green-400'>
                    3.7
                  </div>
                  <div className='text-xs text-gray-500 dark:text-slate-400'>
                    Avg GPA
                  </div>
                </div>
                <div className='text-center'>
                  <div className='text-lg font-bold text-blue-600 dark:text-blue-400'>
                    35+
                  </div>
                  <div className='text-xs text-gray-500 dark:text-slate-400'>
                    Courses
                  </div>
                </div>
                <div className='text-center'>
                  <div className='text-lg font-bold text-purple-600 dark:text-purple-400'>
                    A+
                  </div>
                  <div className='text-xs text-gray-500 dark:text-slate-400'>
                    CS Focus
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Full Mode - Detailed Cards
          <div className='grid gap-8 lg:grid-cols-2'>
            {academicData.map((degree, index) => (
              <div
                key={degree.level}
                className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/90 shadow-lg shadow-blue-100/20 backdrop-blur-sm transition-all duration-1000 hover:scale-105 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-200/30 dark:border-slate-700/50 dark:bg-slate-800/30 dark:shadow-none dark:hover:border-slate-600/50 ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ animationDelay: `${index * 300 + 500}ms` }}
              >
                {/* Animated Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${degree.color} opacity-0 transition-opacity group-hover:opacity-5 dark:group-hover:opacity-10`}
                ></div>

                {/* Header */}
                <div className='relative z-10 border-b border-slate-100 p-6 dark:border-slate-700/50'>
                  <div className='flex items-center gap-4'>
                    {/* Icon */}
                    <div
                      className={`rounded-xl bg-gradient-to-br ${degree.color} p-3 shadow-md shadow-blue-100/50 transition-transform group-hover:rotate-12 dark:shadow-none`}
                    >
                      <Icon icon={degree.icon} className='size-8 text-white' />
                    </div>

                    {/* Degree Info */}
                    <div className='flex-1'>
                      <h3 className='mb-1 text-2xl font-bold text-gray-800 dark:text-white'>
                        {degree.level}
                      </h3>
                      <p className='mb-2 text-lg font-medium text-gray-600 dark:text-slate-300'>
                        {degree.school}
                      </p>
                      <div className='flex items-center gap-4 text-sm text-gray-500 dark:text-slate-400'>
                        <div className='flex items-center gap-1'>
                          <Icon
                            icon='ph:calendar'
                            className='size-4 text-gray-500 dark:text-slate-400'
                          />
                          <span>Graduated {degree.year}</span>
                        </div>
                        <div className='flex items-center gap-1'>
                          <Icon
                            icon='ph:star'
                            className='size-4 text-gray-500 dark:text-slate-400'
                          />
                          <span>GPA: {degree.gpa}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className='relative z-10 p-6'>
                  <p className='mb-6 leading-relaxed text-gray-600 dark:text-slate-300'>
                    {degree.description}
                  </p>

                  {/* Courses */}
                  <div className='mb-6'>
                    <h4 className='mb-3 flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-slate-300'>
                      <Icon
                        icon='ph:books'
                        className='size-4 text-gray-700 dark:text-slate-300'
                      />
                      Key Coursework
                    </h4>
                    <div className='flex flex-wrap gap-2'>
                      {degree.courses.map((course, courseIndex) => (
                        <span
                          key={course}
                          className='rounded-full border px-3 py-1 text-xs font-medium text-gray-700 shadow-sm transition-all hover:scale-105 hover:shadow-md dark:text-white dark:shadow-none'
                          style={{
                            animationDelay: `${index * 300 + courseIndex * 100 + 800}ms`,
                            borderColor:
                              index === 0
                                ? 'rgba(168, 85, 247, 0.2)'
                                : 'rgba(59, 130, 246, 0.2)',
                            backgroundColor:
                              index === 0
                                ? 'rgba(168, 85, 247, 0.05)'
                                : 'rgba(59, 130, 246, 0.05)',
                          }}
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Academic Stats */}
                  <div className='grid grid-cols-3 gap-3'>
                    <div className='rounded-lg bg-slate-50 p-3 text-center shadow-sm dark:bg-slate-700/30 dark:shadow-none'>
                      <div className='text-lg font-bold text-purple-600 dark:text-purple-400'>
                        {degree.gpa}
                      </div>
                      <div className='text-xs text-gray-500 dark:text-slate-400'>
                        GPA
                      </div>
                    </div>
                    <div className='rounded-lg bg-slate-50 p-3 text-center shadow-sm dark:bg-slate-700/30 dark:shadow-none'>
                      <div className='text-lg font-bold text-blue-600 dark:text-blue-400'>
                        {index === 0 ? '15+' : '20+'}
                      </div>
                      <div className='text-xs text-gray-500 dark:text-slate-400'>
                        Courses
                      </div>
                    </div>
                    <div className='rounded-lg bg-slate-50 p-3 text-center shadow-sm dark:bg-slate-700/30 dark:shadow-none'>
                      <div className='text-lg font-bold text-green-600 dark:text-green-400'>
                        {index === 0 ? 'A+' : 'A'}
                      </div>
                      <div className='text-xs text-gray-500 dark:text-slate-400'>
                        Avg Grade
                      </div>
                    </div>
                  </div>
                </div>

                {/* Glow Effect */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${degree.color} opacity-0 blur-xl transition-opacity group-hover:opacity-5 dark:group-hover:opacity-10`}
                ></div>

                {/* Achievement Badge */}
                <div className='absolute right-4 top-4'>
                  <div
                    className={`rounded-full bg-gradient-to-r ${degree.color} p-2 opacity-80 shadow-md`}
                  >
                    <Icon icon='ph:medal' className='size-4 text-white' />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Additional Info Section - Hidden in TLDR Mode */}
        {!isTLDRMode && (
          <div
            className={`mt-16 text-center transition-all delay-1000 duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
          >
            <div className='mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white/80 p-8 shadow-lg shadow-blue-100/20 backdrop-blur-sm dark:border-slate-700/50 dark:bg-slate-800/30 dark:shadow-none'>
              <div className='grid gap-8 md:grid-cols-3'>
                <div className='text-center'>
                  <div className='mb-3 inline-flex rounded-full bg-green-500/10 p-3 shadow-sm shadow-green-100/50 dark:shadow-none'>
                    <Icon
                      icon='ph:trophy'
                      className='size-6 text-green-600 dark:text-green-400'
                    />
                  </div>
                  <h4 className='mb-2 text-lg font-semibold text-gray-800 dark:text-white'>
                    Academic Excellence
                  </h4>
                  <p className='text-sm text-gray-600 dark:text-slate-400'>
                    Dean's List recognition multiple semesters
                  </p>
                </div>

                <div className='text-center'>
                  <div className='mb-3 inline-flex rounded-full bg-blue-500/10 p-3 shadow-sm shadow-blue-100/50 dark:shadow-none'>
                    <Icon
                      icon='ph:users'
                      className='size-6 text-blue-600 dark:text-blue-400'
                    />
                  </div>
                  <h4 className='mb-2 text-lg font-semibold text-gray-800 dark:text-white'>
                    Research Projects
                  </h4>
                  <p className='text-sm text-gray-600 dark:text-slate-400'>
                    Contributed to ML and Computer Vision research
                  </p>
                </div>

                <div className='text-center'>
                  <div className='mb-3 inline-flex rounded-full bg-purple-500/10 p-3 shadow-sm shadow-purple-100/50 dark:shadow-none'>
                    <Icon
                      icon='ph:lightning'
                      className='size-6 text-purple-600 dark:text-purple-400'
                    />
                  </div>
                  <h4 className='mb-2 text-lg font-semibold text-gray-800 dark:text-white'>
                    Fast Track
                  </h4>
                  <p className='text-sm text-gray-600 dark:text-slate-400'>
                    Accelerated program completion
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
