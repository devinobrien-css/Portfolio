import { SocialsAdvertisement } from './components/SocialsAdvertisement';
import { AboutMe } from './pages/AboutMe';
import { AcademicExperience } from './pages/Academic';
import { OverallAd } from './pages/Advertisement/Advertisement';
import { WorkExperience } from './pages/WorkExperience';
import { Introduction } from './pages/Introduction';
import { ProjectExperience } from './pages/ProductionApps/ProductionApps';
import { Personality } from './pages/Personality';
import { QuickStats } from './pages/QuickStats/QuickStats';

export const Routes = () => {
  return (
    <div className='group relative mx-auto  md:max-w-[70%]'>
      <div id='introduction' />
      <Introduction />

      <div id='about-me' />
      <AboutMe />

      <div id='quick-stats' />
      <QuickStats />

      <OverallAd />

      <div id='project-experience' />
      <ProjectExperience />

      <div id='work-experience' />
      <WorkExperience />

      <div id='academic-experience' />
      <AcademicExperience />


      <div id='personality' />
      <Personality />

      <SocialsAdvertisement /> 
    </div>
  );
};