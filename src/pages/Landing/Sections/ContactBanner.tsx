import { Icon } from '@iconify/react';
import { PageSection } from '../../../components/text/PageSection';

export const ContactBanner = () => {
  return (
    <PageSection className='relative my-64 justify-between overflow-hidden rounded bg-slate-200 px-6 py-4 dark:bg-slate-700 md:flex'>
      <h2 className='z-10 py-4 font-montserrat text-4xl font-bold dark:text-white md:text-center'>
        Get in touch
      </h2>

      <div className='flex flex-col gap-4'>
        <p className='font-montserrat text-lg text-slate-800 dark:text-slate-100'>
          I'm always open to new opportunities and collaborations. Feel free to
          reach out to me.
        </p>
        <a
          href='mailto:devinobrien@icloud.com'
          className='relative flex items-center gap-2 overflow-hidden rounded bg-blue-300 p-2 font-montserrat text-sm text-white ring-blue-300 transition-all hover:shadow active:ring-2 dark:bg-red-500 dark:shadow-slate-200/30 dark:ring-red-500/50'
        >
          <Icon icon='line-md:email-twotone' className='size-6' />
          <span>email me</span>
          <svg
            width='325'
            height='325'
            viewBox='0 0 325 325'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='absolute left-1/3 '
          >
            <circle
              cx='162'
              cy='162'
              r='49.25'
              stroke='#DDDDDD'
              strokeWidth='1.5'
            />
            <circle
              cx='162.5'
              cy='162.5'
              r='86.75'
              stroke='#DDDDDD'
              strokeWidth='1.5'
              className='opacity-75'
            />
            <path
              className='opacity-50'
              d='M286.25 162C286.25 230.621 230.621 286.25 162 286.25C93.3786 286.25 37.75 230.621 37.75 162C37.75 93.3786 93.3786 37.75 162 37.75C230.621 37.75 286.25 93.3786 286.25 162Z'
              stroke='#DDDDDD'
              strokeWidth='1.5'
            />
            <path
              className='opacity-25'
              d='M324.25 162.5C324.25 251.832 251.832 324.25 162.5 324.25C73.1679 324.25 0.75 251.832 0.75 162.5C0.75 73.1679 73.1679 0.75 162.5 0.75C251.832 0.75 324.25 73.1679 324.25 162.5Z'
              stroke='#DDDDDD'
              strokeWidth='1.5'
            />
          </svg>
        </a>
      </div>

      <svg
        width='325'
        height='325'
        viewBox='0 0 325 325'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='absolute -left-24 bottom-5 z-0 opacity-40'
      >
        <circle
          cx='162'
          cy='162'
          r='49.25'
          stroke='#DDDDDD'
          strokeWidth='1.5'
          className='dark:stroke-red-500'
        />
        <circle
          cx='162.5'
          cy='162.5'
          r='86.75'
          stroke='#DDDDDD'
          strokeWidth='1.5'
          className='dark:stroke-red-500/50'
        />
        <path
          className='dark:stroke-red-500/50'
          d='M286.25 162C286.25 230.621 230.621 286.25 162 286.25C93.3786 286.25 37.75 230.621 37.75 162C37.75 93.3786 93.3786 37.75 162 37.75C230.621 37.75 286.25 93.3786 286.25 162Z'
          stroke='#DDDDDD'
          strokeWidth='1.5'
        />
        <path
          className='dark:stroke-red-500/25'
          d='M324.25 162.5C324.25 251.832 251.832 324.25 162.5 324.25C73.1679 324.25 0.75 251.832 0.75 162.5C0.75 73.1679 73.1679 0.75 162.5 0.75C251.832 0.75 324.25 73.1679 324.25 162.5Z'
          stroke='#DDDDDD'
          strokeWidth='1.5'
        />
      </svg>
    </PageSection>
  );
};
