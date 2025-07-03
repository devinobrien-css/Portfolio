import { Icon } from '@iconify/react';
import { useState } from 'react';
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
  priceRange: string;
  deliveryTime: string;
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
    priceRange: '$5K - $25K',
    deliveryTime: '4-12 weeks',
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
    priceRange: '$3K - $20K',
    deliveryTime: '3-8 weeks',
  },
  {
    id: 'mobile-development',
    title: 'Mobile App Development',
    description:
      'Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.',
    icon: 'ph:device-mobile',
    features: [
      'Cross-platform development',
      'Native performance',
      'App store optimization',
      'Push notifications',
      'Offline functionality',
      'Device hardware integration',
    ],
    technologies: [
      { name: 'React Native', icon: 'logos:react' },
      { name: 'Flutter', icon: 'logos:flutter' },
      { name: 'Swift', icon: 'logos:swift' },
      { name: 'Kotlin', icon: 'logos:kotlin-icon' },
    ],
    priceRange: '$8K - $40K',
    deliveryTime: '6-16 weeks',
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
      'Auto-scaling configuration',
    ],
    technologies: [
      { name: 'AWS', icon: 'logos:aws' },
      { name: 'Docker', icon: 'logos:docker-icon' },
      { name: 'Kubernetes', icon: 'logos:kubernetes' },
      { name: 'Terraform', icon: 'logos:terraform-icon' },
    ],
    priceRange: '$2K - $15K',
    deliveryTime: '2-6 weeks',
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Solutions',
    description:
      'Complete e-commerce platforms with payment processing, inventory management, and customer experience optimization.',
    icon: 'ph:shopping-cart',
    features: [
      'Payment gateway integration',
      'Inventory management',
      'Order processing system',
      'Customer accounts',
      'Admin dashboard',
      'Analytics & reporting',
    ],
    technologies: [
      { name: 'Shopify', icon: 'logos:shopify' },
      { name: 'Stripe', icon: 'logos:stripe' },
      { name: 'WooCommerce', icon: 'logos:woocommerce' },
      { name: 'Next.js', icon: 'logos:nextjs-icon' },
    ],
    priceRange: '$10K - $50K',
    deliveryTime: '8-20 weeks',
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
    priceRange: '$150 - $300/hr',
    deliveryTime: '1-4 weeks',
  },
];

export const ModernServices = () => {
  const { isTLDRMode } = useTLDR();
  const [activeService, setActiveService] = useState(services[0].id);
  const currentService =
    services.find((s) => s.id === activeService) || services[0];

  return (
    <section className='bg-gray-50 py-20 dark:bg-gray-900'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center'>
          <div className='mb-4 inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200'>
            <Icon icon='ph:wrench' className='mr-2 size-4' />
            Services & Solutions
          </div>
          <h2 className='mb-4 text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl'>
            How I Can <span className='text-blue-600'>Help You</span>
          </h2>
          <p className='mx-auto max-w-2xl text-xl text-gray-700 dark:text-gray-300'>
            From concept to deployment, I provide end-to-end development
            services tailored to your business needs and technical requirements.
          </p>
        </div>

        {/* Services Grid */}
        {isTLDRMode ? (
          // TLDR Mode - Quick Service Overview
          <div className='mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {services.map((service) => (
              <div
                key={service.id}
                className='rounded-xl border border-gray-200 bg-white/80 p-6 backdrop-blur-sm transition-all hover:shadow-lg dark:border-gray-700 dark:bg-gray-800/80'
              >
                <Icon
                  icon={service.icon}
                  className='mb-4 size-8 text-blue-600 dark:text-blue-400'
                />
                <h3 className='mb-2 text-lg font-semibold text-gray-900 dark:text-white'>
                  {service.title}
                </h3>
                {/* <p className='mb-3 text-sm text-gray-600 dark:text-gray-300'>
                  {service.description.split('.')[0]}.
                </p> */}
                <div className='flex items-center justify-between text-sm'>
                  <span className='font-medium text-blue-600 dark:text-blue-400'>
                    {service.priceRange}
                  </span>
                  <span className='text-gray-500 dark:text-gray-400'>
                    {service.deliveryTime}
                  </span>
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
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                    }`}
                  >
                    <div className='flex items-center gap-3'>
                      <Icon
                        icon={service.icon}
                        className={`size-6 ${
                          activeService === service.id
                            ? 'text-white'
                            : 'text-blue-600'
                        }`}
                      />
                      <div>
                        <h3 className='font-semibold'>{service.title}</h3>
                        <p
                          className={`text-sm ${
                            activeService === service.id
                              ? 'text-blue-100'
                              : 'text-gray-500'
                          }`}
                        >
                          {service.priceRange} • {service.deliveryTime}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Service Details */}
            <div className='mt-8 lg:col-span-2 lg:mt-0'>
              <div className='rounded-2xl bg-white p-8 shadow-xl dark:bg-gray-800'>
                <div className='mb-6 flex items-center gap-4'>
                  <div className='flex size-16 items-center justify-center rounded-2xl bg-blue-100 dark:bg-blue-900'>
                    <Icon
                      icon={currentService.icon}
                      className='size-8 text-blue-600 dark:text-blue-400'
                    />
                  </div>
                  <div>
                    <h3 className='text-2xl font-bold text-gray-900 dark:text-white'>
                      {currentService.title}
                    </h3>
                    <div className='flex items-center gap-4 text-sm text-gray-700 dark:text-gray-400'>
                      <span className='flex items-center gap-1'>
                        <Icon icon='ph:currency-dollar' className='size-4' />
                        {currentService.priceRange}
                      </span>
                      <span className='flex items-center gap-1'>
                        <Icon icon='ph:clock' className='size-4' />
                        {currentService.deliveryTime}
                      </span>
                    </div>
                  </div>
                </div>

                <p className='mb-8 text-gray-700 dark:text-gray-300'>
                  {currentService.description}
                </p>

                {/* Features */}
                <div className='mb-8'>
                  <h4 className='mb-4 text-lg font-semibold text-gray-900 dark:text-white'>
                    What's Included
                  </h4>
                  <div className='grid gap-3 sm:grid-cols-2'>
                    {currentService.features.map((feature, index) => (
                      <div key={index} className='flex items-center gap-3'>
                        <Icon
                          icon='ph:check-circle'
                          className='size-5 text-green-500'
                        />
                        <span className='text-gray-700 dark:text-gray-300'>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className='mb-8'>
                  <h4 className='mb-4 text-lg font-semibold text-gray-900 dark:text-white'>
                    Technologies Used
                  </h4>
                  <div className='flex flex-wrap gap-4'>
                    {currentService.technologies.map((tech, index) => (
                      <div
                        key={index}
                        className='flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 dark:bg-gray-700'
                      >
                        {tech.icon.startsWith('ph:') ? (
                          <Icon
                            icon={tech.icon}
                            className='size-5 text-gray-700 dark:text-gray-400'
                          />
                        ) : (
                          <Icon icon={tech.icon} className='size-5' />
                        )}
                        <span className='text-sm font-medium text-gray-700 dark:text-gray-300'>
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className='flex flex-col gap-4 sm:flex-row'>
                  <button className='flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-all hover:bg-blue-700'>
                    <Icon icon='ph:chat-circle' className='size-5' />
                    Discuss This Service
                  </button>
                  <button className='flex items-center justify-center gap-2 rounded-lg border-2 border-gray-300 px-6 py-3 font-semibold text-gray-700 transition-all hover:border-gray-400 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:border-gray-500 dark:hover:bg-gray-700'>
                    <Icon icon='ph:file-text' className='size-5' />
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
