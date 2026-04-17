import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { Employer } from '../../../../types/Employer';

interface WorkCardProps {
  employer: Employer;
  initialOpen?: boolean;
  index: number;
}

export const WorkCard = ({ employer, initialOpen, index }: WorkCardProps) => {
  const { name, title, timeline, location, icon, shortName } = employer;
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (initialOpen) {
      setIsOpen(true);
    }
  }, [initialOpen]);

  return (
    <div className='relative'>
      {/* Timeline Dot */}
      <div
        className='absolute top-8 z-10 hidden md:block'
        style={{ left: '25px' }}
      >
        <div className='size-4 rounded-full border-4 border-white bg-neutral-900 shadow-lg dark:border-white dark:bg-white'>
          <div className='absolute inset-0 animate-ping rounded-full bg-blue-400 opacity-30'></div>
        </div>
      </div>

      {/* Card */}
      <div className='relative ml-0 md:ml-20'>
        <div
          className={`group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all duration-500 hover:border-neutral-300 hover:shadow-lg dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-neutral-600 ${
            isOpen ? 'bg-white shadow-md dark:bg-neutral-800' : ''
          }`}
        >
          {/* Animated Background */}
          <div className='absolute inset-0 bg-neutral-50 opacity-0 transition-opacity group-hover:opacity-50 dark:bg-neutral-700/10'></div>

          {/* Header */}
          <div className='relative z-10 p-6'>
            <div className='flex items-start justify-between'>
              <div className='flex items-center gap-4'>
                {/* Company Logo */}
                <div className='relative flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-xl border-2 border-neutral-200 bg-white dark:border-neutral-600'>
                  <img
                    src={icon}
                    alt={name}
                    className='size-full object-cover'
                  />
                </div>

                {/* Job Info */}
                <div>
                  <h3 className='mb-1 text-xl font-bold text-neutral-900 dark:text-white'>
                    {title}
                  </h3>
                  <p className='mb-2 text-lg font-medium text-blue-400'>
                    {name}
                  </p>
                  <div className='flex flex-wrap gap-4 text-sm text-neutral-600 dark:text-neutral-400'>
                    <div className='flex items-center gap-1'>
                      <Icon icon='ph:calendar' className='size-4' />
                      <span>{timeline}</span>
                    </div>
                    <div className='flex items-center gap-1'>
                      <Icon icon='ph:map-pin' className='size-4' />
                      <span>{location}</span>
                    </div>
                    <a
                      href={employer.link}
                      target='_blank'
                      rel='noreferrer noopener'
                      className='flex items-center gap-1 text-blue-400 transition-colors hover:text-blue-300'
                    >
                      <Icon icon='ph:link' className='size-4' />
                      <span>{shortName}</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Toggle Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className='group/btn relative flex size-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 transition-all hover:border-neutral-400 hover:bg-neutral-50 dark:border-neutral-600 dark:bg-neutral-700 dark:text-neutral-400'
              >
                <Icon
                  icon={isOpen ? 'ph:minus' : 'ph:plus'}
                  className={`size-5 transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                />
              </button>
            </div>
          </div>

          {/* Expandable Content */}
          <div
            className={`overflow-hidden transition-all duration-500 ${
              isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className='border-t border-neutral-200 p-6 dark:border-neutral-700'>
              {/* Skills */}
              {employer.skills && (
                <div className='mb-6'>
                  <h4 className='mb-3 flex items-center gap-2 text-sm font-semibold text-neutral-700 dark:text-neutral-300'>
                    <Icon icon='ph:code' className='size-4' />
                    Technologies Used
                  </h4>
                  <div className='flex flex-wrap gap-2'>
                    {employer.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className='rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300'
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Achievements */}
              {employer.bulletPoints && (
                <div className='mb-6'>
                  <h4 className='mb-3 flex items-center gap-2 text-sm font-semibold text-neutral-700 dark:text-neutral-300'>
                    <Icon icon='ph:star' className='size-4' />
                    Key Achievements
                  </h4>
                  <div className='space-y-3'>
                    {employer.bulletPoints.map((point, pointIndex) => (
                      <div key={pointIndex} className='flex gap-3'>
                        <div className='mt-2 size-1.5 shrink-0 rounded-full bg-blue-400'></div>
                        <p className='text-sm leading-relaxed text-neutral-600 dark:text-neutral-400'>
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Glow Effect */}
          <div className='absolute inset-0 rounded-2xl opacity-0 blur-xl transition-opacity'></div>
        </div>
      </div>
    </div>
  );
};
