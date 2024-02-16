import { SocialsAdvertisement } from '../components/SocialsAdvertisement';
import { AboutMe } from './AboutMe';
import { AcademicExperience } from './Academic';
import { OverallAd } from './Advertisement';
import { WorkExperience } from './WorkExperience';
import { Introduction } from './Introduction';
import { ProjectExperience } from './ProductionApps/ProductionApps';
import { Personality } from './Personality';
import { QuickStats } from './QuickStats/QuickStats';

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