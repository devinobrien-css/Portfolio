import { Icon } from '@iconify/react';
import { TitleSize } from '../../../data/constants';
import { Title } from '../../../components/text/Title';

export const WhatIDo = () => {
  return (
    <div className='my-32 min-h-screen'>
      <p className='font-montserrat text-blue-300 dark:text-red-500/50'>
          full stack development
      </p>
      <Title size={TitleSize.XL} className='mb-4 md:mb-12'>
            What I Do
      </Title>

      <div className='flex flex-wrap gap-4'>
        <div className='w-full rounded bg-white p-4 shadow dark:bg-slate-800 dark:shadow-slate-800 md:w-1/2 lg:w-[22%]'>
          <Icon icon="ph:code-thin" className='size-12 text-blue-300 dark:text-red-500'/>
          <h3 className='my-2 font-montserrat dark:text-moonstone'>Front End Development</h3>

          <p className=' font-lato text-sm dark:text-tiffany-blue'>
              Building responsive, and accessible apps using modern front end technologies.
          </p>
        </div>
        <div className='w-full rounded bg-white p-4 shadow dark:bg-slate-800 dark:shadow-slate-800 md:w-1/2 lg:w-[22%]'>
          <Icon icon="ph:terminal-window-thin" className='size-12 text-blue-300 dark:text-red-500'/>
          <h3 className='my-2 font-montserrat dark:text-moonstone'>Back End Development</h3>

          <p className='font-lato text-sm dark:text-tiffany-blue'>
              Writing scalable, efficient, and secure server-side code to power web applications.
          </p>
        </div>
        <div className='dark:shadow-slate-80 md:w-1/20 w-full rounded bg-white p-4 shadow dark:bg-slate-800 lg:w-[22%]'>
          <Icon icon="ph:database-thin" className='size-12 text-blue-300 dark:text-red-500' />
          <h3 className='my-2 font-montserrat dark:text-moonstone'>Database Management</h3>
            
          <p className='font-lato text-sm dark:text-tiffany-blue'>
              Managing databases to effeciently store and retrieve data.
          </p>
        </div>
        <div className='w-full rounded bg-white p-4 shadow dark:bg-slate-800 dark:shadow-slate-800 md:w-1/2 lg:w-[22%]'>
          <Icon icon="ph:devices-thin" className='size-12 text-blue-300 dark:text-red-500' />
          <h3 className='my-2 font-montserrat dark:text-moonstone'>Mobile App Development</h3>

          <p className='font-lato text-sm dark:text-tiffany-blue'>
              Building mobile applications for iOS and Android using modern technologies.
          </p>
        </div>
        <div className='w-full rounded bg-white p-4 shadow dark:bg-slate-800 dark:shadow-slate-800 md:w-1/2 lg:w-[22%]'>
          <Icon icon="ph:tree-structure-thin" className='size-12 text-blue-300 dark:text-red-500' />
          <h3 className='my-2 font-montserrat dark:text-moonstone'>Infrastructure</h3>

          <p className='font-lato text-sm dark:text-tiffany-blue'>
              Architecting scalable and reliable infrastructure to support applications.
          </p>
        </div>
        <div className='dark:shadow-slate-80 md:w-1/20 w-full rounded bg-white p-4 shadow dark:bg-slate-800 lg:w-[22%]'>
          <Icon icon="ph:package-thin" className='size-12 text-blue-300 dark:text-red-500' />
          <h3 className='my-2 font-montserrat dark:text-moonstone'>Dev Ops</h3>

          <p className='font-lato text-sm dark:text-tiffany-blue'>
              Automating and streamlining development and production workflows.
          </p>
        </div>
        <div className='dark:shadow-slate-80 md:w-1/20 w-full rounded bg-white p-4 shadow dark:bg-slate-800 lg:w-[22%]'>
          <Icon icon="ph:cloud-thin" className='size-12 text-blue-300 dark:text-red-500' />
          <h3 className='my-2 font-montserrat dark:text-moonstone'>Cloud Computing</h3>

          <p className='font-lato text-sm dark:text-tiffany-blue'>
             Orchestrating cloud infrastructure using modern cloud providers.
          </p>
        </div>
        <div className='dark:shadow-slate-80 md:w-1/20 w-full rounded bg-white p-4 shadow dark:bg-slate-800 lg:w-[22%]'>
          <Icon icon="ph:shield-check-thin" className='size-12 text-blue-300 dark:text-red-500' />
          <h3 className='my-2 font-montserrat dark:text-moonstone'>Security</h3>

          <p className='font-lato text-sm dark:text-tiffany-blue'>
              Ensure that applications are secure and protected from threats.
          </p>
        </div>
      </div>

    </div>
  );
};