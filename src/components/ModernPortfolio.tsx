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
    title: 'NeuroExed Research Platform',
    description:
      'A comprehensive research platform for neuroscience studies with blog, podcast, and research management.',
    longDescription:
      "Built a complete web platform for Dr. Jim Stellar's neuroscience research lab. Features include research publication management, blog system, podcast hosting, and interactive data visualization.",
    image: 'https://access-portfolio-images.s3.amazonaws.com/neuroexed-bg.png',
    demoUrl: 'https://neuroexed.com',
    githubUrl: 'https://github.com/devinobrien-css/neuroexed',
    technologies: ['React', 'TypeScript', 'Python', 'AWS', 'DynamoDB'],
    category: 'Web Application',
    featured: true,
    metrics: [
      { label: 'Monthly Users', value: '2.5K+' },
      { label: 'Research Papers', value: '150+' },
      { label: 'Performance Score', value: '95/100' },
    ],
  },
  {
    id: '2',
    title: 'E-commerce Management System',
    description:
      'Full-stack e-commerce solution with inventory management, payment processing, and analytics.',
    longDescription:
      'Comprehensive e-commerce platform built from scratch with modern payment processing, real-time inventory management, and detailed analytics dashboard.',
    image:
      'https://access-portfolio-images.s3.amazonaws.com/ecommerce-project.png',
    demoUrl: 'https://demo-ecommerce.devinobrien.dev',
    technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis', 'Docker'],
    category: 'E-commerce',
    featured: true,
    metrics: [
      { label: 'Revenue Increase', value: '40%' },
      { label: 'Load Time', value: '<2s' },
      { label: 'Uptime', value: '99.9%' },
    ],
  },
  {
    id: '3',
    title: 'Mobile Health Tracker',
    description:
      'Cross-platform mobile app for health monitoring with real-time sync and analytics.',
    longDescription:
      'React Native app for health tracking with biometric integration, cloud sync, and AI-powered insights.',
    image: 'https://access-portfolio-images.s3.amazonaws.com/health-app.png',
    githubUrl: 'https://github.com/devinobrien-css/health-tracker',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'ML'],
    category: 'Mobile App',
    featured: false,
    metrics: [
      { label: 'App Store Rating', value: '4.8/5' },
      { label: 'Downloads', value: '10K+' },
    ],
  },
];

const categories = ['All', 'Web Application', 'E-commerce', 'Mobile App'];

export const ModernPortfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section className='bg-white py-20 dark:bg-gray-800'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center'>
          <div className='mb-4 inline-flex items-center rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-800 dark:bg-purple-900 dark:text-purple-200'>
            <Icon icon='ph:briefcase' className='mr-2 size-4' />
            Featured Work
          </div>
          <h2 className='mb-4 text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl'>
            Recent <span className='text-purple-600'>Projects</span>
          </h2>
          <p className='mx-auto max-w-2xl text-xl text-gray-700 dark:text-gray-300'>
            Showcasing impactful solutions that drive real business results.
          </p>
        </div>

        {/* Featured Projects */}
        <div className='mt-16'>
          <h3 className='mb-8 text-2xl font-bold text-gray-900 dark:text-white'>
            🌟 Featured Projects
          </h3>
          <div className='grid gap-8 lg:grid-cols-2'>
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className='group cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-lg transition-all hover:scale-[1.02] hover:shadow-2xl dark:from-gray-800 dark:to-gray-900'
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
                  <h4 className='mb-2 text-xl font-bold text-gray-900 dark:text-white'>
                    {project.title}
                  </h4>
                  <p className='mb-4 text-gray-700 dark:text-gray-300'>
                    {project.description}
                  </p>

                  {/* Metrics */}
                  {project.metrics && (
                    <div className='mb-4 grid grid-cols-3 gap-4'>
                      {project.metrics.map((metric, index) => (
                        <div key={index} className='text-center'>
                          <div className='text-lg font-bold text-purple-600'>
                            {metric.value}
                          </div>
                          <div className='text-xs text-gray-500'>
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
                        className='flex items-center gap-2 rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-purple-700'
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
                        className='flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800'
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
            <h3 className='text-2xl font-bold text-gray-900 dark:text-white'>
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
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
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
                className='group cursor-pointer overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg dark:bg-gray-800'
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className='h-48 w-full object-cover transition-transform group-hover:scale-105'
                />
                <div className='p-4'>
                  <h4 className='mb-2 font-semibold text-gray-900 dark:text-white'>
                    {project.title}
                  </h4>
                  <p className='mb-3 text-sm text-gray-700 dark:text-gray-300'>
                    {project.description}
                  </p>
                  <div className='flex flex-wrap gap-1'>
                    {project.technologies.slice(0, 2).map((tech) => (
                      <span
                        key={tech}
                        className='rounded bg-gray-100 px-2 py-1 text-xs text-gray-700 dark:bg-gray-700 dark:text-gray-300'
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
            <div className='max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white dark:bg-gray-800'>
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
                <h3 className='mb-4 text-3xl font-bold text-gray-900 dark:text-white'>
                  {selectedProject.title}
                </h3>
                <p className='mb-6 text-lg text-gray-700 dark:text-gray-300'>
                  {selectedProject.longDescription}
                </p>

                {selectedProject.metrics && (
                  <div className='mb-6 grid grid-cols-2 gap-4 sm:grid-cols-3'>
                    {selectedProject.metrics.map((metric, index) => (
                      <div
                        key={index}
                        className='rounded-lg bg-gray-50 p-4 text-center dark:bg-gray-700'
                      >
                        <div className='text-2xl font-bold text-purple-600'>
                          {metric.value}
                        </div>
                        <div className='text-sm text-gray-700 dark:text-gray-300'>
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className='mb-6'>
                  <h4 className='mb-3 font-semibold text-gray-900 dark:text-white'>
                    Technologies Used
                  </h4>
                  <div className='flex flex-wrap gap-2'>
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className='rounded-lg bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800 dark:bg-purple-900 dark:text-purple-200'
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
                      className='flex items-center gap-2 rounded-lg bg-purple-600 px-6 py-3 font-medium text-white transition-colors hover:bg-purple-700'
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
                      className='flex items-center gap-2 rounded-lg border-2 border-gray-300 px-6 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800'
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
