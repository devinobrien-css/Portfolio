import { Icon } from '@iconify/react';
import { SocialsAdvertisement } from './components/SocialsAdvertisement';
import { useGlobalContext } from './components/context/GlobalContext';
import { AboutMe } from './pages/AboutMe';
import { AcademicExperience } from './pages/Academic';
import { OverallAd } from './pages/Advertisement/Advertisement';
import { WorkExperience } from './pages/WorkExperience';
import { Introduction } from './pages/Introduction';
import { ProjectExperience } from './pages/ProductionApps/ProductionApps';
import cx from 'classnames';
import { Personality } from './pages/Personality';
import { useState } from 'react';

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
  return (
    <div className='fixed right-0 top-0 z-[1000] flex w-fit justify-end'>
      <button 
        className='mt-4 flex h-fit rounded-l-full bg-gray-800 p-1 text-white' 
        onClick={() => setShow(!show)}
      >
        <Icon icon="iconamoon:arrow-left-2-bold" className={cx(
          'w-8 h-8',
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

const App = () => {
  return (
    <>
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
    </>
  );
};
export default App;
