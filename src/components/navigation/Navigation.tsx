import { useGlobalContext } from '../context/useGlobalContext';
import cx from 'classnames';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-scroll';
import { Icon } from '@iconify/react';

const TldrSwitch = () => {
  const { tldr, setTldr } = useGlobalContext();
  
  return (
    <button className='m-2 flex w-fit rounded-full bg-gray-200 p-1 text-tiffany-blue dark:bg-gray-500' onClick={() => setTldr(!tldr)}>
      <div className={
        cx('bg-gray-300 rounded-full transition-all duration-500 p-2', {
          'opacity-0': !tldr,
        })
      }>
        <Icon icon="fa6-solid:code" className='size-4 text-gray-800'/>
      </div>
      <div className={
        cx('p-2 transition-all duration-500 bg-gray-300 rounded-full -ml-4', {
          'opacity-0': tldr,
        })
      }>
        <Icon icon="tabler:code-off" className='size-4 text-gray-800'/>
      </div>
    </button>
  );
};
  
const DarkModeSwitch = () => {
  const { darkMode, setDarkMode } = useGlobalContext();
  
  return (
    <button className='m-2 flex w-fit rounded-full bg-gray-200 p-1 text-tiffany-blue dark:bg-gray-500' onClick={() => setDarkMode(!darkMode)}>
      <div className={
        cx('bg-gray-300 rounded-full transition-all duration-500 p-2', {
          'opacity-0': !darkMode,
        })
      }>
        <Icon icon="fa-solid:moon" className='size-4 text-gray-800'/>
      </div>
      <div className={
        cx('p-2 transition-all duration-500 bg-gray-300 rounded-full -ml-4', {
          'opacity-0': darkMode,
        })
      }>
        <Icon icon="fa-solid:sun" className='size-4 text-gray-800'/>
      </div>
    </button>
  );
};
  
export const Navigation = () => {
  const [show, setShow] = useState(false);
  
  useEffect(() => {
    if(window.innerWidth > 908) {
      setShow(true);
    } else {
      setShow(false);
      toast.info('TLDR mode is enabled. Descriptions are shortened. Click the switch in the menu to disable.');
    }
  
    const handleScroll = () => {
      setShow(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  },[]);
  
  return (
    <div className={cx('fixed right-0 top-0 z-[1000] flex  justify-end transition-all duration-500', {
      'w-[0%]': !show,
      'md:w-[30%] w-[90%]': show,
    })}>
      <button 
        className='mt-4 flex h-fit rounded-l-full bg-white p-1 text-white shadow dark:bg-gray-800' 
        onClick={() => setShow(!show)}
      >
        <Icon icon="iconamoon:arrow-left-2-bold" className={cx(
          'w-12 h-12 dark:text-white text-gray-600',
          {
            'transform rotate-180': show,
          }
        )}/>
      </button>
  
      <div className={
        cx(
          'transition-all overflow-clip whitespace-nowrap bg-white dark:bg-gray-800',
          {
            'blur-sm': !show,
            'rounded-b-lg shadow': show,
          }
        )
      }>
        <div className='flex max-h-screen flex-col overflow-y-auto p-2 py-4 font-code dark:text-tiffany-blue'>
          <img src='https://access-portfolio-images.s3.amazonaws.com/profile.jpeg' alt='Devin' className='mx-auto size-20 rounded object-cover md:size-32'/>
          <h1 className='py-1 text-center text-lg'>Devin O'Brien</h1>
          <a href='tel:203-228-8579' className='text-center text-paynes-grey underline'>
              203-228-8579
          </a>
          <a href='mailto:devinobrien@icloud.com' className='text-center text-paynes-grey underline'>
              devinobrien@icloud.com
          </a>

          <a href='mailto:devinobrien@icloud.com' className='text-center text-paynes-grey underline'>
            download my resume
          </a>

          <hr className='my-2 border-tiffany-blue'/>
  
          {/* <a href='#introduction' className='block p-2'>Introduction</a> */}
          <Link
            smooth={true}
            to={'introduction'}
            className="cursor-pointer p-1 md:p-2"
          >
              Introduction
          </Link>
          <Link
            smooth={true}
            to={'about-me'}
            className="cursor-pointer p-1 md:p-2"
          >
              About Me
          </Link>
          <Link
            smooth={true}
            to={'project-experience'}
            className="cursor-pointer p-1 md:p-2"
          >
              Project Experience
          </Link>
          <Link
            smooth={true}
            to={'work-experience'}
            className="cursor-pointer p-1 md:p-2"
          >
              Work Experience
          </Link>
          <Link
            smooth={true}
            to={'academic-experience'}
            className="cursor-pointer p-1 md:p-2"
          >
              Academic Experience
          </Link>
          <Link
            smooth={true}
            to={'personality'}
            className="cursor-pointer p-1 md:p-2"
          >
              More than Code
          </Link>
            
          <hr className='my-2 border-tiffany-blue'/>
            
          <p className=''>
              TLDR:{' '}
            <span className='text-sm italic'>(shorten descriptions)</span>
          </p>
          <TldrSwitch />
  
          <hr className='my-2 border-tiffany-blue'/>
  
          <p className=''>
              Dark Mode
          </p>
          <DarkModeSwitch />
        </div>
      </div>
  
    </div>
  );
  
};