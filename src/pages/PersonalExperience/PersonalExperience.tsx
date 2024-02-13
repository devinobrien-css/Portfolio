import { PageSection } from '../../components/PageSection';
import { PageTitle } from '../../components/PageTitle';
import { ProjectCard } from './ProjectCard';
import { projects } from '../../data/projects';


export const ProjectExperience = () => {

  return (
    <PageSection className='md:p-7'>
      <div className="mt-4 transition-all duration-300 md:my-auto">
        <PageTitle title='Personal Apps' />
        <div className='flex flex-wrap justify-evenly gap-x-4 gap-y-6 py-4'>
          {projects.map((project) => {
            return <ProjectCard {...project} key={project.content}/>
          })}
        </div>
      <br/>
      </div>
    </PageSection>
  );
};
