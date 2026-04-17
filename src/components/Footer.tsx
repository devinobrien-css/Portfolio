import { Icon } from '@iconify/react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='border-t border-neutral-200 bg-neutral-50 text-neutral-600 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-400'>
      <div className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-4'>
          {/* Brand Section */}
          <div className='md:col-span-2'>
            <h1 className='mb-4 text-3xl font-bold text-neutral-900 dark:text-white'>
              Devin P. O'Brien
            </h1>
            <p className='mb-6 max-w-md text-neutral-500 dark:text-neutral-400'>
              Full-stack software engineer passionate about creating innovative
              solutions that drive business growth and enhance user experiences.
            </p>
            <div className='flex gap-4'>
              <a
                aria-label='LinkedIn Profile'
                href='https://www.linkedin.com/in/obrien-devin/'
                target='_blank'
                rel='noreferrer'
                className='group rounded-full bg-neutral-200 p-3 transition-all hover:scale-110 hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700'
              >
                <Icon
                  icon='akar-icons:linkedin-fill'
                  className='size-5 text-neutral-600 transition-colors group-hover:text-neutral-900 dark:text-neutral-400 dark:group-hover:text-white'
                />
              </a>
              <a
                aria-label='GitHub Profile'
                href='https://github.com/devinobrien-css'
                target='_blank'
                rel='noreferrer'
                className='group rounded-full bg-neutral-200 p-3 transition-all hover:scale-110 hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700'
              >
                <Icon
                  icon='akar-icons:github-fill'
                  className='size-5 text-neutral-600 transition-colors group-hover:text-neutral-900 dark:text-neutral-400 dark:group-hover:text-white'
                />
              </a>
              <a
                aria-label="Email Devin O'Brien"
                href='mailto:devinobrien@icloud.com'
                className='group rounded-full bg-neutral-200 p-3 transition-all hover:scale-110 hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700'
              >
                <Icon
                  icon='line-md:email'
                  className='size-5 text-neutral-600 transition-colors group-hover:text-neutral-900 dark:text-neutral-400 dark:group-hover:text-white'
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='mb-4 text-lg font-semibold text-neutral-800 dark:text-white'>
              Quick Links
            </h3>
            <ul className='space-y-2'>
              <li>
                <a
                  href='#hero'
                  className='text-neutral-500 transition-colors hover:text-blue-600 dark:text-neutral-400 dark:hover:text-white'
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href='#services'
                  className='text-neutral-500 transition-colors hover:text-blue-600 dark:text-neutral-400 dark:hover:text-white'
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href='#portfolio'
                  className='text-neutral-500 transition-colors hover:text-blue-600 dark:text-neutral-400 dark:hover:text-white'
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href='#experience'
                  className='text-neutral-500 transition-colors hover:text-blue-600 dark:text-neutral-400 dark:hover:text-white'
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href='#contact'
                  className='text-neutral-500 transition-colors hover:text-blue-600 dark:text-neutral-400 dark:hover:text-white'
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='mb-4 text-lg font-semibold text-neutral-800 dark:text-white'>
              Get In Touch
            </h3>
            <ul className='space-y-3'>
              <li className='flex items-center gap-3'>
                <Icon icon='ph:envelope' className='size-4 text-neutral-500' />
                <a
                  href='mailto:devinobrien@icloud.com'
                  className='text-neutral-500 transition-colors hover:text-blue-600 dark:text-neutral-400 dark:hover:text-white'
                >
                  devinobrien@icloud.com
                </a>
              </li>
              <li className='flex items-center gap-3'>
                <Icon icon='ph:map-pin' className='size-4 text-neutral-500' />
                <span className='text-neutral-500 dark:text-neutral-400'>
                  New York, USA
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='mt-12 border-t border-neutral-200 pt-8 dark:border-neutral-800'>
          <div className='flex flex-col items-center justify-between gap-4 md:flex-row'>
            <p className='text-sm text-neutral-500'>
              © {currentYear} Devin P. O'Brien. All rights reserved.
            </p>
            <div className='flex items-center gap-6 text-sm'>
              <a
                href='https://github.com/devinobrien-css/Portfolio'
                target='_blank'
                rel='noreferrer'
                className='text-neutral-500 transition-colors hover:text-blue-600 dark:hover:text-white'
              >
                View Source Code
              </a>
              <span className='text-neutral-300 dark:text-neutral-700'>•</span>
              <span className='text-neutral-500'>
                Built with React & TypeScript
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
