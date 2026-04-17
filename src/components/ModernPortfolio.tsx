import { Icon } from '@iconify/react';
import { useState } from 'react';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  technologies: string[];
  category: string;
  featured: boolean;
  metrics?: {
    label: string;
    value: string;
  }[];
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Maro for Schools',
    description:
      'Full-stack education technology platform serving K-12 mental health screening across multiple school districts.',
    longDescription:
      'Founded and engineered a Node.js/TypeScript API, two React/TypeScript frontends, and AWS infrastructure (EC2, RDS, Lambda, Cognito) with Terraform IaC and CI/CD automation.',
    image: 'https://access-portfolio-images.s3.amazonaws.com/maro',
    demoUrl: 'https://meetmaro.com',
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'AWS',
      'PostgreSQL',
      'Terraform',
    ],
    category: 'Web Application',
    featured: true,
    metrics: [
      { label: 'Role', value: 'Founder' },
      { label: 'Districts', value: 'Multi' },
      { label: 'Stack', value: 'Full' },
    ],
  },
  {
    id: '2',
    title: 'WBD DEAL Platform',
    description:
      'Contract management platform for Warner Bros. Discovery streaming services enabling connectivity between video distributors and clients.',
    longDescription:
      'Built reusable Angular components, integrated Splunk monitoring with Java Spring Boot APIs, and maintained complex distributed systems in AWS.',
    image: 'https://access-portfolio-images.s3.amazonaws.com/warner',
    demoUrl: 'https://www.wbd.com/',
    technologies: [
      'Angular',
      'TypeScript',
      'Java',
      'Spring Boot',
      'AWS',
      'Kubernetes',
    ],
    category: 'Web Application',
    featured: true,
    metrics: [
      { label: 'Company', value: 'WBD' },
      { label: 'Architecture', value: 'Distributed' },
      { label: 'Monitoring', value: 'Splunk' },
    ],
  },
  {
    id: '3',
    title: 'NeuroExed Research Platform',
    description:
      'Web platform for neuroscience research lab featuring blog, podcast, and research management with 70% infrastructure cost reduction.',
    longDescription:
      "Built a complete web platform for Dr. Jim Stellar's neuroscience research lab with serverless AWS architecture.",
    image: 'https://access-portfolio-images.s3.amazonaws.com/neuroexed',
    demoUrl: 'https://neuroexed.com',
    githubUrl: 'https://github.com/devinobrien-css/neuroexed',
    technologies: ['React', 'Python', 'AWS Lambda', 'DynamoDB', 'CloudFront'],
    category: 'Web Application',
    featured: true,
    metrics: [
      { label: 'Cost Reduction', value: '70%' },
      { label: 'Sites Managed', value: '5' },
      { label: 'Architecture', value: 'Serverless' },
    ],
  },
  {
    id: '4',
    title: 'PlayARTI',
    description:
      'Kid-accessible AI art generator built for AugX using the Midjourney API with emoji-based interactions.',
    longDescription:
      'Production application that hits the Midjourney API to allow kids to create custom generated images through emoji clicks.',
    image: 'https://access-portfolio-images.s3.amazonaws.com/playarti',
    demoUrl: 'https://playarti.com',
    technologies: ['Vue', 'TypeScript', 'Quasar', 'OpenAI', 'AWS'],
    category: 'Web Application',
    featured: false,
  },
  {
    id: '5',
    title: 'Printing Management Portal',
    description:
      'Production line tracking system managing 10,000+ weekly print jobs including the 2021 NYS Ballot.',
    longDescription:
      'Full management for outgoing print jobs from cutting to shipping, reducing manufacturing floor labor by ~30%.',
    image: 'https://access-portfolio-images.s3.amazonaws.com/ccs',
    technologies: ['PHP', 'Laravel', 'Python', 'MySQL', 'Azure'],
    category: 'Web Application',
    featured: false,
    metrics: [
      { label: 'Weekly Jobs', value: '10K+' },
      { label: 'Labor Reduction', value: '30%' },
    ],
  },
  {
    id: '6',
    title: 'Diversity at College',
    description:
      'Marketing site for a collegiate publication promoting diversity in higher education.',
    longDescription:
      'Advertising site for a book written by collegiates focused on improving the student experience.',
    image: 'https://access-portfolio-images.s3.amazonaws.com/diversity',
    demoUrl: 'https://diversityatcollege.com',
    technologies: ['React', 'TypeScript', 'Tailwind', 'AWS'],
    category: 'Web Application',
    featured: false,
  },
];

const categories = ['All', 'Web Application'];

