import { Icon } from '@iconify/react';

const achievements = [
  {
    icon: 'ph:buildings',
    title: 'Enterprise Experience',
    description:
      'Built systems for Warner Bros. Discovery, CDPHP, and multiple consulting firms',
  },
  {
    icon: 'ph:users-three',
    title: '400K+ Users Supported',
    description:
      'Maintained patient-facing applications serving over 400,000 healthcare members',
  },
  {
    icon: 'ph:arrow-down',
    title: '70% Cost Reduction',
    description:
      'Slashed infrastructure costs by migrating to AWS cloud solutions',
  },
  {
    icon: 'ph:rocket-launch',
    title: '60% Faster Deploys',
    description:
      'Implemented parallel CI/CD pipelines cutting deployment times dramatically',
  },
];

export const SocialProof = () => {
  return (
    <section className='bg-neutral-50 py-20 dark:bg-neutral-900'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center'>
          <div className='mb-4 inline-flex items-center rounded-full bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300'>
            <Icon icon='ph:chart-line-up' className='mr-2 size-4' />
            Proven Impact
          </div>
          <h2 className='mb-4 text-4xl font-bold text-neutral-900 dark:text-white sm:text-5xl'>
            Real{' '}
            <span className='text-blue-600 dark:text-blue-500'>Results</span>,
            Real Companies
          </h2>
          <p className='mx-auto max-w-2xl text-xl text-neutral-600 dark:text-neutral-400'>
            Measurable outcomes from production systems at recognized
            organizations.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className='mt-16'>
          <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-4'>
            {achievements.map((achievement, index) => (
              <div key={index} className='text-center'>
                <div className='mx-auto mb-4 flex size-16 items-center justify-center rounded-2xl bg-neutral-100 dark:bg-neutral-800'>
                  <Icon
                    icon={achievement.icon}
                    className='size-8 text-neutral-700 dark:text-neutral-300'
                  />
                </div>
                <h3 className='mb-2 text-lg font-semibold text-neutral-900 dark:text-white'>
                  {achievement.title}
                </h3>
                <p className='text-sm text-neutral-600 dark:text-neutral-400'>
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Trusted Technologies */}
        <div className='mt-16 text-center'>
          <p className='mb-8 text-sm font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400'>
            Core Technology Stack
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
