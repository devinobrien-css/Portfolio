import { Messenger } from './components/Message';
import { SocialsAdvertisement } from './components/SocialsAdvertisement';
import { AboutMe } from './pages/landing/sections/AboutMe';
import { AcademicExperience } from './pages/landing/sections/Academic';
import { OverallAd } from './pages/landing/sections/Advertisement';
import { WorkExperience } from './pages/landing/sections/Experience';
import { Introduction } from './pages/landing/sections/Introduction';
import { ProjectExperience } from './pages/landing/sections/ProjectExperience/ProjectExperience';
import { WebsitesAd } from './pages/landing/sections/Websites';

const App = () => {
  return (
    <div>
      <Introduction />
      <AboutMe />
      <OverallAd />
      <AcademicExperience />
      <ProjectExperience />
      <WorkExperience />
      <WebsitesAd /> 
      <SocialsAdvertisement /> 
    </div>
  );
};
export default App;
