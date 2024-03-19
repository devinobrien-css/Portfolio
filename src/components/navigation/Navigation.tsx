import { useGlobalContext } from '../../util/context/useGlobalContext';
import cx from 'classnames';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Link as ScrollLink } from 'react-scroll';
import { Icon } from '@iconify/react';
import { useLocation, useNavigate } from 'react-router-dom';

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

interface NavButtonProps {
  text: string;
  to: string;
  isMulti?: boolean;
  children?: React.ReactNode;
}
const NavButton = ({ text, to, isMulti = false, children }: NavButtonProps) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [show, setShow] = useState(pathname === to);

  useEffect(() => {
    if(pathname === to) {
      setShow(true);
    } else {
      setShow(false);
    }
  }
  ,[pathname, to]);

  return (
    <>
      <div className='flex justify-between'>
        <button
          onClick={() => navigate(to)}
          className='flex p-2 text-left hover:underline '
        >
          {text}
        </button>
        {
          isMulti && <button onClick={() => setShow(!show)}>
            <Icon icon="akar-icons:chevron-right" className={cx('size-6 my-auto ml-2', {
              'transform rotate-90': (show ?? pathname === to),
            })}/>
          </button>
        }
      </div>
      <div className='flex flex-col px-4'>
        {
          (show ?? pathname === to) && children
        }
      </div>
    </>
  );
};
  
export const Navigation = () => {
  const [show, setShow] = useState(false);
  const { setTldr } = useGlobalContext();
  
  useEffect(() => {
    if(window.innerWidth < 908) {
      setShow(false);
      if(!localStorage.tldr){
        setTldr(true);
        // toast.info('TLDR mode is enabled. Descriptions are shortened. Click the switch in the menu to disable.');
      }
    }
  
    const handleScroll = () => {
      setShow(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  },[setTldr]);
  
  return (
    <div className={cx('fixed right-0 top-0 flex transition-all justify-end z-[1000] duration-500 w-fit', {
      ' h-[100%]': show,
      'w-[15%] h-[0%]': !show,
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
          'transition-all h-min overflow-clip whitespace-nowrap max-w-fit bg-white dark:bg-gray-800 max-h-[90vh] duration-500 rounded-b-lg',
          {
            'blur-sm w-0': !show,
            'shadow w-full  p-4' : show,
          }
        )
      }>
        <div className='flex h-min max-h-screen flex-col overflow-y-auto p-2 py-4 font-code dark:text-tiffany-blue'>
          <img src='https://access-portfolio-images.s3.amazonaws.com/profile.jpeg' alt='Devin' className='mx-auto size-20 rounded object-cover md:size-32'/>
          <h1 className='py-1 text-center text-lg'>Devin O'Brien</h1>
          <a href='tel:203-228-8579' className='text-center text-paynes-grey underline'>
              203-228-8579
          </a>
          <a href='mailto:devinobrien@icloud.com' className='text-center text-paynes-grey underline'>
              devinobrien@icloud.com
          </a>

          <a href="https://access-portfolio-images.s3.amazonaws.com/Devin+P+O'Brien.pdf" download="Devin P. O'Brien" className='text-center text-paynes-grey underline' target='_blank'>
            download my resume
          </a>

          <hr className='my-2 border-tiffany-blue'/>
  
          {/* <a href='#introduction' className='block p-2'>Introduction</a> */}
          {/* <button onClick={() => navigate('/')} className='block p-2 text-left'>Home</button> */}
          <NavButton text='Home' to='/' isMulti>
            <ScrollLink
              smooth={true}
              to={'introduction'}
              className="cursor-pointer p-1 hover:underline md:p-2"
            >
              Introduction
            </ScrollLink>
            <ScrollLink
              smooth={true}
              to={'work-experience'}
              className="cursor-pointer p-1 hover:underline md:p-2"
            >
              Work Experience
            </ScrollLink>
            <ScrollLink
              smooth={true}
              to={'project-experience'}
              className="cursor-pointer p-1 hover:underline md:p-2"
            >
              Project Experience
            </ScrollLink>
            <ScrollLink
              smooth={true}
              to={'academic-experience'}
              className="cursor-pointer p-1 hover:underline md:p-2"
            >
              Academic Experience
            </ScrollLink>
          </NavButton>
          <NavButton text='Projects' to='/projects' isMulti>
            <ScrollLink
              smooth={true}
              to={'all-projects'}
              className="cursor-pointer p-1 hover:underline md:p-2"
            >
              Github Projects
            </ScrollLink>
            <ScrollLink
              smooth={true}
              to={'quick-stats'}
              className="cursor-pointer p-1 hover:underline md:p-2"
            >
              Quick Stats
            </ScrollLink>
          </NavButton>
          <NavButton text='More than Code' to='/personality'/>
            
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
            Fellow developer? 
            <br/>
            <a href='https://github.com/devinobrien-css' className='group flex gap-x-2 hover:underline' target='_blank'><Icon icon="ph:github-logo-duotone" className='size-6 group-hover:scale-110'/>check out my github</a>
            <a href='https://github.com/devinobrien-css/Portfolio' className='group flex gap-x-2 hover:underline' target='_blank'><Icon icon="ph:github-logo-fill" className='size-6 group-hover:scale-110'/>view this site's code</a>
          </div>

          <hr className='mb-24 mt-2 border-tiffany-blue'/>

        </div>
      </div>
    </div>
  );
  
};