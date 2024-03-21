import { Link } from 'react-router-dom';
import { ProjectCard } from '../../../components/cards/ProjectCard';
import { Title } from '../../../components/text/Title';
import { TitleSize } from '../../../data/constants';
import { projects } from '../../../data/github_projects';


export const Projects = () => {
  return (
    <div className='my-32 min-h-screen'>
      <p className='font-montserrat text-blue-300 dark:text-red-500/50'>
          projects and applications
      </p>
      <Title size={TitleSize.XL} className='mb-4 md:mb-12'>
            What I've Built
      </Title>

      <div className='flex flex-wrap justify-center gap-8'>
        <ProjectCard
          project={{
            title: 'Neuroexed',
            image: 'https://access-portfolio-images.s3.amazonaws.com/neuroexed-bg.png',
            description: 'An organizational website for a neuroscience lab. Built with React and Typescript, utilizes a Python API and other AWS services.',
            link: 'neuroexed',
            github: 'https://github.com/devinobrien-css/neuroexed',
            demo:'https://neuroexed.com',
            tags: ['React', 'Typescript', 'Tailwind', 'DynamoDB', 'AWS', 'Netlify', 'Javascript'],
            skills: [
              {
                name: 'React',
                icon: 'https://via.placeholder.com/150'
              }, 
              {
                name: 'TypeScript',
                icon: 'https://via.placeholder.com/150'
              },
              {
                name: 'TailwindCSS',
                icon: 'https://via.placeholder.com/150'
              }
            ]
          }}
        />

        <ProjectCard
          project={{
            title: 'Diversity At College',
            image: 'https://access-portfolio-images.s3.amazonaws.com/college-bg.jpeg',
            description: 'A marketing website for a group of researchers and their publication. Built with React, Typescript and Tailwind. CICD is managed through Netlify',  
            github: 'https://github.com/devinobrien-css/diversity-at-college',
            demo: 'https://diversityatcollege.com',
            tags: ['React', 'Typescript', 'Javascript', 'Tailwind', 'Netlify', 'Javascript'],
            link: 'diversity',
            skills: [
              {
                name: 'React',
                icon: 'https://via.placeholder.com/150'
              }, 
              {
                name: 'TypeScript',
                icon: 'https://via.placeholder.com/150'
              },
              {
                name: 'TailwindCSS',
                icon: 'https://via.placeholder.com/150'
              }
            ]
          }}
        />

        <ProjectCard
          project={{...projects[2], link: 'svelte'}}
        />
      </div>

      <Link
        to='/projects'
        className='mx-auto mt-12 block w-fit rounded bg-white p-2 font-montserrat text-lg text-charcoal ring-blue-300 hover:bg-gray-100 active:ring-2 dark:bg-gray-800 dark:text-tiffany-blue'
      >
        See More Projects
      </Link>
    </div>
  );
};