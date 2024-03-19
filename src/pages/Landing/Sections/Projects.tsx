import { ProjectCard } from '../../../components/cards/ProjectCard';
import { Title } from '../../../components/text/Title';
import { TitleSize } from '../../../data/constants';


export const Projects = () => {
  return (
    <div className='my-32 min-h-screen'>
      <p className='font-montserrat text-red-500/50'>
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
            link: 'link',
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
            link: 'link',
            tags: ['React', 'Typescript', 'Javascript', 'Tailwind', 'Netlify', 'Javascript'],
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
            title: 'Go Server Sample',
            image: 'https://access-portfolio-images.s3.amazonaws.com/go-bg.png',
            description: 'A RESTful server example using Go, built to learn best practices of the language. This project uses a PostgreSQL instance that is built locally using Docker.',
            github: 'https://github.com/devinobrien-css/go-server-sample',
            link: 'link',
            tags: ['Go', 'Rest', 'PostgreSQL', 'Docker'],

            skills: [
              {
                name: 'Go',
                icon: 'https://via.placeholder.com/150'
              }, 
              {
                name: 'PostgreSQL',
                icon: 'https://via.placeholder.com/150'
              },
              {
                name: 'Docker',
                icon: 'https://via.placeholder.com/150'
              }
            ]
          }}
        />
      </div>

      <a 
        href='/projects'
        className='mx-auto mt-12 block w-fit rounded bg-white p-2 font-montserrat text-lg text-charcoal ring-blue-300 dark:bg-gray-800 dark:text-tiffany-blue dark:active:ring-2'
      >
        See More Projects
      </a>

    </div>
  );
};