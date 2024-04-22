import { Icon } from '@iconify/react';
import { Project } from './ProjectCard';
import { TitleSize } from '../../../../data/constants';
import { Title } from '../../../../components/text/Title';
import { Modal } from '../../../../components/Modal/Modal';
import { SubTitle } from '../../../../components/text/SubTitle';
import { TextSection } from '../../../../components/text/TextSection';

interface ProjectModalProps {
  project: Project;
  modalOpen: boolean;
  setModalOpen: (flag: boolean) => void;
}
export const ProjectModal = ({
  project,
  modalOpen,
  setModalOpen,
}: ProjectModalProps) => {
  const { title, subtitle, description, skills, url, image_url } = project;

  return (
    <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
      <div className='sticky top-0 bg-white px-8 pt-8 dark:bg-slate-800'>
        <div>
          <Title size={TitleSize.LG} className='my-auto'>
            {title}
          </Title>
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
    </Modal>
  );
};
