import { Icon } from '@iconify/react';
import { PageSection } from '../../components/PageSection';
import { PageTitle } from '../../components/PageTitle';
import { SubTitle } from '../../components/SubTitle';
import { ProjectCard } from './ProjectCard';
import { projects } from './projects';


export const ProjectExperience = () => {

  return (
    <PageSection className='p-7'>
      <div className="mt-4 transition-all duration-300 md:my-auto">
        <PageTitle title='Projects' />
        <br />
        <br />
        <div className='flex flex-wrap justify-evenly gap-4'>
          {projects.map((project) => {
            return <ProjectCard {...project} key={project.content}/>
          })}
        </div>
      <br/>

      <hr/>
      <a className='flex gap-x-2 my-4 justify-center cursor-pointer' href='https://www.github.com/devinobrien-css'>
        <Icon icon='line-md:github-twotone' className='text-white my-auto'/>
        <SubTitle className='my-auto text-white'>
          view more on Github
        </SubTitle>
      </a>
      <hr/>
      <hr className='w-1/2 my-2 mx-auto'/>
      </div>
    </PageSection>
  );
};
