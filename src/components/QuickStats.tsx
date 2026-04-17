import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';

interface Stat {
  label: string;
  value: number;
  suffix: string;
  icon: string;
  color: string;
}

const stats: Stat[] = [
  {
    label: 'Companies Served',
    value: 6,
    suffix: '+',
    icon: 'ph:buildings',
    color: 'text-neutral-600',
  },
  {
    label: 'Users Supported',
    value: 400,
    suffix: 'K+',
    icon: 'ph:users-three',
    color: 'text-neutral-600',
  },
  {
    label: 'Years Experience',
    value: 5,
    suffix: '+',
    icon: 'ph:calendar',
    color: 'text-neutral-600',
  },
  {
    label: 'Technologies Used',
    value: 20,
    suffix: '+',
    icon: 'ph:stack',
    color: 'text-neutral-600',
  },
];

export const QuickStats = () => {
  const [animatedValues, setAnimatedValues] = useState<number[]>(
    stats.map(() => 0),
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate numbers when component comes into view
            stats.forEach((stat, index) => {
              let start = 0;
              const end = stat.value;
              const duration = 2000; // 2 seconds
              const increment = end / (duration / 16); // 60fps

              const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                  start = end;
                  clearInterval(timer);
                }
                setAnimatedValues((prev) => {
                  const newValues = [...prev];
                  newValues[index] = Math.floor(start);
                  return newValues;
                });
              }, 16);
            });
          }
        });
      },
      { threshold: 0.5 },
    );

    const element = document.getElementById('quick-stats');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id='quick-stats' className='bg-white py-16 dark:bg-neutral-950'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h2 className='mb-4 text-3xl font-bold text-neutral-900 dark:text-white sm:text-4xl'>
            Delivering Results That{' '}
            <span className='text-blue-600 dark:text-blue-500'>Matter</span>
          </h2>
          <p className='mx-auto mb-12 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400'>
            Numbers that speak to the impact of my work across enterprise and
            startup environments.
          </p>
        </div>

        <div className='grid grid-cols-2 gap-8 md:grid-cols-4'>
          {stats.map((stat, index) => (
            <div key={index} className='text-center'>
              <div className='mx-auto mb-4 flex size-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm'>
                <Icon icon={stat.icon} className={`size-8 ${stat.color}`} />
              </div>
              <div className='mb-2 text-4xl font-bold text-neutral-900 dark:text-white sm:text-5xl'>
                {animatedValues[index]}
                {stat.suffix}
              </div>
              <div className='text-sm font-medium text-neutral-600 dark:text-neutral-400 sm:text-base'>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <div className='mt-16 text-center'>
          <div className='flex flex-wrap items-center justify-center gap-8 opacity-60'>
            <div className='flex items-center gap-2 text-neutral-600 dark:text-neutral-400'>
              <Icon
                icon='ph:shield-check'
                className='size-5 text-neutral-500'
              />
              <span className='text-sm font-medium'>HIPAA Compliant</span>
            </div>
            <div className='flex items-center gap-2 text-neutral-600 dark:text-neutral-400'>
              <Icon icon='ph:cloud' className='size-5 text-neutral-500' />
              <span className='text-sm font-medium'>AWS & Azure</span>
            </div>
            <div className='flex items-center gap-2 text-neutral-600 dark:text-neutral-400'>
              <Icon icon='ph:git-branch' className='size-5 text-neutral-500' />
              <span className='text-sm font-medium'>CI/CD Automation</span>
            </div>
            <div className='flex items-center gap-2 text-neutral-600 dark:text-neutral-400'>
              <Icon
                icon='ph:graduation-cap'
                className='size-5 text-neutral-500'
              />
              <span className='text-sm font-medium'>MS Computer Science</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
