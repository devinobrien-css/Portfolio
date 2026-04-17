import { Icon } from '@iconify/react';
import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { useTLDR } from '../util/context/TLDRContext';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  technologies: Array<{
    name: string;
    icon: string;
  }>;
  highlight: string;
}

const services: Service[] = [
  {
    id: 'web-development',
    title: 'Web Application Development',
    description:
      'Custom web applications built with modern frameworks and best practices for performance, scalability, and user experience.',
    icon: 'ph:browser',
    features: [
      'Responsive design for all devices',
      'Progressive Web App (PWA) capabilities',
      'SEO optimization',
      'Performance optimization',
      'Cross-browser compatibility',
      'Accessibility compliance',
    ],
    technologies: [
      { name: 'React', icon: 'logos:react' },
      { name: 'TypeScript', icon: 'logos:typescript-icon' },
      { name: 'Next.js', icon: 'logos:nextjs-icon' },
      { name: 'Tailwind', icon: 'logos:tailwindcss-icon' },
    ],
    highlight: 'Built for WBD, Maro, CDPHP',
  },
  {
    id: 'api-development',
    title: 'API & Backend Development',
    description:
      'Robust backend systems and APIs that power your applications with secure, scalable, and efficient server-side solutions.',
    icon: 'ph:gear',
    features: [
      'RESTful API design',
      'GraphQL implementation',
      'Database design & optimization',
      'Authentication & authorization',
      'Third-party integrations',
      'Microservices architecture',
    ],
    technologies: [
      { name: 'Node.js', icon: 'logos:nodejs-icon' },
      { name: 'Python', icon: 'logos:python' },
      { name: 'PostgreSQL', icon: 'logos:postgresql' },
      { name: 'AWS', icon: 'logos:aws' },
    ],
    highlight: '60% faster deployments achieved',
  },
  {
    id: 'cloud-infrastructure',
    title: 'Cloud Infrastructure & DevOps',
    description:
      'Scalable cloud infrastructure setup with automated deployment pipelines and monitoring for reliable operations.',
    icon: 'ph:cloud',
    features: [
      'AWS/GCP/Azure setup',
      'Containerization with Docker',
      'Kubernetes orchestration',
      'CI/CD pipeline setup',
      'Monitoring & logging',
      'Infrastructure as Code (Terraform)',
    ],
    technologies: [
      { name: 'AWS', icon: 'logos:aws' },
      { name: 'Docker', icon: 'logos:docker-icon' },
      { name: 'Kubernetes', icon: 'logos:kubernetes' },
      { name: 'Terraform', icon: 'logos:terraform-icon' },
    ],
    highlight: '70% infrastructure cost reduction',
  },
  {
    id: 'consultation',
    title: 'Technical Consultation & Code Review',
    description:
      'Expert guidance on architecture decisions, code quality improvement, and technical strategy for your development projects.',
    icon: 'ph:lightbulb',
    features: [
      'Architecture review',
      'Code quality assessment',
      'Performance optimization',
      'Security audit',
      'Technology recommendations',
      'Team mentoring',
    ],
    technologies: [
      { name: 'Various', icon: 'ph:code' },
      { name: 'Best Practices', icon: 'ph:check-circle' },
      { name: 'Security', icon: 'ph:shield-check' },
      { name: 'Performance', icon: 'ph:lightning' },
    ],
    highlight: 'HIPAA/HITECH compliant systems',
  },
];

