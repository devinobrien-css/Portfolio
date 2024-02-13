import { Icon } from '@iconify/react';
import { SocialsAdvertisement } from './components/SocialsAdvertisement';
import { useGlobalContext } from './components/context/GlobalContext';
import { AboutMe } from './pages/AboutMe';
import { AcademicExperience } from './pages/Academic';
import { OverallAd } from './pages/Advertisement/Advertisement';
import { WorkExperience } from './pages/WorkExperience';
import { Introduction } from './pages/Introduction';
import { ProjectExperience } from './pages/ProductionApps/ProductionApps';
import { WebsitesAd } from './pages/Websites';
import cx from 'classnames';
import { Personality } from './pages/Personality';

const TldrSwitch = () => {
  const { tldr, setTldr } = useGlobalContext();

  return (
    <div className='fixed right-0 top-0'>
      <button className='m-2 flex rounded-full bg-gray-800 p-1 text-white' onClick={() => setTldr(!tldr)}>
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
    </div>
  );
};

const App = () => {
  return (
    <div className='group relative mx-auto md:max-w-[70%]'>
      <TldrSwitch />
      <Introduction />
      <AboutMe />
      <OverallAd />
      <ProjectExperience />
      <AcademicExperience />
      <WorkExperience />
      <WebsitesAd /> 
      <SocialsAdvertisement /> 
      <Personality />
      {/* <Messenger /> */}
    </div>
  );
};
export default App;
