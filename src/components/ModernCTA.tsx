import { Icon } from '@iconify/react';
import { useState } from 'react';
import { ContactForm } from './forms/ContactForm';
import { useTheme } from '../util/context/ThemeContext';

export const ModernCTA = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const { theme } = useTheme();
  const darkMode = theme === 'dark';

  return (
    <section
      className={`py-20 ${darkMode ? 'bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900' : 'bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50'}`}
    >
      {/* Background Elements */}
      <div className='absolute inset-0 -z-10'>
        <div className='bg-grid-pattern absolute inset-0 opacity-5'></div>
        <div
          className={`absolute left-1/4 top-20 size-32 animate-float rounded-full blur-2xl ${darkMode ? 'bg-gradient-to-br from-blue-400/10 to-purple-600/10' : 'bg-gradient-to-br from-blue-400/20 to-indigo-600/20'}`}
        ></div>
        <div
          className={`absolute bottom-20 right-1/4 size-24 animate-float-delayed rounded-full blur-2xl ${darkMode ? 'bg-gradient-to-br from-purple-400/10 to-pink-600/10' : 'bg-gradient-to-br from-purple-400/20 to-pink-600/20'}`}
        ></div>
      </div>

      <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div
          className={`relative overflow-hidden rounded-3xl ${darkMode ? 'bg-slate-800/30' : 'bg-white/90'} p-8 shadow-xl backdrop-blur-sm sm:p-16 ${darkMode ? 'shadow-blue-900/5' : 'shadow-blue-200/50'}`}
        >
          <div
            className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-pink-600/5' : 'bg-gradient-to-br from-blue-100/50 via-purple-100/50 to-blue-100/50'}`}
          ></div>

          <div className='relative z-10'>
            {/* Header */}
            <div className='text-center'>
              <div
                className={`mb-4 inline-flex items-center rounded-full ${darkMode ? 'border border-blue-500/20 bg-blue-500/10' : 'border border-blue-500/30 bg-blue-500/10'} px-4 py-2 backdrop-blur-sm`}
              >
                <Icon
                  icon='ph:chat-circle-text'
                  className={`mr-2 size-5 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}
                />
                <span
                  className={`text-sm font-medium ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}
                >
                  Let's Connect
                </span>
              </div>

              <h2
                className={`mb-6 text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} sm:text-5xl lg:text-6xl`}
              >
                Ready to{' '}
                <span
                  className={`bg-gradient-to-r ${darkMode ? 'from-blue-400 via-purple-400 to-cyan-400' : 'from-blue-600 via-purple-600 to-cyan-600'} bg-clip-text text-transparent`}
                >
                  Build Something Amazing
                </span>
                ?
              </h2>

              <p
                className={`mx-auto max-w-3xl text-xl ${darkMode ? 'text-slate-300' : 'text-gray-600'}`}
              >
                Let's discuss how my expertise in modern web development can
                help bring your ideas to life. I'm excited to hear about your
                project!
              </p>
            </div>

            {/* Action Cards */}
            <div className='mt-12 grid gap-8 md:grid-cols-2'>
              {/* Email Card */}
              <div
                className={`group relative overflow-hidden rounded-2xl ${darkMode ? 'bg-slate-700/50' : 'bg-blue-50'} p-8 transition-transform hover:scale-105`}
              >
                <div
                  className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-br from-blue-600/5 to-blue-800/5' : 'bg-gradient-to-br from-blue-100 to-blue-200'} opacity-0 transition-opacity group-hover:opacity-100`}
                ></div>

                <div className='relative z-10'>
                  <div
                    className={`mb-6 inline-flex rounded-full ${darkMode ? 'bg-blue-500/20' : 'bg-blue-100'} p-4`}
                  >
                    <Icon
                      icon='ph:envelope'
                      className={`size-8 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}
                    />
                  </div>

                  <h3
                    className={`mb-4 text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}
                  >
                    Send me an Email
                  </h3>

                  <p
                    className={`mb-6 ${darkMode ? 'text-slate-300' : 'text-gray-600'}`}
                  >
                    Reach out directly to discuss your project requirements or
                    any questions you might have.
                  </p>

                  <a
                    href="mailto:devinobrien@icloud.com?subject=Project%20Inquiry&body=Hi%20Devin,%0D%0A%0D%0AI'm%20interested%20in%20discussing%20a%20project%20with%20you."
                    className={`inline-flex items-center gap-2 rounded-lg ${darkMode ? 'bg-blue-600 text-white hover:bg-blue-500' : 'bg-blue-600 text-white hover:bg-blue-700'} px-6 py-3 font-medium transition-colors`}
                  >
                    <Icon icon='ph:envelope-simple' className='size-5' />
                    Email Me
                  </a>
                </div>
              </div>

              {/* Contact Form Card */}
              <div
                className={`group relative overflow-hidden rounded-2xl ${darkMode ? 'bg-slate-700/50' : 'bg-purple-50'} p-8 transition-transform hover:scale-105`}
              >
                <div
                  className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-br from-purple-600/5 to-purple-800/5' : 'bg-gradient-to-br from-purple-100 to-purple-200'} opacity-0 transition-opacity group-hover:opacity-100`}
                ></div>

                <div className='relative z-10'>
                  <div
                    className={`mb-6 inline-flex rounded-full ${darkMode ? 'bg-purple-500/20' : 'bg-purple-100'} p-4`}
                  >
                    <Icon
                      icon='ph:chat-teardrop-text'
                      className={`size-8 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}
                    />
                  </div>

                  <h3
                    className={`mb-4 text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}
                  >
                    Quick Message
                  </h3>

                  <p
                    className={`mb-6 ${darkMode ? 'text-slate-300' : 'text-gray-600'}`}
                  >
                    Fill out a quick form with your project details and I'll get
                    back to you promptly.
                  </p>

                  <button
                    onClick={() => setShowContactForm(true)}
                    className={`inline-flex items-center gap-2 rounded-lg ${darkMode ? 'bg-purple-600 text-white hover:bg-purple-500' : 'bg-purple-600 text-white hover:bg-purple-700'} px-6 py-3 font-medium transition-colors`}
                  >
                    <Icon icon='ph:chat-circle-text' className='size-5' />
                    Send Message
                  </button>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className='mt-12 text-center'>
              <p
                className={`mb-4 text-sm font-medium ${darkMode ? 'text-slate-400' : 'text-gray-500'}`}
              >
                OR CONNECT WITH ME ON
              </p>

              <div className='flex justify-center space-x-4'>
                <a
                  href='https://github.com/devinobrien-css'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`inline-flex size-12 items-center justify-center rounded-full ${darkMode ? 'bg-slate-800 text-white hover:bg-slate-700' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'} transition-colors`}
                  aria-label='GitHub'
                >
                  <Icon icon='ph:github-logo' className='size-6' />
                </a>

                <a
                  href='https://linkedin.com/in/devin-obrien'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`inline-flex size-12 items-center justify-center rounded-full ${darkMode ? 'bg-slate-800 text-white hover:bg-slate-700' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'} transition-colors`}
                  aria-label='LinkedIn'
                >
                  <Icon icon='ph:linkedin-logo' className='size-6' />
                </a>

                <a
                  href='https://twitter.com/devinobrien_css'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`inline-flex size-12 items-center justify-center rounded-full ${darkMode ? 'bg-slate-800 text-white hover:bg-slate-700' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'} transition-colors`}
                  aria-label='Twitter'
                >
                  <Icon icon='ph:twitter-logo' className='size-6' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm'>
          <div
            className={`relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl ${darkMode ? 'bg-slate-800' : 'bg-white'} p-6 shadow-2xl`}
          >
            <button
              onClick={() => setShowContactForm(false)}
              className={`absolute right-4 top-4 rounded-full ${darkMode ? 'bg-slate-700 text-slate-400 hover:bg-slate-600 hover:text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700'} p-2`}
              aria-label='Close'
            >
              <Icon icon='ph:x' className='size-5' />
            </button>

            <h3
              className={`mb-4 text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}
            >
              Send a Message
            </h3>

            <ContactForm onSubmit={() => setShowContactForm(false)} />
          </div>
        </div>
      )}
    </section>
  );
};
