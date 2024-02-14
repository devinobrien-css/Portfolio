import { Icon } from '@iconify/react';
import { SocialsAdvertisement } from './components/SocialsAdvertisement';
import { useGlobalContext } from './components/context/GlobalContext';
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


const TldrSwitch = () => {
  const { tldr, setTldr } = useGlobalContext();

  return (
    <button className='m-2 flex w-fit rounded-full bg-gray-500 p-1 text-tiffany-blue' onClick={() => setTldr(!tldr)}>
      <div className={
        cx('bg-gray-300 rounded-full transition-all duration-500 p-2', {
          'opacity-0': !tldr,
        })
      }>
        <Icon icon="fa6-solid:code" className='size-4'/>
      </div>
      <div className={
        cx('p-2 transition-all duration-500 bg-gray-300 rounded-full -ml-4', {
          'opacity-0': tldr,
        })
      }>
        <Icon icon="tabler:code-off" className='size-4'/>
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
      console.log('here');
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
        className='mt-4 flex h-fit rounded-l-full bg-gray-800 p-1 text-white' 
        onClick={() => setShow(!show)}
      >
        <Icon icon="iconamoon:arrow-left-2-bold" className={cx(
          'w-12 h-12',
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
            'w-[100%] rounded-b-lg bg-gray-800 p-2': show,
          }
        )
      }>
        <div className='flex flex-col font-code text-tiffany-blue'>
          <a href='#introduction' className='block p-2'>Introduction</a>
          <a href='#about-me' className='block p-2'>About Me</a>
          <a href='#project-experience' className='block p-2'>Project Experience</a>
          <a href='#academic-experience' className='block p-2'>Academic Experience</a>
          <a href='#work-experience' className='block p-2'>Work Experience</a>
          <a href='#personality' className='block p-2'>Personality</a>
          <hr className='my-2 border-tiffany-blue'/>
          <p className=''>
            TLDR:{' '}
            <span className='text-sm italic'>Too Long Didn't Read</span>
          </p>
          <p className='text-sm'>
            (shorten descriptions)
          </p>
          <TldrSwitch />
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
      <path xmlns="http://www.w3.org/2000/svg" 
        transform='translate(30, -390) scale(1.7)'
        className='fill-tiffany-blue/10'
        // className='opacity-60'
        // fill="url(#gradient)"
        d="M576.8,498.9c-0.6,0-1.3,0-1.9,0c-5.7,0.1-11.7-0.6-17.9-2c-39.2-8.8-37.4-47.9-24.7-78.3c20.4-49,71.3-124.8,31.9-175.3  c-0.4-0.5-0.7-1-1.2-1.5c-2.9-3.5-6.2-6.8-9.9-10c-42.8-36.3-97.2-17.6-141.6,10.5c-0.7,0.5-1.5,0.9-2.2,1.4  c-15.7,10.1-30,21.4-42.2,31.7c-11.2,9.5-22.1,19.4-33.8,28.2c-22.5,17-50.8,31.6-79.8,25.7c-64.2-13-66-86.8-49.9-137.6H612v296.2  C601.6,494.6,589.9,498.5,576.8,498.9z"
        
      />

      <path xmlns="http://www.w3.org/2000/svg" 
        transform='translate(0, 409) rotate(180, 301, 396) scale(1.8)'
        // className='fill-tiffany-blue/10'
        className='opacity-30'
        fill="url(#gradient)"
        d="M576.8,498.9c-0.6,0-1.3,0-1.9,0c-5.7,0.1-11.7-0.6-17.9-2c-39.2-8.8-37.4-47.9-24.7-78.3c20.4-49,71.3-124.8,31.9-175.3  c-0.4-0.5-0.7-1-1.2-1.5c-2.9-3.5-6.2-6.8-9.9-10c-42.8-36.3-97.2-17.6-141.6,10.5c-0.7,0.5-1.5,0.9-2.2,1.4  c-15.7,10.1-30,21.4-42.2,31.7c-11.2,9.5-22.1,19.4-33.8,28.2c-22.5,17-50.8,31.6-79.8,25.7c-64.2-13-66-86.8-49.9-137.6H612v296.2  C601.6,494.6,589.9,498.5,576.8,498.9z"
        
      />
    </svg>
  );
};


const App = () => {
  return (
    <>
      <Background />
      
      <Navigation />

      <div className='group relative mx-auto md:max-w-[70%]'>
        {/* <TldrSwitch /> */}
        <div id='introduction' />
        <Introduction />
        <div id='about-me' />
        <AboutMe />

        <OverallAd />

        <div id='project-experience' />
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
    </>
  );
};
export default App;
