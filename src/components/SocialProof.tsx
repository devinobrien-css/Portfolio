import { Icon } from '@iconify/react';
import { useState } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
  projectType: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CTO',
    company: 'TechStart Inc.',
    content:
      'Devin delivered an exceptional web application that exceeded our expectations. His technical expertise and attention to detail are outstanding. The project was completed on time and within budget.',
    avatar:
      'https://images.unsplash.com/photo-1494790108755-2616b612b789?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    projectType: 'Web Application',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Founder',
    company: 'Digital Solutions',
    content:
      'Working with Devin was a game-changer for our business. He transformed our outdated system into a modern, scalable platform. His communication throughout the project was excellent.',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    projectType: 'System Modernization',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Product Manager',
    company: 'InnovateCorp',
    content:
      "Devin's full-stack skills are impressive. He built both our frontend and backend systems seamlessly. The API performance improvements he implemented increased our app speed by 60%.",
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    projectType: 'API Development',
  },
  {
    id: 4,
    name: 'David Park',
    role: 'CEO',
    company: 'NextGen Labs',
    content:
      'Exceptional work on our e-commerce platform. Devin integrated complex payment systems and inventory management flawlessly. Revenue increased by 40% after launch.',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    projectType: 'E-commerce Development',
  },
];

const achievements = [
  {
    icon: 'ph:trophy',
    title: 'Award-Winning Projects',
    description:
      'Multiple projects recognized for innovation and technical excellence',
  },
  {
    icon: 'ph:users-three',
    title: '50+ Happy Clients',
    description:
      'Successfully delivered projects for startups to enterprise companies',
  },
  {
    icon: 'ph:rocket-launch',
    title: 'Fast Delivery',
    description: 'Average project completion 20% faster than industry standard',
  },
  {
    icon: 'ph:shield-check',
    title: '100% Secure',
    description:
      'All projects built with security-first approach and best practices',
  },
];

export const SocialProof = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section className='bg-gradient-to-b from-gray-50 to-white py-20 dark:from-gray-800 dark:to-gray-900'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center'>
          <div className='mb-4 inline-flex items-center rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800 dark:bg-green-900 dark:text-green-200'>
            <Icon icon='ph:star' className='mr-2 size-4' />
            Client Success Stories
          </div>
          <h2 className='mb-4 text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl'>
            Trusted by <span className='text-blue-600'>50+ Companies</span>
          </h2>
          <p className='mx-auto max-w-2xl text-xl text-gray-700 dark:text-gray-300'>
            Don't just take my word for it. Here's what clients say about
            working with me.
          </p>
        </div>

        {/* Testimonials */}
        <div className='mt-16'>
          <div className='relative'>
            {/* Main Testimonial */}
            <div className='mx-auto max-w-4xl'>
              <div className='rounded-2xl bg-white p-8 shadow-xl dark:bg-gray-800 sm:p-12'>
                <div className='mb-6 flex items-center justify-between'>
                  <div className='flex items-center gap-4'>
                    <img
                      src={testimonials[activeTestimonial].avatar}
                      alt={testimonials[activeTestimonial].name}
                      className='size-16 rounded-full object-cover'
                    />
                    <div>
                      <h4 className='text-lg font-semibold text-gray-900 dark:text-white'>
                        {testimonials[activeTestimonial].name}
                      </h4>
                      <p className='text-sm text-gray-700 dark:text-gray-400'>
                        {testimonials[activeTestimonial].role} at{' '}
                        {testimonials[activeTestimonial].company}
                      </p>
                    </div>
                  </div>
                  <div className='flex items-center gap-1'>
                    {[...Array(testimonials[activeTestimonial].rating)].map(
                      (_, i) => (
                        <Icon
                          key={i}
                          icon='ph:star-fill'
                          className='size-5 text-yellow-400'
                        />
                      ),
                    )}
                  </div>
                </div>

                <blockquote className='text-lg text-gray-700 dark:text-gray-300 sm:text-xl'>
                  "{testimonials[activeTestimonial].content}"
                </blockquote>

                <div className='mt-6'>
                  <span className='inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200'>
                    {testimonials[activeTestimonial].projectType}
                  </span>
                </div>
              </div>
            </div>

            {/* Testimonial Navigation */}
            <div className='mt-8 flex justify-center gap-2'>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`size-3 rounded-full transition-all ${
                    index === activeTestimonial
                      ? 'bg-blue-600'
                      : 'bg-gray-300 hover:bg-gray-400 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className='mt-20'>
          <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-4'>
            {achievements.map((achievement, index) => (
              <div key={index} className='text-center'>
                <div className='mx-auto mb-4 flex size-16 items-center justify-center rounded-2xl bg-blue-100 dark:bg-blue-900'>
                  <Icon
                    icon={achievement.icon}
                    className='size-8 text-blue-600 dark:text-blue-400'
                  />
                </div>
                <h3 className='mb-2 text-lg font-semibold text-gray-900 dark:text-white'>
                  {achievement.title}
                </h3>
                <p className='text-sm text-gray-700 dark:text-gray-400'>
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className='mt-16 text-center'>
          <p className='mb-8 text-sm font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400'>
            Trusted Technologies & Platforms
          </p>
          <div className='flex flex-wrap items-center justify-center gap-8 opacity-60'>
            <Icon icon='logos:react' className='size-8 sm:size-12' />
            <Icon icon='logos:typescript-icon' className='size-8 sm:size-12' />
            <Icon icon='logos:nodejs-icon' className='size-8 sm:size-12' />
            <Icon icon='logos:aws' className='size-8 sm:size-12' />
            <Icon icon='logos:python' className='size-8 sm:size-12' />
            <Icon icon='logos:postgresql' className='size-8 sm:size-12' />
            <Icon icon='logos:docker-icon' className='size-8 sm:size-12' />
            <Icon icon='logos:kubernetes' className='size-8 sm:size-12' />
          </div>
        </div>
      </div>
    </section>
  );
};
