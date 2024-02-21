import { SocialsAdvertisement } from '../../components/SocialsAdvertisement';
import { AboutMe } from './Sections/AboutMe';
import { AcademicExperience } from './Sections/Academic';
import { OverallAd } from './Sections/Advertisement';
import { WorkExperience } from './Sections/WorkExperience';
import { Introduction } from './Sections/Introduction';
import { ProjectExperience } from './Sections/ProductionApps/ProductionApps';
import { Personality } from './Sections/Personality';
import { QuickStats } from './Sections/QuickStats/QuickStats';

export const Landing = () => {
  return (
    <div className='relative mx-auto md:max-w-[70%]'>
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