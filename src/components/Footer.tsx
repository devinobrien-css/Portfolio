import { Icon } from '@iconify/react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-gradient-to-b from-slate-50 to-slate-100 text-slate-600 dark:from-gray-900 dark:to-gray-900 dark:text-gray-300'>
      <div className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-4'>
          {/* Brand Section */}
          <div className='md:col-span-2'>
            <h1 className='mb-4 bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-3xl font-bold text-transparent'>
              Devin P. O'Brien
            </h1>
            <p className='mb-6 max-w-md text-slate-500 dark:text-gray-400'>
              Full-stack software engineer passionate about creating innovative
              solutions that drive business growth and enhance user experiences.
            </p>
            <div className='flex gap-4'>
              <a
                aria-label='LinkedIn Profile'
                href='https://www.linkedin.com/in/obrien-devin/'
                target='_blank'
                rel='noreferrer'
                className='group rounded-full bg-gray-800 p-3 transition-all hover:scale-110 hover:bg-blue-600'
              >
                <Icon
                  icon='akar-icons:linkedin-fill'
                  className='size-5 text-gray-300 transition-colors group-hover:text-white'
                />
              </a>
              <a
                aria-label='GitHub Profile'
                href='https://github.com/devinobrien-css'
                target='_blank'
                rel='noreferrer'
                className='group rounded-full bg-gray-800 p-3 transition-all hover:scale-110 hover:bg-gray-600'
              >
                <Icon
                  icon='akar-icons:github-fill'
                  className='size-5 text-gray-300 transition-colors group-hover:text-white'
                />
              </a>
              <a
                aria-label="Email Devin O'Brien"
                href='mailto:devinobrien@icloud.com'
                className='group rounded-full bg-gray-800 p-3 transition-all hover:scale-110 hover:bg-green-600'
              >
                <Icon
                  icon='line-md:email'
                  className='size-5 text-gray-300 transition-colors group-hover:text-white'
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='mb-4 text-lg font-semibold text-slate-700 dark:text-white'>
              Quick Links
            </h3>
            <ul className='space-y-2'>
              <li>
                <a
                  href='#hero'
                  className='text-slate-500 transition-colors hover:text-blue-500 dark:text-gray-400 dark:hover:text-white'
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href='#services'
                  className='text-slate-500 transition-colors hover:text-blue-500 dark:text-gray-400 dark:hover:text-white'
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href='#portfolio'
                  className='text-slate-500 transition-colors hover:text-blue-500 dark:text-gray-400 dark:hover:text-white'
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href='#experience'
                  className='text-slate-500 transition-colors hover:text-blue-500 dark:text-gray-400 dark:hover:text-white'
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href='#contact'
                  className='text-gray-400 transition-colors hover:text-white'
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='mb-4 text-lg font-semibold text-white'>
              Get In Touch
            </h3>
            <ul className='space-y-3'>
              <li className='flex items-center gap-3'>
                <Icon icon='ph:envelope' className='size-4 text-blue-400' />
                <a
                  href='mailto:devinobrien@icloud.com'
                  className='text-gray-400 transition-colors hover:text-white'
                >
                  devinobrien@icloud.com
                </a>
              </li>
              <li className='flex items-center gap-3'>
                <Icon icon='ph:phone' className='size-4 text-green-400' />
                <a
                  href='tel:2032288579'
                  className='text-gray-400 transition-colors hover:text-white'
                >
                  (203) 228-8579
                </a>
              </li>
              <li className='flex items-center gap-3'>
                <Icon icon='ph:map-pin' className='size-4 text-purple-400' />
                <span className='text-gray-400'>New York, USA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='mt-12 border-t border-gray-800 pt-8'>
          <div className='flex flex-col items-center justify-between gap-4 md:flex-row'>
            <p className='text-sm text-gray-400'>
              © {currentYear} Devin P. O'Brien. All rights reserved.
            </p>
            <div className='flex items-center gap-6 text-sm'>
              <a
                href='https://github.com/devinobrien-css/Portfolio'
                target='_blank'
                rel='noreferrer'
                className='text-gray-400 transition-colors hover:text-white'
              >
                View Source Code
              </a>
              <span className='text-gray-600'>•</span>
              <span className='text-gray-400'>
                Built with React & TypeScript
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
