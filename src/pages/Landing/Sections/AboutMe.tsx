
import { useGlobalContext } from '../../../util/context/useGlobalContext';
import { PageSection } from '../../../components/text/PageSection';
import { SubTitle } from '../../../components/text/SubTitle';
import { Title } from '../../../components/text/Title';
import { TitleSize } from '../../../data/constants';
import { Icon } from '@iconify/react';

export const AboutMe = () => {
  const {tldr} = useGlobalContext();

  return (
    <PageSection className="flex flex-wrap gap-12 transition-all duration-300 md:flex-nowrap">
      <div className=''>
        <img src='https://access-portfolio-images.s3.amazonaws.com/memoji.jpg' alt='Devin' className=' m-auto block max-w-64 rounded-full border-b-4 border-blue-300 object-cover shadow dark:border-red-500/70 md:size-60'/>
        <div className='-my-8 rounded border-b-2 border-r-2 border-blue-300 bg-gray-800/10 p-2 backdrop-blur dark:border-red-500/70'>
          <p className='text-center font-montserrat text-lg dark:text-tiffany-blue'>
            Devin O'Brien
          </p>
          <div className='flex justify-center gap-2'>
            <a href='https://www.linkedin.com/in/devin-o-brien/' target='_blank' rel='noreferrer noopener' className='rounded-full bg-slate-300 p-1 transition-all hover:scale-110'>
              <Icon icon='line-md:linkedin' className='size-4'/>
            </a>
            <a href='https://www.github.com/devinobrien' target='_blank' rel='noreferrer noopener' className='rounded-full bg-slate-300 p-1 transition-all hover:scale-110'>
              <Icon icon='line-md:github-twotone' className='size-4'/>
            </a>
            <a href='https://www.instagram.com/devinobrien/' target='_blank' rel='noreferrer noopener' className='rounded-full bg-slate-300 p-1 transition-all hover:scale-110'>
              <Icon icon='line-md:instagram' className='size-4'/>
            </a>
            <a href='mailto:devinobrien@icloud.com' target='_blank' rel='noreferrer noopener' className='rounded-full bg-slate-300 p-1 transition-all hover:scale-110'>
              <Icon icon='line-md:email' className='size-4'/>
            </a>
            <a href='callto:2032288579' target='_blank' rel='noreferrer noopener' className='rounded-full bg-slate-300 p-1 transition-all hover:scale-110'>
              <Icon icon='line-md:phone' className='size-4'/>
            </a>
          </div>
        </div>
      </div>

      <div className="my-auto flex flex-col gap-y-2 md:w-2/3">
        <p className='font-montserrat text-blue-300 dark:text-red-500/50'>
          about me
        </p>
        <Title size={TitleSize.LG} className='mb-4'>
          Transforming Ideas into Reality
        </Title>
        <SubTitle className=' flex flex-col gap-y-2'>
          {
            !tldr && (
              <span>
                  Welcome to my portfolio website, where I invite you to embark on a journey through
                  my passion for technology and innovation. 
              </span>
            )
          }
          <span>
              As a dedicated fullstack software engineer,
              I've had the privilege of crafting digital solutions that bridge the gap between
              imagination and reality. 
          </span>
          {
            !tldr && (
              <span>
                  Here, you'll find a curated collection of my work, a
                  testament to my commitment to creating seamless, efficient, and user-centric software.
              </span>
            )
          }
        </SubTitle>
        <SubTitle className='flex flex-col gap-y-3'>
          <span>              
              From the front-end's aesthetic appeal to the back-end's robust functionality, my portfolio showcases
              the diverse range of projects I've had the pleasure of working on. Each project is a testament to my
              problem-solving skills, attention to detail, and relentless pursuit of excellence in software development.
          </span>
          {/* 
          {
            !tldr && (
              <span>
                    My journey in software development began with a passion for technology and a desire to create. 
                    I've since honed my skills in full-stack development, mastering a wide array
                    of technologies and frameworks.
              </span>
            )
          }
          {
            !tldr && (
              <span>
                    I thrive on challenges and take pride in transforming complex problems into elegant, scalable solutions.
                    My expertise encompasses a wide array of technologies, frameworks, and languages, allowing me to adapt to
                    the ever-evolving landscape of software development.
              </span>
            )
          } */}
        </SubTitle>
      </div>
    </PageSection>
  );
};
