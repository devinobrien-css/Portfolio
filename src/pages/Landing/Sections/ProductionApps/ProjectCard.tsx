import { SubTitle } from '../../../../components/text/SubTitle';
import { Title } from '../../../../components/text/Title';
import { SkillIconSize, TitleSize } from '../../../../data/constants';
import { useState } from 'react';
import { useGlobalContext } from '../../../../components/context/useGlobalContext';
import { ProjectModal } from './ProjectModal';
import { Card } from '../../../../components/Card';
import { TextSection } from '../../../../components/text/TextSection';
import { SkillIcon } from '../../../../components/SkillIcon';

export interface Project {
  title: string;
  subtitle: string;
  content: string;
  url?: string;
  image_url?: string;
  description?: string;
  skills?: ProjectSkill[];
}
interface ProjectSkill {
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
      <Card>
        <button
          className="size-full text-left transition-all"
          onClick={() => setIsModalOpen(!isModalOpen)}
        >
          <div className='flex h-full flex-col justify-between gap-y-2'>
            <div>
              <Title size={TitleSize.LG}>{title}</Title>
              <SubTitle>
                {subtitle}
              </SubTitle>
              {!tldr && (
                <>
                  <hr className="my-2" />
                  <TextSection>
                    {content}
                  </TextSection>
                </>
              )}
            </div>

            <div className="flex flex-wrap gap-2 border-t pt-4 md:flex-nowrap">
              {skills?.map((skill, idx) => {
                return (
                  idx < 4 &&
                  <SkillIcon key={skill.title} icon={skill.icon} skill={skill.title} size={SkillIconSize.SM} />
                );
              })}
              {
                (skills??[]).length > 4 && (
                  <div className={'relative mx-auto flex size-14 flex-col rounded bg-gray-50 p-2 shadow dark:bg-tiffany-blue'}>
                    <span className='my-auto text-center font-code'>
                      +{(skills??[]).length - 4}
                    </span>
                  </div>
                )
              }
            </div>
          </div>
        </button>
      </Card>
    </>
  );
};
