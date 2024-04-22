import { PageSection } from '../../../../components/text/PageSection';
import { PageTitle } from '../../../../components/text/PageTitle';
import { SubTitle } from '../../../../components/text/SubTitle';
import { ProjectCard } from './ProjectCard';
import { projects } from '../../../../data/projects';

export const ProjectExperience = () => {
  return (
    <PageSection>
      <PageTitle title='Production Apps' />
      <SubTitle>click for more details</SubTitle>

      <div className='flex flex-wrap justify-evenly gap-x-4 gap-y-6 py-4'>
        {projects.map((project) => {
          return <ProjectCard project={project} key={project.content} />;
        })}
      </div>
    </PageSection>
  );
};
