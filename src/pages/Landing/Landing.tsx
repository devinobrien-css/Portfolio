import { SocialsAdvertisement } from '../../components/SocialsAdvertisement';
import { AcademicExperience } from './Sections/Academic';
import { OverallAd } from './Sections/Advertisement';
import { WorkExperience } from './Sections/WorkExperience';
import { Introduction } from './Sections/Introduction';
import { ProjectExperience } from './Sections/ProductionApps/ProductionApps';
import { WhatIDo } from './Sections/WhatIDo';
import { Projects as LandingProjects } from './Sections/Projects';
import { AboutMe } from './Sections/AboutMe';
import { ContactBanner } from './Sections/ContactBanner';

export const Landing = () => {
  return (
    <div className="relative mx-auto p-10 md:max-w-[65%] md:p-0">
      <div id="introduction" />
      <Introduction />

      <div id="about-me" />
      <AboutMe />

      <WhatIDo />

      <LandingProjects />

      <div id="work-experience" />
      <WorkExperience />

      <ContactBanner />

      <div id="project-experience" />
      <ProjectExperience />

      <div id="academic-experience" />
      <AcademicExperience />

      <OverallAd />

      <SocialsAdvertisement />
    </div>
  );
};
