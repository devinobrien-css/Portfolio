import { PageSection } from '../../components/PageSection';
import { PageTitle } from '../../components/PageTitle';
import { SubTitle } from '../../components/SubTitle';
import { SideBarAnimation } from '../../components/animations/SideBarAnimation';
import { ProjectCard } from './Card';
import { projects } from './projects';


export const ProjectExperience = () => {

  return (
    <PageSection className=''>
      <SideBarAnimation
        threshold={7}
        content={
          <div className='hidden p-16 md:block'>
            <img src='https://access-portfolio-images.s3.amazonaws.com/Financial+data-amico.svg' alt='project' className='-mr-32 w-full object-cover pr-2'/>
          </div>
        }
      >
        <SideBarAnimation
          threshold={11}
          upper_value={80}
          lower_value={20}
          content={
            <div className='mt-64 hidden p-16 md:block'>
              <img src='https://access-portfolio-images.s3.amazonaws.com/Data+extraction-amico.svg' alt='project' className='-mr-32 w-full object-cover'/>
              <br/>
            </div>
          }
        >
          <SideBarAnimation
            threshold={23}
            upper_value={90}
            lower_value={10}
            content={
              <div className='mt-132 hidden p-16 md:block'>
                <img src='https://access-portfolio-images.s3.amazonaws.com/Research+paper-amico.svg' alt='project' className='-mr-32 w-full object-cover'/>
                <br/>
              </div>
            }
          >
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
          </SideBarAnimation>
        </SideBarAnimation>
      </SideBarAnimation>
    </PageSection>
  );
};
