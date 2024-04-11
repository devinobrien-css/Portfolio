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
    <>
      <button
        className='fixed left-0 top-0 z-[1001] h-full w-screen bg-gray-700/50 p-4 backdrop-blur-sm'
        onClick={() => closeModal()}
      ></button>
      <div className='fixed  left-1/2 top-1/2 z-[1002] mx-auto h-fit max-h-screen w-full -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-lg bg-white shadow-lg dark:bg-slate-800 md:w-1/2'>
        <div className='sticky top-0 bg-white px-8 pt-8 dark:bg-slate-800'>
          <div>
            <div className='flex justify-between'>
              <Title size={TitleSize.LG} className='my-auto'>
                {title}
              </Title>
              <button
                className='z-[1005] my-auto w-min rounded transition-colors hover:bg-moonstone/50 md:p-4'
                onClick={() => closeModal()}
              >
                <Icon
                  icon='ic:round-close'
                  className='size-10 dark:text-white'
                />
              </button>
            </div>
            <SubTitle>{subtitle}</SubTitle>
          </div>
          <hr className='my-2' />
        </div>

        <div className='px-8'>
          <TextSection>{description}</TextSection>
          <hr className='my-2' />
          {image_url && (
            <div>
              <a
                className='block justify-center overflow-hidden py-4 transition-all hover:scale-105 md:w-1/2'
                href={url}
                target='_blank'
              >
                <img
                  src={image_url}
                  alt={title}
                  className='rounded-t-lg object-cover shadow'
                />
                <p className='cursor-pointer rounded-b-lg bg-azure-blue p-2 text-center font-montserrat text-charcoal shadow'>
                  click to visit {title}
                </p>
              </a>
              <hr className='my-2' />
            </div>
          )}
          <div className='pb-8'>
            <Title size={TitleSize.MD}>Skills Required</Title>
            <div className='flex flex-wrap justify-evenly gap-2 py-2'>
              {skills?.map((skill) => {
                return (
                  <span
                    key={skill.title}
                    className='flex w-fit flex-col rounded-lg  px-2 py-1 font-lato text-xs dark:text-moonstone'
                  >
                    <Icon icon={skill.icon} className='mx-auto size-6' />
                    {skill.title}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
