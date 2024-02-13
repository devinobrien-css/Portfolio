import { PageSection } from '../../components/PageSection';
import { PageTitle } from '../../components/PageTitle';
import { SubTitle } from '../../components/SubTitle';
import { ProjectCard } from './Card';
import { projects } from './projects';


export const ProjectExperience = () => {

  return (
    <PageSection className=''>
      <div className="w-[95%] p-10 md:mx-auto md:p-6">
        <PageTitle title="Production Apps" />
        <SubTitle>click for further details</SubTitle>

        <br />
        <div className='flex flex-wrap justify-evenly gap-x-4 gap-y-6 py-4'>
          {projects.map((project) => {
            return <ProjectCard {...project} key={project.content}/>;
          })} 
        </div>
        <br/>
      </div>
    </PageSection>
  );
};
