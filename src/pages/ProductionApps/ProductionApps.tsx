import { PageSection } from '../../components/PageSection';
import { PageTitle } from '../../components/PageTitle';
import { SubTitle } from '../../components/SubTitle';
import { TopBarAnimation } from '../../components/animations/TopBarAnimation';
import { ProjectCard } from './ProjectCard';
import { projects } from '../../data/projects';


export const ProjectExperience = () => {

  return (
    <PageSection className=''>

      <TopBarAnimation
        threshold={16}
        content={
          <div className='-ml-48 -mt-48 hidden w-1/5 pb-24 md:block'>
            <img src='https://access-portfolio-images.s3.amazonaws.com/Data+extraction-amico.svg' alt='project' className='w-3/4 object-cover'/>
            <br/>
          </div>
        }
      >
        {/* <SideBarAnimation
          threshold={11}
          content={
            <div className='mt-160 hidden md:block'>
              <img src='https://access-portfolio-images.s3.amazonaws.com/Research+paper-amico.svg' alt='project' className='-mr-16 w-full object-cover'/>
              <br/>
            </div>
          }
        > */}
        <div className="w-[95%] p-10 md:mx-auto md:p-6">
          <PageTitle title="Production Apps" />
          <SubTitle>click for further details</SubTitle>

          <br />
          <div className='flex flex-wrap justify-evenly gap-x-4 gap-y-6 py-4'>
            {projects.map((project) => {
              return <ProjectCard project={project} key={project.content}/>;
            })} 
          </div>
          <br/>
        </div>
        {/* </SideBarAnimation> */}
      </TopBarAnimation>
    </PageSection>
  );
};
