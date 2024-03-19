import { Icon } from '@iconify/react';
import { GithubProject } from '../../types/Project';
import cx from 'classnames';

interface ProjectCardProps {
    project: GithubProject;
    className?: string;
}
export const ProjectCard = ({
  project,
  className
}: ProjectCardProps) => {
  const { title, description, image, github, demo, skills } = project;

  return (
    <div
      className={cx('md:w-[30%] sm:max-w-[300px] w-full overflow-clip shadow rounded-2xl dark:bg-gray-800 bg-white min-h-full transition-all', className, {
        'active:ring-2 ring-blue-300 hover:scale-105': project.link,
      })}>
      <img 
        src={image} 
        alt={title} 
        className='h-32 w-full object-cover sm:h-40'
      />

      <div className='flex flex-col justify-between'>
        <div className='flex flex-col gap-2 p-2'>
          <h3 className='font-montserrat text-xl dark:text-tiffany-blue'>{title}</h3>
          <p className='min-h-24 font-lato text-sm dark:text-moonstone' >{description}</p>
          <div className='flex gap-2'>
            {
              skills?.map((skill) => (
                <span 
                  key={skill.name} 
                  className='rounded-lg bg-slate-200 px-2 py-1 font-lato text-xs dark:bg-slate-700 dark:text-moonstone'
                >
                  {skill.name}
                </span>
              ))
            }
          </div>
        </div>
        <div className='mb-2 mt-4 flex justify-between p-2'>
          {
            // if demo is not empty, render the demo link
            demo && (
              <a 
                href={demo} 
                target='_blank'
                rel='noreferrer noopener'
                className='flex w-fit gap-1 font-code  text-sm underline dark:text-moonstone'
              >
                <Icon icon='ph:link' className='m-auto size-4'/>
                view site
              </a>
            )
          }
          {
            // if github is not empty, render the github link
            github && (
              <a 
                href={github} 
                target='_blank'
                rel='noreferrer noopener'
                className='flex w-fit gap-1 font-code text-sm underline dark:text-moonstone'
              >
                <Icon icon='akar-icons:github-fill' className='m-auto size-4'/>
                view code
              </a>
            )
          }
        </div>
      </div>
    </div>

  );
};