import { Icon } from '@iconify/react';
import { SocialsAdvertisement } from './components/SocialsAdvertisement';
import { AboutMe } from './pages/AboutMe';
import { AcademicExperience } from './pages/Academic';
import { OverallAd } from './pages/Advertisement';
import { WorkExperience } from './pages/WorkExperience';
import { Introduction } from './pages/Introduction';
import { ProjectExperience } from './pages/ProductionApps/ProductionApps';
import cx from 'classnames';
import { Personality } from './pages/Personality';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useGlobalContext } from './components/context/useGlobalContext';
import { Link } from 'react-scroll';
import 'react-toastify/dist/ReactToastify.css';

const TldrSwitch = () => {
  const { tldr, setTldr } = useGlobalContext();

  return (
    <button className='m-2 flex w-fit rounded-full bg-gray-500 p-1 text-tiffany-blue' onClick={() => setTldr(!tldr)}>
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
    <button className='m-2 flex w-fit rounded-full bg-gray-500 p-1 text-tiffany-blue' onClick={() => setDarkMode(!darkMode)}>
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

const Navigation = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if(window.innerWidth > 908) {
      setShow(true);
    } else {
      setShow(false);
      toast.info('TLDR mode is enabled. Description are shortened. Click the switch in the menu to disable.');
    }

    const handleScroll = () => {
      setShow(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  },[]);

  return (
    <div className={cx('fixed right-0 top-0 z-[1000] flex w-fit  justify-end', {
      'animate-pulse': !show,
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
          'transition-all overflow-clip whitespace-nowrap',
          {
            'w-[0%]': !show,
            'w-[100%] rounded-b-lg dark:bg-gray-800 shadow bg-white p-2': show,
          }
        )
      }>
        <div className='flex flex-col py-4 font-code dark:text-tiffany-blue'>
          <img src='https://access-portfolio-images.s3.amazonaws.com/profile.jpeg' alt='Devin' className='mx-auto size-32 rounded object-cover'/>
          <h1 className='py-1 text-center text-lg'>Devin O'Brien</h1>
          <a href='tel:203-228-8579' className='text-center text-paynes-grey underline'>
            203-228-8579
          </a>
          <a href='mailto:devinobrien@icloud.com' className='text-center text-paynes-grey underline'>
            devinobrien@icloud.com
          </a>
          <a href='https://www.linkedin.com/in/obrien-devin/' className='text-center text-paynes-grey underline' target='_blank'>
            LinkedIn
          </a>

          <hr className='my-2 border-tiffany-blue'/>

          {/* <a href='#introduction' className='block p-2'>Introduction</a> */}
          <Link
            smooth={true}
            to={'introduction'}
            className="cursor-pointer p-2"
          >
            Introduction
          </Link>
          <Link
            smooth={true}
            to={'about-me'}
            className="cursor-pointer p-2"
          >
            About Me
          </Link>
          <Link
            smooth={true}
            to={'project-experience'}
            className="cursor-pointer p-2"
          >
            Project Experience
          </Link>
          <Link
            smooth={true}
            to={'academic-experience'}
            className="cursor-pointer p-2"
          >
            Academic Experience
          </Link>
          <Link
            smooth={true}
            to={'work-experience'}
            className="cursor-pointer p-2"
          >
            Work Experience
          </Link>
          <Link
            smooth={true}
            to={'personality'}
            className="cursor-pointer p-2"
          >
            More than Code
          </Link>
          
          <hr className='my-2 border-tiffany-blue'/>
          
          <p className=''>
            TLDR:{' '}
            <span className='text-sm italic'>Too Long Didn't Read</span>
          </p>
          <p className='text-sm'>
            (shorten descriptions)
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

const Background = () => {
  return (
    <svg viewBox="0 0 602 792" className='fixed right-0 top-0 z-0 hidden h-screen w-screen sm:block' >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#33485E" />
          {/* <stop offset="100%" stopColor="#78A6AE" /> */}
          <stop offset="100%" stopColor="#101935" />
        </linearGradient>

        <filter id="blur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
        </filter>
      </defs>

      <path
        transform='translate(-30, -350) scale(1.7)'
        className='fill-gray-100 dark:fill-charcoal/10' 
        d="M576.8,498.9c-0.6,0-1.3,0-1.9,0c-5.7,0.1-11.7-0.6-17.9-2c-39.2-8.8-37.4-47.9-24.7-78.3c20.4-49,71.3-124.8,31.9-175.3  c-0.4-0.5-0.7-1-1.2-1.5c-2.9-3.5-6.2-6.8-9.9-10c-42.8-36.3-97.2-17.6-141.6,10.5c-0.7,0.5-1.5,0.9-2.2,1.4  c-15.7,10.1-30,21.4-42.2,31.7c-11.2,9.5-22.1,19.4-33.8,28.2c-22.5,17-50.8,31.6-79.8,25.7c-64.2-13-66-86.8-49.9-137.6H612v296.2  C601.6,494.6,589.9,498.5,576.8,498.9z"
      />

      <path 
        className='fill-gray-200 dark:fill-charcoal/10' 
        transform='translate(-410, -510) scale(2.4)'
        d="  M148.7,192c-1,5.1-2.1,10.2-3,15.3c-6.6,36.5-10.7,81.9-2.4,122.5c0.2,0.8,0.3,1.6,0.5,2.5c5.6,25.6,16.3,49.2,34.5,67.2  c0.5,0.5,1,0.9,1.5,1.4c3.6,3.4,7.4,6.6,11.6,9.6c0.3,0.2,0.5,0.3,0.7,0.5c0.4,0.3,0.8,0.6,1.2,0.8c0.3,0.2,1.2,0.8,1.2,0.8  c0.2,0.1,0.4,0.2,0.5,0.3c0.4,0.3,0.9,0.6,1.3,0.9c0.3,0.2,1.5,0.9,1.8,1.1c0.3,0.2,1.5,0.9,1.5,0.9c0.4,0.3,1.6,0.9,1.6,0.9  c75.4,42.4,129-51.3,183.1-87.9c22.4-15.2,54.3-30.4,81.4-18.1c31.6,14.3,37.9,54.2,21.1,82.1c-20.7,34.1-108.1,67.7-80.7,118.3  c28.1,51.9,92.5,18.2,134.2,10.4c28.6-5.3,52.8,3.2,71.6,19.7v59H307c-45.2-57.7-91.7-113.2-168.5-138  C96.3,448.4,45.6,441.4,0,450.6V192H148.7z"
      />

      <path 
        transform='translate(0, 409) rotate(180, 301, 396) scale(1.8)'
        className='hidden opacity-30' // todo remove hidden
        fill="url(#gradient)"
        d="M576.8,498.9c-0.6,0-1.3,0-1.9,0c-5.7,0.1-11.7-0.6-17.9-2c-39.2-8.8-37.4-47.9-24.7-78.3c20.4-49,71.3-124.8,31.9-175.3  c-0.4-0.5-0.7-1-1.2-1.5c-2.9-3.5-6.2-6.8-9.9-10c-42.8-36.3-97.2-17.6-141.6,10.5c-0.7,0.5-1.5,0.9-2.2,1.4  c-15.7,10.1-30,21.4-42.2,31.7c-11.2,9.5-22.1,19.4-33.8,28.2c-22.5,17-50.8,31.6-79.8,25.7c-64.2-13-66-86.8-49.9-137.6H612v296.2  C601.6,494.6,589.9,498.5,576.8,498.9z"
        
      />
    </svg>
  );
};


const App = () => {
  return (
    <div className='bg-gray-50 dark:bg-gray-900'>
      <Background />
      
      <Navigation />

      <div className='group relative mx-auto  md:max-w-[70%]'>
        {/* <TldrSwitch /> */}

        <div id='introduction' />
        <Introduction />

        <div id='about-me' className='md:mb-64'/>
        <AboutMe />

        <OverallAd />

        <div id='project-experience' className='md:mb-32'/>
        <ProjectExperience />

        <div id='academic-experience' />
        <AcademicExperience />

        <div id='work-experience' />
        <WorkExperience />

        {/* <WebsitesAd />  */}

        <div id='personality' />
        <Personality />

        {/* <Messenger /> */}
        <SocialsAdvertisement /> 
      </div>

      <ToastContainer
        position="bottom-right"
        newestOnTop
        autoClose={3000}
        toastClassName="rounded-lg"
        closeButton={true}
      />
    </div>
  );
};
export default App;