export const ModernServices = () => {
  const { isTLDRMode } = useTLDR();
  const [activeService, setActiveService] = useState(services[0].id);
  const currentService =
    services.find((s) => s.id === activeService) || services[0];

  return (
    <section className='bg-neutral-50 py-20 dark:bg-neutral-900'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center'>
          <div className='mb-4 inline-flex items-center rounded-full bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300'>
            <Icon icon='ph:wrench' className='mr-2 size-4' />
            Expertise
          </div>
          <h2 className='mb-4 text-4xl font-bold text-neutral-900 dark:text-white sm:text-5xl'>
            What I{' '}
            <span className='text-blue-600 dark:text-blue-500'>Build</span>
          </h2>
          <p className='mx-auto max-w-2xl text-xl text-neutral-600 dark:text-neutral-400'>
            From concept to deployment, I provide end-to-end development across
            the full stack.
          </p>
        </div>

        {/* Services Grid */}
        {isTLDRMode ? (
          // TLDR Mode - Quick Service Overview
          <div className='mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {services.map((service) => (
              <div
                key={service.id}
                className='rounded-xl border border-neutral-200 bg-white p-6 transition-all hover:shadow-lg dark:border-neutral-700 dark:bg-neutral-800'
              >
                <Icon
                  icon={service.icon}
                  className='mb-4 size-8 text-neutral-700 dark:text-neutral-300'
                />
                <h3 className='mb-2 text-lg font-semibold text-neutral-900 dark:text-white'>
                  {service.title}
                </h3>
                <div className='text-sm font-medium text-blue-600 dark:text-blue-400'>
                  {service.highlight}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className='mt-16 lg:grid lg:grid-cols-3 lg:gap-8'>
            {/* Service Tabs */}
            <div className='lg:col-span-1'>
              <div className='space-y-2'>
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveService(service.id)}
                    className={`w-full rounded-lg p-4 text-left transition-all ${
                      activeService === service.id
                        ? 'bg-neutral-900 text-white shadow-lg dark:bg-white dark:text-neutral-900'
                        : 'bg-white text-neutral-700 hover:bg-neutral-50 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700'
                    }`}
                  >
                    <div className='flex items-center gap-3'>
                      <Icon
                        icon={service.icon}
                        className={`size-6 ${
                          activeService === service.id
                            ? 'text-white dark:text-neutral-900'
                            : 'text-neutral-600 dark:text-neutral-400'
                        }`}
                      />
                      <div>
                        <h3 className='font-semibold'>{service.title}</h3>
                        <p
                          className={`text-sm ${
                            activeService === service.id
                              ? 'text-neutral-300 dark:text-neutral-500'
                              : 'text-neutral-500'
                          }`}
                        >
                          {service.highlight}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Service Details */}
            <div className='mt-8 lg:col-span-2 lg:mt-0'>
              <div className='rounded-2xl bg-white p-8 shadow-sm dark:bg-neutral-800'>
                <div className='mb-6 flex items-center gap-4'>
                  <div className='flex size-16 items-center justify-center rounded-2xl bg-neutral-100 dark:bg-neutral-700'>
                    <Icon
                      icon={currentService.icon}
                      className='size-8 text-neutral-700 dark:text-neutral-300'
                    />
                  </div>
                  <div>
                    <h3 className='text-2xl font-bold text-neutral-900 dark:text-white'>
                      {currentService.title}
                    </h3>
                    <div className='flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400'>
                      <span className='flex items-center gap-1'>
                        <Icon icon='ph:star' className='size-4' />
                        {currentService.highlight}
                      </span>
                    </div>
                  </div>
                </div>

                <p className='mb-8 text-neutral-600 dark:text-neutral-400'>
                  {currentService.description}
                </p>

                {/* Features */}
                <div className='mb-8'>
                  <h4 className='mb-4 text-lg font-semibold text-neutral-900 dark:text-white'></h4>
                  <div className='grid gap-3 sm:grid-cols-2'>
                    {currentService.features.map((feature, index) => (
                      <div key={index} className='flex items-center gap-3'>
                        <Icon
                          icon='ph:check-circle'
                          className='size-5 text-green-500'
                        />
                        <span className='text-neutral-700 dark:text-neutral-300'>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className='mb-8'>
                  <h4 className='mb-4 text-lg font-semibold text-neutral-900 dark:text-white'>
                    Technologies Used
                  </h4>
                  <div className='flex flex-wrap gap-4'>
                    {currentService.technologies.map((tech, index) => (
                      <div
                        key={index}
                        className='flex items-center gap-2 rounded-lg bg-neutral-100 px-3 py-2 dark:bg-neutral-700'
                      >
                        {tech.icon.startsWith('ph:') ? (
                          <Icon
                            icon={tech.icon}
                            className='size-5 text-neutral-600 dark:text-neutral-400'
                          />
                        ) : (
                          <Icon icon={tech.icon} className='size-5' />
                        )}
                        <span className='text-sm font-medium text-neutral-700 dark:text-neutral-300'>
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className='flex flex-col gap-4 sm:flex-row'>
                  <ScrollLink
                    to='contact'
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className='flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-neutral-900 px-6 py-3 font-semibold text-white transition-all hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100'
                  >
                    <Icon icon='ph:chat-circle' className='size-5' />
                    Get in Touch
                  </ScrollLink>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
