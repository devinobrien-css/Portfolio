import { Icon } from '@iconify/react';

export const Footer = () => {
  return (
    <footer className=' p-4 text-slate-700 dark:bg-slate-800 dark:text-slate-400'>
      <div className='relative mx-auto flex w-4/5 items-center justify-between border-t p-2 md:p-8'>
        <h1 className='font-montserrat md:text-3xl'>Devin P. O'Brien</h1>

        <div className='flex items-center'>
          <a
            aria-label='LinkedIn'
            href='https://www.linkedin.com/in/obrien-devin/'
            target='_blank'
            rel='noreferrer'
          >
            <Icon
              icon='akar-icons:linkedin-fill'
              className='mr-4 md:text-4xl'
            />
          </a>
          <a
            aria-label='GitHub'
            href='https://github.com/devinobrien-css'
            target='_blank'
            rel='noreferrer'
          >
            <Icon icon='akar-icons:github-fill' className='md:text-4xl' />
          </a>
          <a
            aria-label='Instagram'
            href='https://instagram.com/devinobrien'
            target='_blank'
            rel='noreferrer'
          >
            <Icon
              icon='akar-icons:instagram-fill'
              className='ml-4 md:text-4xl'
            />
          </a>
        </div>
      </div>
    </footer>
  );
};
