
import { Icon } from '@iconify/react';
import { SubTitle } from '../../components/SubTitle';
import { TextSection } from '../../components/TextSection';
import { Title } from '../../components/Title';
import { TitleSize } from '../../components/constants';
import { Project } from './ProjectCard';

interface ProjectModalProps {
    project: Project;
    closeModal: () => void;
  }
export const ProjectModal = ({ project, closeModal }: ProjectModalProps) => {
  const { title, subtitle, description, skills, url, image_url } = project;
  
  return (  
    <div className="fixed left-0 top-0 z-[1001] h-screen w-screen overflow-y-auto bg-gray-700/50 p-8 backdrop-blur-sm">
      <div
        className='relative mx-auto h-[80vh] w-full overflow-y-auto rounded-lg bg-white shadow-lg dark:bg-slate-800 md:w-[50%]'
      >
        <button className="fixed right-6 top-6 p-4 z-[1002]" onClick={() => closeModal()}>
          <Icon icon="ic:round-close" className="size-10 dark:text-white"/>
        </button>
        <div className='sticky top-0 z-[1001] bg-white px-8 pt-8 dark:bg-slate-800'>
          <Title size={TitleSize.LG}>{title}</Title>
          <SubTitle>
            {subtitle}
          </SubTitle>
          <hr className="my-2"/>
        </div>

        <div className='px-8'>
          <TextSection>
            {description}
          </TextSection>
          <hr className="my-2"/>
          {
            image_url && (
              <div>
                <h2 className="font-montserrat text-xl dark:text-white">Website Link</h2>
                <a 
                  className="block justify-center overflow-hidden py-4 transition-all hover:scale-105 md:w-1/2"
                  href={url}
                  target="_blank"
                >
                  <img src={image_url} alt={title} className="rounded-t-lg object-cover shadow"/>
                  <p
                    className='cursor-pointer rounded-b-lg bg-azure-blue p-2 text-center font-montserrat text-charcoal shadow'
                  >
                click to visit {title}
                  </p>
                </a>
                <hr className="my-2"/>
              </div>
            )
          }
          <div className="">
            <h2 className="font-montserrat text-xl dark:text-white">Skills Required</h2>
            {skills?.map((skill) => {
              return (
                <div key={skill.title} className="mx-auto my-2 flex gap-2">
                  <div>
                    <Icon icon={skill.icon} className="size-20 rounded bg-white p-1 shadow"/>
                  </div>
                  <div>
                    <p className="my-auto font-montserrat text-xl dark:text-white ">{skill.title}</p>
                    <p className="my-auto font-montserrat text-sm dark:text-slate-300 ">{skill.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};