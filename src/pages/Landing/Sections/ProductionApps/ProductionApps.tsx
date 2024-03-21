import { PageSection } from '../../../../components/text/PageSection';
import { PageTitle } from '../../../../components/text/PageTitle';
import { SubTitle } from '../../../../components/text/SubTitle';
import { ProjectCard } from './ProjectCard';
import { projects } from '../../../../data/projects';


export const ProjectExperience = () => {

  return (
    // <TopBarAnimation
    //   threshold={16}
    //   content={
    //     <div className='-ml-48 -mt-48 hidden w-1/5 pb-24 md:block'>
    //       <img src='https://access-portfolio-images.s3.amazonaws.com/Data+extraction-amico.svg' alt='project' className='w-3/4 object-cover'/>
    //       <br/>
    //     </div>
    //   }
    // >
    <PageSection>
      <PageTitle title="Production Apps" />
      <SubTitle>click for more details</SubTitle>

      <div className='flex flex-wrap justify-evenly gap-x-4 gap-y-6 py-4'>
        {projects.map((project) => {
          return <ProjectCard project={project} key={project.content}/>;
        })} 
      </div>
    </PageSection>
    // </TopBarAnimation>
  );
};
