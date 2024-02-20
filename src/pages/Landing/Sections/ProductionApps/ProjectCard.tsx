import { Icon } from '@iconify/react';
import { SubTitle } from '../../../../components/text/SubTitle';
import { Title } from '../../../../components/text/Title';
import { TitleSize } from '../../../../data/constants';
import { useState } from 'react';
import { useGlobalContext } from '../../../../components/context/useGlobalContext';
import { ProjectModal } from './ProjectModal';

export interface Project {
  title: string;
  subtitle: string;
  content: string;
  url?: string;
  image_url?: string;
  description?: string;
  skills?: ProjectSkillProps[];
}
interface ProjectSkillProps {
  title: string;
  icon: string;
  description?: string;
}

interface ProjectCardProps {
  project: Project;
}
export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { title, subtitle, content, skills } = project;
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { tldr } = useGlobalContext();

  return (
    <>
      {isModalOpen && (
        <ProjectModal
          project={project}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
      <button
        className="z-[500] w-full cursor-pointer rounded bg-white p-4 text-left shadow transition-all hover:bg-gray-100 dark:bg-slate-700/80 dark:hover:bg-gray-700 md:w-[48%]"
        onClick={() => setIsModalOpen(!isModalOpen)}
      >
        <Title size={TitleSize.LG}>{title}</Title>
        <SubTitle>
          {subtitle}
        </SubTitle>
        <hr className="my-2"/>
        {!tldr && (
          <p className="font-montserrat text-gray-600 dark:text-white">
            {content}
          </p>
        )}
        <hr className="my-2"/>
        <div className="flex flex-wrap gap-2 overflow-x-auto py-1 md:flex-nowrap">
          {skills?.map((skill) => {
            return (
              <div key={skill.title} className="mx-auto flex gap-2">
                <Icon icon={skill.icon} className="size-12 rounded bg-white p-1 shadow"/>
              </div>
            );
          })}
        </div>
      </button>
    </>
  );
};
