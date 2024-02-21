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
    <div className={cx('fixed right-0 top-0 flex transition-width justify-end z-[1000] ', {
      'z-[1000] w-[100%]': show,
      'w-[15%] h-0': !show,
      // 'w-[50%] z-[1000]': show,
    })}>
      <button 
        className='z-[1000] mt-4 flex h-fit rounded-l-full bg-white p-1 text-white shadow ring-moonstone hover:bg-slate-50/80 active:ring-2 dark:bg-gray-800 hover:dark:bg-gray-800/80' 
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
          'transition-all overflow-clip whitespace-nowrap max-w-fit bg-white dark:bg-gray-800 max-h-[90vh] duration-500',
          {
            'blur-sm w-[0%]': !show,
            'rounded-b-lg shadow w-[100%]' : show,
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
            className="cursor-pointer p-1 hover:underline md:p-2"
          >
              Introduction
          </Link>
          <Link
            smooth={true}
            to={'about-me'}
            className="cursor-pointer p-1 hover:underline md:p-2"
          >
              About Me
          </Link>
          <Link
            smooth={true}
            to={'quick-stats'}
            className="cursor-pointer p-1 hover:underline md:p-2"
          >
              Quick Stats
          </Link>
          <Link
            smooth={true}
            to={'project-experience'}
            className="cursor-pointer p-1 hover:underline md:p-2"
          >
              Project Experience
          </Link>
          <Link
            smooth={true}
            to={'work-experience'}
            className="cursor-pointer p-1 hover:underline md:p-2"
          >
              Work Experience
          </Link>
          <Link
            smooth={true}
            to={'academic-experience'}
            className="cursor-pointer p-1 hover:underline md:p-2"
          >
              Academic Experience
          </Link>
          <Link
            smooth={true}
            to={'personality'}
            className="cursor-pointer p-1 hover:underline md:p-2"
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

          <hr className='my-2 border-tiffany-blue'/>

          <div className='flex flex-col gap-y-2'>
            Fellow developer? <br/>
            <a href='https://github.com/devinobrien-css' className='group flex gap-x-2 hover:underline' target='_blank'><Icon icon="ph:github-logo-duotone" className='size-6 group-hover:scale-110'/>check out my github</a>
            <a href='https://github.com/devinobrien-css/Portfolio' className='group flex gap-x-2 hover:underline' target='_blank'><Icon icon="ph:github-logo-fill" className='size-6 group-hover:scale-110'/>view this site's code</a>
          </div>

          <hr className='mb-24 mt-2 border-tiffany-blue'/>

        </div>
      </div>
    </div>
  );
  
};