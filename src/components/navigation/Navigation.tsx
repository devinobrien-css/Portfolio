import { useGlobalContext } from '../../util/context/useGlobalContext';
import cx from 'classnames';
import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { NavButton } from './NavButton';

const DarkModeSwitch = () => {
  const { darkMode, setDarkMode } = useGlobalContext();

  return (
    <button
      aria-label='Toggle dark mode'
      className='m-2 flex w-fit rounded-full bg-neutral-100 p-1 shadow-inner shadow-neutral-200 dark:bg-neutral-700 dark:shadow-none'
      onClick={() => setDarkMode(!darkMode)}
    >
      <div
        className={cx(
          'rounded-full bg-neutral-900 p-2 shadow-md transition-all duration-500 dark:bg-white',
          {
            'translate-x-6 opacity-0': !darkMode,
          },
        )}
      >
        <Icon icon='fa-solid:moon' className='size-4 text-white' />
      </div>
      <div
        className={cx(
          '-ml-4 rounded-full bg-gradient-to-br from-amber-300 to-yellow-500 p-2 shadow-md transition-all duration-500',
          {
            '-translate-x-6 opacity-0': darkMode,
          },
        )}
      >
        <Icon icon='fa-solid:sun' className='size-4 text-white' />
      </div>
    </button>
  );
};

export const Navigation = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 908) {
      setShow(false);
    }

    const handleScroll = () => {
      setShow(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={cx(
        'fixed right-0 top-0 z-[1000] flex w-fit justify-end transition-all duration-500',
        {
          ' h-[100%]': show,
          'h-[0%] w-[15%]': !show,
        },
      )}
    >
      <button
        aria-label='Toggle navigation'
        className='z-[1000] mt-4 flex h-fit rounded-l-full bg-white/90 p-1 text-neutral-900 shadow-lg shadow-neutral-200 ring-neutral-400 hover:bg-white hover:shadow-neutral-300 active:ring-2 dark:bg-neutral-800 dark:shadow-none hover:dark:bg-neutral-700'
        onClick={() => setShow(!show)}
      >
        <Icon
          icon='iconamoon:arrow-left-2-bold'
          className={cx('h-12 w-12 text-blue-600 dark:text-white', {
            'rotate-180 transform': show,
          })}
        />
      </button>

      <div
        className={cx(
          'h-min max-h-[90vh] max-w-fit overflow-clip whitespace-nowrap rounded-b-lg bg-white/95 shadow-lg shadow-neutral-200/50 backdrop-blur-sm transition-all duration-500 dark:bg-neutral-800 dark:shadow-none',
          {
            'w-0 blur-sm': !show,
            'w-full border border-neutral-200 p-4': show,
          },
        )}
      >
        <div className='flex h-min max-h-screen flex-col overflow-y-auto p-2 py-4 font-code dark:text-tiffany-blue'>
          <img
            src='https://access-portfolio-images.s3.amazonaws.com/profile.jpeg'
            alt='Devin'
            className='mx-auto size-20 rounded object-cover md:size-32'
          />
          <h1 className='py-1 text-center text-lg'>Devin O'Brien</h1>
          <a
            href='mailto:devinobrien@icloud.com'
            className='text-center text-paynes-grey underline'
          >
            devinobrien@icloud.com
          </a>

          <a
            href="https://access-portfolio-images.s3.amazonaws.com/Devin+P+O'Brien.pdf"
            download="Devin P. O'Brien"
            className='text-center text-paynes-grey underline'
            target='_blank'
          >
            download my resume
          </a>

          <hr className='my-2 border-tiffany-blue' />

          <NavButton text='Home' to='/' />
          <NavButton text='Projects' to='/projects' />
          <NavButton text='Skills' to='/skills' />
          <NavButton text='About' to='/personality' />

          <hr className='my-2 border-tiffany-blue' />

          <p className=''>Dark Mode</p>
          <DarkModeSwitch />

          <hr className='my-2 border-tiffany-blue' />

          <div className='flex flex-col gap-y-2'>
            Fellow developer?
            <br />
            <a
              href='https://github.com/devinobrien-css'
              className='group flex gap-x-2 hover:underline'
              target='_blank'
            >
              <Icon
                icon='ph:github-logo-duotone'
                className='size-6 group-hover:scale-110'
              />
              check out my github
            </a>
            <a
              href='https://github.com/devinobrien-css/Portfolio'
              className='group flex gap-x-2 hover:underline'
              target='_blank'
            >
              <Icon
                icon='ph:github-logo-fill'
                className='size-6 group-hover:scale-110'
              />
              view this site's code
            </a>
          </div>

          <hr className='mb-24 mt-2 border-tiffany-blue' />
        </div>
      </div>
    </div>
  );
};
