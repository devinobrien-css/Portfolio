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
        <div className='size-4 rounded-full border-4 border-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg dark:border-white dark:from-blue-500 dark:to-purple-500'>
          <div className='absolute inset-0 animate-ping rounded-full bg-blue-400 opacity-30'></div>
        </div>
      </div>

      {/* Card */}
      <div className='relative ml-0 md:ml-20'>
        <div
          className={`group relative overflow-hidden rounded-2xl border border-slate-100 bg-white/90 backdrop-blur-sm transition-all duration-500 hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-100/20 dark:border-slate-700/50 dark:bg-slate-800/30 dark:hover:border-slate-600/50 ${
            isOpen
              ? 'bg-white shadow-xl shadow-blue-100/20 dark:bg-slate-700/50 dark:shadow-blue-900/5'
              : ''
          }`}
        >
          {/* Animated Background */}
          <div className='absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 transition-opacity group-hover:opacity-100 dark:from-blue-600/5 dark:to-purple-600/5'></div>

          {/* Header */}
          <div className='relative z-10 p-6'>
            <div className='flex items-start justify-between'>
              <div className='flex items-center gap-4'>
                {/* Company Logo */}
                <div className='relative'>
                  <img
                    src={icon}
                    alt={name}
                    className='size-16 rounded-full border-2 border-gray-300 object-cover shadow-lg dark:border-slate-600/50'
                  />
                  <div className='absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600/20 to-indigo-600/20 dark:from-blue-500/20 dark:to-purple-500/20'></div>
                </div>

                {/* Job Info */}
                <div>
                  <h3 className='mb-1 text-xl font-bold text-gray-900 dark:text-white'>
                    {title}
                  </h3>
                  <p className='mb-2 text-lg font-medium text-blue-400'>
                    {name}
                  </p>
                  <div className='flex flex-wrap gap-4 text-sm text-gray-600 dark:text-slate-400'>
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
                className='group/btn relative flex size-10 items-center justify-center rounded-full border border-gray-300 bg-white/80 text-gray-700 transition-all hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400 dark:border-slate-600/50 dark:bg-slate-700/50 dark:text-slate-400'
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
              isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className='border-t border-gray-200 p-6 dark:border-slate-700/50'>
              {/* Skills */}
              {employer.skills && (
                <div className='mb-6'>
                  <h4 className='mb-3 flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-slate-300'>
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
                  <h4 className='mb-3 flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-slate-300'>
                    <Icon icon='ph:star' className='size-4' />
                    Key Achievements
                  </h4>
                  <div className='space-y-3'>
                    {employer.bulletPoints.map((point, pointIndex) => (
                      <div key={pointIndex} className='flex gap-3'>
                        <div className='mt-2 size-1.5 shrink-0 rounded-full bg-blue-400'></div>
                        <p className='text-sm leading-relaxed text-gray-700 dark:text-slate-300'>
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
          <div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/20 to-indigo-600/20 opacity-0 blur-xl transition-opacity group-hover:opacity-10 dark:from-blue-500/20 dark:to-purple-500/20'></div>
        </div>
      </div>
    </div>
  );
};
