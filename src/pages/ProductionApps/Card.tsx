import { Icon } from '@iconify/react';
import { SubTitle } from '../../components/SubTitle';
import { TextSection } from '../../components/TextSection';
import { Title } from '../../components/Title';
import { TitleSize } from '../../components/constants';
import { useState } from 'react';
import { useGlobalContext } from '../../components/context/useGlobalContext';

interface ProjectSkillProps {
  title: string;
  icon: string;
  description?: string;
}

export interface ProjectCardProps {
  title: string;
  subtitle: string;
  content: string;
  description?: string;
  skills?: ProjectSkillProps[];
}


export const ProjectModal = ({ title, subtitle, skills, description, closeModal }: ProjectCardProps & {closeModal: () => void}) => {
  return (  
    <div className="fixed left-0 top-0 z-[100] h-screen w-screen overflow-y-auto bg-gray-700 p-8">
      <button className="absolute right-0 top-0 p-4" onClick={() => closeModal()}>
        <Icon icon="ic:round-close" className="size-8 text-white"/>
      </button>
      <Title size={TitleSize.LG}>{title}</Title>
      <SubTitle>
        {subtitle}
      </SubTitle>
      <hr className="my-2"/>
      <TextSection>
        {description}
      </TextSection>
      <hr className="my-2"/>
      <div className="">
        {skills?.map((skill) => {
          return (
            <div key={skill.title} className="mx-auto my-2 flex gap-2">
              <div>
                <Icon icon={skill.icon} className="size-20 rounded bg-white p-1 shadow"/>
              </div>
              <div>
                <p className="my-auto font-montserrat text-xl text-white ">{skill.title}</p>
                <p className="my-auto font-montserrat text-sm text-slate-300 ">{skill.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};


export const ProjectCard = ({ title, subtitle, content, skills, description }: ProjectCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { tldr } = useGlobalContext();

  return (
    <>
      {isModalOpen && <ProjectModal 
        title={title} subtitle={subtitle} content={content} skills={skills}      
        description={description}
        closeModal={() => setIsModalOpen(false)}
      />}
      <button
        className="w-full cursor-pointer rounded bg-slate-700/80 p-4 text-left transition-all  hover:bg-gray-700 md:w-[48%]"
        onClick={() => setIsModalOpen(!isModalOpen)}
      >
        <Title size={TitleSize.LG}>{title}</Title>
        <SubTitle>
          {subtitle}
        </SubTitle>
        <hr className="my-2"/>
        {!tldr && (
          <p className="text-white">
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
