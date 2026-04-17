import { Icon } from '@iconify/react';
import { useState } from 'react';
import { ContactForm } from './forms/ContactForm';

export const ModernCTA = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <section className='bg-neutral-50 py-20 dark:bg-neutral-950'>
      <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='relative overflow-hidden rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm dark:border-neutral-800 dark:bg-neutral-900 sm:p-16'>
          <div className='relative z-10'>
            {/* Header */}
            <div className='text-center'>
              <div className='mb-4 inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 dark:border-neutral-700 dark:bg-neutral-800'>
                <Icon
                  icon='ph:chat-circle-text'
                  className='mr-2 size-5 text-neutral-600 dark:text-neutral-400'
                />
                <span className='text-sm font-medium text-neutral-600 dark:text-neutral-400'>
                  Let's Connect
                </span>
              </div>

              <h2 className='mb-6 text-4xl font-bold text-neutral-900 dark:text-white sm:text-5xl lg:text-6xl'>
                Ready to{' '}
                <span className='text-blue-600 dark:text-blue-500'>
                  Build Something
                </span>
                ?
              </h2>

              <p className='mx-auto max-w-3xl text-xl text-neutral-600 dark:text-neutral-400'>
                Let's discuss how my expertise in modern web development can
                help bring your ideas to life.
              </p>
            </div>

            {/* Action Cards */}
            <div className='mt-12 grid gap-8 md:grid-cols-2'>
              {/* Email Card */}
              <div className='group relative overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 p-8 transition-all hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-800/50 dark:hover:border-neutral-700'>
                <div className='relative z-10'>
                  <div className='mb-6 inline-flex rounded-full bg-neutral-100 p-4 dark:bg-neutral-700'>
                    <Icon
                      icon='ph:envelope'
                      className='size-8 text-neutral-700 dark:text-neutral-300'
                    />
                  </div>

                  <h3 className='mb-4 text-2xl font-bold text-neutral-900 dark:text-white'>
                    Send me an Email
                  </h3>

                  <p className='mb-6 text-neutral-600 dark:text-neutral-400'>
                    Reach out directly to discuss your project requirements or
                    any questions you might have.
                  </p>

                  <a
                    href="mailto:devinobrien@icloud.com?subject=Project%20Inquiry&body=Hi%20Devin,%0D%0A%0D%0AI'm%20interested%20in%20discussing%20a%20project%20with%20you."
                    className='inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700'
                  >
                    <Icon icon='ph:envelope-simple' className='size-5' />
                    Email Me
                  </a>
                </div>
              </div>

              {/* Contact Form Card */}
              <div className='group relative overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 p-8 transition-all hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-800/50 dark:hover:border-neutral-700'>
                <div className='relative z-10'>
                  <div className='mb-6 inline-flex rounded-full bg-neutral-100 p-4 dark:bg-neutral-700'>
                    <Icon
                      icon='ph:chat-teardrop-text'
                      className='size-8 text-neutral-700 dark:text-neutral-300'
                    />
                  </div>

                  <h3 className='mb-4 text-2xl font-bold text-neutral-900 dark:text-white'>
                    Quick Message
                  </h3>

                  <p className='mb-6 text-neutral-600 dark:text-neutral-400'>
                    Fill out a quick form with your project details and I'll get
                    back to you promptly.
                  </p>

                  <button
                    onClick={() => setShowContactForm(true)}
                    className='inline-flex items-center gap-2 rounded-lg border-2 border-neutral-300 bg-white px-6 py-3 font-medium text-neutral-700 transition-colors hover:border-neutral-400 hover:bg-neutral-50 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:border-neutral-500'
                  >
                    <Icon icon='ph:chat-circle-text' className='size-5' />
                    Send Message
                  </button>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className='mt-12 text-center'>
              <p className='mb-4 text-sm font-medium text-neutral-500'>
                OR CONNECT WITH ME ON
              </p>

              <div className='flex justify-center space-x-4'>
                <a
                  href='https://github.com/devinobrien-css'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex size-12 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 transition-colors hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700'
                  aria-label='GitHub'
                >
                  <Icon icon='ph:github-logo' className='size-6' />
                </a>

                <a
                  href='https://www.linkedin.com/in/obrien-devin/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex size-12 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 transition-colors hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700'
                  aria-label='LinkedIn'
                >
                  <Icon icon='ph:linkedin-logo' className='size-6' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm'>
          <div className='relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-neutral-200 bg-white p-6 shadow-2xl dark:border-neutral-800 dark:bg-neutral-900'>
            <button
              onClick={() => setShowContactForm(false)}
              className='absolute right-4 top-4 rounded-full bg-neutral-100 p-2 text-neutral-500 hover:bg-neutral-200 hover:text-neutral-700 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-white'
              aria-label='Close'
            >
              <Icon icon='ph:x' className='size-5' />
            </button>

            <h3 className='mb-4 text-2xl font-bold text-neutral-900 dark:text-white'>
              Send a Message
            </h3>

            <ContactForm onSubmit={() => setShowContactForm(false)} />
          </div>
        </div>
      )}
    </section>
  );
};
