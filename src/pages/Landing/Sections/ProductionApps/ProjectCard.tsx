import { SubTitle } from "../../../../components/text/SubTitle";
import { Title } from "../../../../components/text/Title";
import { TitleSize } from "../../../../data/constants";
import { useState } from "react";
import { useGlobalContext } from "../../../../util/context/useGlobalContext";
import { ProjectModal } from "./ProjectModal";
import { Card } from "../../../../components/cards/Card";
import { TextSection } from "../../../../components/text/TextSection";

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
      <Card className="ring-blue-300 transition-all hover:scale-105 active:ring-2 dark:!bg-gray-800">
        <button
          className="size-full text-left transition-all"
          onClick={() => setIsModalOpen(!isModalOpen)}
        >
          <div className="flex h-full flex-col justify-between gap-y-2">
            <div>
              <Title size={TitleSize.LG}>{title}</Title>
              <SubTitle>{subtitle}</SubTitle>
              {!tldr && (
                <>
                  <hr className="my-2" />
                  <TextSection>{content}</TextSection>
                </>
              )}
            </div>

            <div className="flex flex-wrap gap-2 border-t pt-4 md:flex-nowrap">
              {skills?.map((skill, idx) => {
                return (
                  idx < 4 && (
                    <span
                      key={skill.title}
                      className="rounded-lg bg-slate-100 px-2 py-1 font-lato text-xs text-blue-500 dark:bg-slate-700 dark:text-red-500"
                    >
                      {skill.title}
                    </span>
                  )
                );
              })}
            </div>
          </div>
        </button>
      </Card>
    </>
  );
};
