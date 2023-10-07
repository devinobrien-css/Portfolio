import { AcademicExperience } from './sections/Academic';
import { OverallAd } from './sections/Advertisement';
import { WorkExperience } from './sections/Experience';
import { WebsitesAd } from './sections/Websites';
import { ProjectExperience } from './sections/ProjectExperience/ProjectExperience';
import { SocialsAdvertisement } from '../../components/SocialsAdvertisement';
import { Introduction } from './sections/Introduction';

const Landing = () => {
  return (
    <>
      <Introduction />
      <OverallAd />
      <AcademicExperience />
      <ProjectExperience />
      <WorkExperience />
      <WebsitesAd />
      <SocialsAdvertisement />
    </>
  );
};
export default Landing;
