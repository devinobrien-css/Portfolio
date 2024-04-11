import { Icon } from '@iconify/react';
import { GithubProject } from '../../types/Project';
import cx from 'classnames';
import { Pill } from '../Pill';

interface ProjectCardProps {
  project: GithubProject;
  className?: string;
}
export const ProjectCard = ({ project, className }: ProjectCardProps) => {
  const { title, description, image, github, demo, skills } = project;

  return (
    <button
      className={cx(
        'min-h-full w-full overflow-clip rounded-2xl bg-white shadow transition-all dark:bg-gray-800 sm:max-w-[300px] md:w-[30%]',
        className,
        {
          'ring-blue-300 hover:scale-105 active:ring-2': project.link,
        },
      )}
      onClick={() => {
        if (project.link) {
          window.open(
            `/projects?search=${project.link}`,
            '_self',
            'noopener noreferrer',
          );
        }
      }}
    >
      <img
        src={image}
        alt={title}
        className="h-32 w-full object-cover shadow sm:h-40"
      />

      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-2 p-2 text-left">
          <h3 className="font-montserrat text-xl dark:text-tiffany-blue">
            {title}
          </h3>
          <p className="min-h-24 font-lato text-sm dark:text-moonstone">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {skills?.map((skill) => <Pill key={skill.name}>{skill.name}</Pill>)}
          </div>
        </div>
        <div className="mb-2 mt-4 flex justify-between p-2">
          {
            // if demo is not empty, render the demo link
            demo && (
              <a
                href={demo}
                target="_blank"
                rel="noreferrer noopener"
                className="flex w-fit gap-1 font-code  text-sm underline dark:text-moonstone"
              >
                <Icon icon="ph:link" className="m-auto size-4" />
                view site
              </a>
            )
          }
          {
            // if github is not empty, render the github link
            github && (
              <a
                href={github}
                target="_blank"
                rel="noreferrer noopener"
                className="flex w-fit gap-1 font-code text-sm underline dark:text-moonstone"
              >
                <Icon icon="akar-icons:github-fill" className="m-auto size-4" />
                view code
              </a>
            )
          }
        </div>
      </div>
    </button>
  );
};
