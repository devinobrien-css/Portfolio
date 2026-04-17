import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';

export const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-neutral-950 transition-opacity duration-500 ${progress >= 100 ? 'opacity-0' : 'opacity-100'}`}
    >
      <div className='text-center'>
        {/* Logo/Name */}
        <div className='mb-8'>
          <h1 className='mb-2 text-4xl font-bold text-neutral-900 sm:text-5xl'>
            Devin O'Brien
          </h1>
          <p className='text-lg text-neutral-600'>Full Stack Developer</p>
        </div>

        {/* Loading Animation */}
        <div className='mb-6 flex justify-center'>
          <div className='relative'>
            <div className='size-16 rounded-full border-4 border-neutral-200'></div>
            <div className='absolute inset-0 size-16 animate-spin rounded-full border-4 border-blue-600 border-t-transparent'></div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className='mx-auto w-64'>
          <div className='mb-2 flex justify-between text-sm text-neutral-600'>
            <span>Loading...</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className='h-2 rounded-full bg-neutral-200'>
            <div
              className='h-2 rounded-full bg-blue-600 transition-all duration-300'
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Tech Stack Icons */}
        <div className='mt-8 flex justify-center gap-4 opacity-60'>
          <Icon icon='logos:react' className='size-6 animate-pulse' />
          <Icon
            icon='logos:typescript-icon'
            className='size-6 animate-pulse'
            style={{ animationDelay: '0.2s' }}
          />
          <Icon
            icon='logos:nodejs-icon'
            className='size-6 animate-pulse'
            style={{ animationDelay: '0.4s' }}
          />
          <Icon
            icon='logos:aws'
            className='size-6 animate-pulse'
            style={{ animationDelay: '0.6s' }}
          />
        </div>
      </div>
    </div>
  );
};