export const ModernPortfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section className='bg-white py-20 dark:bg-neutral-900'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center'>
          <div className='mb-4 inline-flex items-center rounded-full bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300'>
            <Icon icon='ph:briefcase' className='mr-2 size-4' />
            Featured Work
          </div>
          <h2 className='mb-4 text-4xl font-bold text-neutral-900 dark:text-white sm:text-5xl'>
            Recent{' '}
            <span className='text-blue-600 dark:text-blue-500'>Projects</span>
          </h2>
          <p className='mx-auto max-w-2xl text-xl text-neutral-600 dark:text-neutral-400'>
            Showcasing impactful solutions that drive real business results.
          </p>
        </div>

        {/* Featured Projects */}
        <div className='mt-16'>
          <h3 className='mb-8 text-2xl font-bold text-neutral-900 dark:text-white'>
            🌟 Featured Projects
          </h3>
          <div className='grid gap-8 lg:grid-cols-2'>
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className='group cursor-pointer overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all hover:scale-[1.02] hover:shadow-lg dark:border-neutral-700 dark:bg-neutral-800'
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image */}
                <div className='relative h-64 overflow-hidden'>
                  <img
                    src={project.image}
                    alt={project.title}
                    className='h-full w-full object-cover transition-transform group-hover:scale-110'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent'></div>
                  <div className='absolute bottom-4 left-4 right-4'>
                    <div className='flex flex-wrap gap-2'>
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className='rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm'
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className='rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm'>
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className='p-6'>
                  <h4 className='mb-2 text-xl font-bold text-neutral-900 dark:text-white'>
                    {project.title}
                  </h4>
                  <p className='mb-4 text-neutral-600 dark:text-neutral-400'>
                    {project.description}
                  </p>

                  {/* Metrics */}
                  {project.metrics && (
                    <div className='mb-4 grid grid-cols-3 gap-4'>
                      {project.metrics.map((metric, index) => (
                        <div key={index} className='text-center'>
                          <div className='text-lg font-bold text-blue-600 dark:text-blue-500'>
                            {metric.value}
                          </div>
                          <div className='text-xs text-neutral-500'>
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className='flex gap-3'>
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700'
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Icon icon='ph:globe' className='size-4' />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-2 rounded-lg border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-50 dark:border-neutral-600 dark:text-neutral-300 dark:hover:bg-neutral-800'
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Icon icon='ph:github-logo' className='size-4' />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Projects */}
        <div className='mt-20'>
          <div className='mb-8 flex flex-col items-center justify-between gap-4 sm:flex-row'>
            <h3 className='text-2xl font-bold text-neutral-900 dark:text-white'>
              All Projects
            </h3>

            {/* Category Filter */}
            <div className='flex flex-wrap gap-2'>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    activeCategory === category
                      ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className='group cursor-pointer overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-neutral-700 dark:bg-neutral-800'
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className='h-48 w-full object-cover transition-transform group-hover:scale-105'
                />
                <div className='p-4'>
                  <h4 className='mb-2 font-semibold text-neutral-900 dark:text-white'>
                    {project.title}
                  </h4>
                  <p className='mb-3 text-sm text-neutral-600 dark:text-neutral-400'>
                    {project.description}
                  </p>
                  <div className='flex flex-wrap gap-1'>
                    {project.technologies.slice(0, 2).map((tech) => (
                      <span
                        key={tech}
                        className='rounded bg-neutral-100 px-2 py-1 text-xs text-neutral-700 dark:bg-neutral-700 dark:text-neutral-300'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4'>
            <div className='max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white dark:bg-neutral-900'>
              <div className='relative'>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className='h-64 w-full object-cover'
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className='absolute right-4 top-4 rounded-full bg-black/50 p-2 text-white hover:bg-black/70'
                >
                  <Icon icon='ph:x' className='size-6' />
                </button>
              </div>

              <div className='p-8'>
                <h3 className='mb-4 text-3xl font-bold text-neutral-900 dark:text-white'>
                  {selectedProject.title}
                </h3>
                <p className='mb-6 text-lg text-neutral-600 dark:text-neutral-400'>
                  {selectedProject.longDescription}
                </p>

                {selectedProject.metrics && (
                  <div className='mb-6 grid grid-cols-2 gap-4 sm:grid-cols-3'>
                    {selectedProject.metrics.map((metric, index) => (
                      <div
                        key={index}
                        className='rounded-lg bg-neutral-50 p-4 text-center dark:bg-neutral-800'
                      >
                        <div className='text-2xl font-bold text-blue-600 dark:text-blue-500'>
                          {metric.value}
                        </div>
                        <div className='text-sm text-neutral-600 dark:text-neutral-400'>
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className='mb-6'>
                  <h4 className='mb-3 font-semibold text-neutral-900 dark:text-white'>
                    Technologies Used
                  </h4>
                  <div className='flex flex-wrap gap-2'>
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className='rounded-lg bg-neutral-100 px-3 py-1 text-sm font-medium text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className='flex gap-4'>
                  {selectedProject.demoUrl && (
                    <a
                      href={selectedProject.demoUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700'
                    >
                      <Icon icon='ph:globe' className='size-5' />
                      View Live Demo
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center gap-2 rounded-lg border-2 border-neutral-300 px-6 py-3 font-medium text-neutral-700 transition-colors hover:bg-neutral-50 dark:border-neutral-600 dark:text-neutral-300 dark:hover:bg-neutral-800'
                    >
                      <Icon icon='ph:github-logo' className='size-5' />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
