import { Icon } from '@iconify/react';
import { AcademicExperience } from './sections/Academic';
import { OverallAd } from './sections/Advertisement';
import { WorkExperience } from './sections/Experience';
import { WebsitesAd } from './sections/Websites';
import { PageSection } from '../../components/PageSection';
import { SectionTitle } from '../../components/titles/SectionTitle';
import { Title, TitleSize } from '../../components/Title';

const Landing = () => {
  return (
    <div>
      <PageSection>
        <div className="mt-4 w-full transition-all duration-300 md:my-auto md:flex md:w-4/5 lg:w-4/5">
          <div className="mx-auto h-full max-h-72 w-8/12 rounded-xl bg-headshot bg-cover bg-top bg-no-repeat md:mx-0 md:max-h-full md:w-1/3"></div>
          <div className="w-full p-6 md:w-2/3">
            <Title size={TitleSize.XL} className="mb-2">Devin O'Brien</Title>
            <hr />
            <br />
            <SectionTitle>Software Engineer</SectionTitle>
            <SectionTitle>Computer Science Master's Student</SectionTitle>
            <br />
            <hr />
            <div className="mt-4">
              <a
                className="group my-1 flex text-white"
                href="https://github.com/devinobrien-css"
                target="_blank"
                rel="noreferrer"
              >
                <Icon icon={'fa-brands:github-square'} width="50" height="43" />
                <span className="my-auto pl-2 font-lato transition-all group-hover:text-blue-300 group-hover:underline">
                  https://github.com/devinobrien-css
                </span>
              </a>
              <a
                className="group my-1 flex text-white"
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                <Icon icon={'typcn:social-instagram'} width="50" height="50" />
                <span className="my-auto pl-2 font-lato transition-all group-hover:text-blue-300 group-hover:underline">
                  https://instagram.com/devinobrien
                </span>
              </a>
              <a
                className="group my-1 flex text-white"
                href="https://www.linkedin.com/in/obrien-devin"
                target="_blank"
                rel="noreferrer"
              >
                <Icon icon={'mdi:linkedin'} width="50" height="50" />
                <span className="my-auto pl-2 font-lato transition-all group-hover:text-blue-300 group-hover:underline">
                  https://www.linkedin.com/in/obrien-devin
                </span>
              </a>
            </div>
          </div>
        </div>
      </PageSection>

      <OverallAd />
      <AcademicExperience />
      <WorkExperience />
      <WebsitesAd />
    </div>
  );
};
export default Landing;
