// import { Messenger } from './components/Message';
import { SocialsAdvertisement } from './components/SocialsAdvertisement';
import { AboutMe } from './pages/AboutMe';
import { AcademicExperience } from './pages/Academic';
import { OverallAd } from './pages/Advertisement';
import { WorkExperience } from './pages/Experience';
import { Introduction } from './pages/Introduction';
import { ProjectExperience } from './pages/ProjectExperience/ProjectExperience';
import { WebsitesAd } from './pages/Websites';

const App = () => {
  return (
    <div className='md:max-w-[70%] mx-auto'>
      <Introduction />
      <AboutMe />
      <OverallAd />
      <ProjectExperience />
      <AcademicExperience />
      <WorkExperience />
      <WebsitesAd /> 
      <SocialsAdvertisement /> 
      {/* <Messenger /> */}
    </div>
  );
};
export default App;
