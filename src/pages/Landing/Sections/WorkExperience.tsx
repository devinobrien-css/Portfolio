import { Title } from '../../../components/text/Title';
import { TitleSize } from '../../../data/constants';
import { SubTitle } from '../../../components/text/SubTitle';
import { PageTitle } from '../../../components/text/PageTitle';
import { employers } from '../../../data/employers';
import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { Employer } from '../../../types/Employer';
import cx from 'classnames';

interface WorkCardProps {
  employer: Employer;
  initialOpen?: boolean;
}
export const WorkCard = ({ employer, initialOpen }: WorkCardProps) => {
  const { name, title, timeline, description, location, icon, shortName } = employer;
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (initialOpen) {
      setIsOpen(true);
    }
  }, [initialOpen]);

  return (
    <div className={
      cx('rounded-lg border  p-4 w-full', {
        'dark:bg-slate-800 bg-white border-tiffany-blue': isOpen,
        'dark:bg-slate-900 bg-gray-100 border-paynes-grey': !isOpen
      })}
    >
      <div className='flex flex-wrap-reverse justify-end sm:justify-between'>
        <Title size={TitleSize.MD} className='flex gap-2'>
          <img src={icon} alt={name} className='my-auto size-8 rounded-full '/>
          {title} @ {name} 
        </Title>

        <div className='flex gap-2'>
          <SubTitle className='my-auto'>{timeline}</SubTitle>

          <button onClick={() => setIsOpen(!isOpen)} className='text-slate-400 transition-all hover:scale-125 dark:text-white'>
            {
              isOpen ? (
                <Icon icon='akar-icons:minus' className='my-auto size-6'/>
              ) : (
                <Icon icon='akar-icons:plus' className='my-auto size-6'/>
              )
            }
          </button>
        </div>

      </div>
      <hr 
        className={
          cx(
            'transition-all duration-300 border-tiffany-blue ',
            {
              'opacity-0': !isOpen,
              'opacity-full my-2': isOpen
            }
          )
        }
      />
      <div className={
        cx(
          'transition-all duration-300 overflow-clip flex flex-col gap-4',
          {
            'h-0': !isOpen,
            'h-72 md:h-48': isOpen
          }
        )
      }>
        <div className='flex gap-8'>
          <div className='flex gap-2'>
            <Icon icon='ph:map-pin' className='size-6 dark:text-white'/>
            <span className='font-monterrat text-md font-light dark:text-white'>
              {location}
            </span>
          </div>
          <div className='flex gap-2'>
            <Icon icon='ph:link' className='size-6 dark:text-white'/>
            <a href={employer.name} target='_blank' rel='noreferrer noopener' className='text-md font-lato font-light underline dark:text-white'>
              {shortName}
            </a>
          </div>
        </div>

        <div className='flex h-full flex-col justify-between'> 
          <SubTitle>{description}</SubTitle>

          <div className='flex flex-wrap gap-2'>
            {
              employer.skills?.map((skill) => (
                <span key={skill.name} className='rounded-lg bg-slate-200 px-2 py-1 font-lato text-xs dark:bg-slate-700 dark:text-moonstone'>
                  {skill.name}
                </span>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export const WorkExperience = (): JSX.Element => {
  return (
    // <BottomBarAnimation
    //   threshold={20}
    //   content={
    //     <div className='hidden w-full justify-end px-12 py-8 sm:flex'>
    //       <img src='https://access-portfolio-images.s3.amazonaws.com/At+the+office-amico.svg' alt='programming' className='z-10 m-2 hidden size-56 object-cover md:block'/>
    //     </div>
    //   }>
    <div className='my-16 min-h-screen md:my-0'>
      <div className="mt-4 w-full transition-all duration-300 md:my-auto">
        <Title size={TitleSize.LG} className='!font-bebas !text-5xl md:!text-6xl'>
            Where I've Worked
        </Title>
        <PageTitle title='Past Employers' />
        <br />
        <br />
        <div className='flex flex-col gap-4'>
          {
            employers.map((employer, index) => {
              return (
                <WorkCard key={employer.name} employer={employer} initialOpen={index === 0}/>
              );
            })
          }
        </div>
      </div>
    </div>
    // </BottomBarAnimation>
  );
};
