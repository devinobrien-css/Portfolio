import { Icon } from '@iconify/react';
import { SubTitle } from '../../components/SubTitle';
import { TextSection } from '../../components/TextSection';
import { Title } from '../../components/Title';
import { TitleSize } from '../../components/constants';


interface ProjectSkillProps {
  title: string;
  icon: string;
}

export interface ProjectCardProps {
  title: string;
  subtitle: string;
  content: string;
  skills?: ProjectSkillProps[];
}
export const ProjectCard = ({ title, subtitle, content, skills }: ProjectCardProps) => {
  return (
    <div
      className="w-full cursor-pointer rounded bg-slate-700/80 p-4 ring ring-blue-300 transition-all hover:scale-105 hover:bg-gray-700 md:w-[46%]"
    >
      <Title size={TitleSize.LG}>{title}</Title>
      <SubTitle>
        {subtitle}
      </SubTitle>
      <hr className="my-2"/>
      <TextSection>
        {content}
      </TextSection>
      <hr className="my-2"/>
      <div className="flex flex-wrap gap-x-1 py-1 ">
        {skills?.map((skill) => {
          return (
            <div key={skill.title} className="mx-auto flex gap-2">
              <Icon icon={skill.icon} className="size-12 rounded bg-white p-1 shadow"/>
            </div>
          );
        })}
      </div>
    </div>
  );
};
