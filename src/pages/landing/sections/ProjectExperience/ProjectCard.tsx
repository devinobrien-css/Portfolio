import { SubTitle } from "../../../../components/SubTitle";
import { TextSection } from "../../../../components/TextSection";
import { Title, TitleSize } from "../../../../components/Title";

export interface ProjectCardProps {
  title: string;
  subtitle: string;
  content: string;
}
export const ProjectCard = ({ title, subtitle, content }: ProjectCardProps) => {
  return (
    <div
      className="md:w-1/3 cursor-pointer rounded p-4 bg-slate-700 bg-opacity-80 ring ring-blue-300 transition-all hover:scale-105 hover:bg-gray-700"
    >
      <Title size={TitleSize.LG}>{title}</Title>
      <SubTitle>
        {subtitle}
      </SubTitle>
      <hr className="my-2"/>
      <TextSection>
        {content}
      </TextSection>
    </div>
  )
}
