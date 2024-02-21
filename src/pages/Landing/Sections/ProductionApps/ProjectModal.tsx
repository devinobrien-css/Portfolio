
import { Icon } from '@iconify/react';
import { SubTitle } from '../../../../components/text/SubTitle';
import { TextSection } from '../../../../components/text/TextSection';
import { Title } from '../../../../components/text/Title';
import { TitleSize } from '../../../../data/constants';
import { Project } from './ProjectCard';

interface ProjectModalProps {
    project: Project;
    closeModal: () => void;
  }
export const ProjectModal = ({ project, closeModal }: ProjectModalProps) => {
  const { title, subtitle, description, skills, url, image_url } = project;
  
  return (  
    <div className="fixed left-0 top-0 z-[1001] h-screen w-screen overflow-y-auto bg-gray-700/50 p-4 backdrop-blur-sm md:p-8">
      <div
        className='relative mx-auto h-[80vh] w-full overflow-y-auto rounded-lg bg-white shadow-lg dark:bg-slate-800 md:w-[50%]'
      >
        <div className='sticky top-0 z-[1001] bg-white px-8 pt-8 dark:bg-slate-800'>
          <div>
            <div className='flex justify-between'>
              <Title size={TitleSize.LG} className='my-auto'>{title}</Title>
              <button className="z-[1005] my-auto w-min rounded transition-colors hover:bg-moonstone/50 md:p-4" onClick={() => closeModal()}>
                <Icon icon="ic:round-close" className="size-10 dark:text-white"/>
              </button>
            </div>
            <SubTitle>
              {subtitle}
            </SubTitle>
          </div>
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
                <Title size={TitleSize.MD}>
                  Website Link
                </Title>
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
          <div className="pb-8">
            <Title size={TitleSize.MD}>
              Skills Required
            </Title>
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