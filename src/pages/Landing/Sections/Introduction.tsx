import { useGlobalContext } from '../../../components/context/useGlobalContext';
import { TypewriterText } from '../../../animations/TypewriterText';
import { PageSection } from '../../../components/text/PageSection';
import { SubTitle } from '../../../components/text/SubTitle';
import { Title } from '../../../components/text/Title';
import { TitleSize } from '../../../data/constants';

export const Introduction = () => {
  const {tldr} = useGlobalContext();

  return (
    <PageSection className="mx-auto flex flex-col gap-y-6">

      <div>
        <TypewriterText text='Hello there, my name is' className='pl-1 font-code text-xl text-gray-500' />
        <Title size={TitleSize.XL} className="mt-2 text-gray-900 dark:text-light-cyan">Devin O'Brien</Title>
      </div>

      <div>
        <Title size={TitleSize.LG} >Full Stack Software Engineer</Title>
        <Title size={TitleSize.LG} className='md:hidden'>-</Title>
        <Title size={TitleSize.LG} >Computer Science Master's Student</Title>
      </div>

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

      <a href='mailto:devinobrien@icloud.com' className='block w-1/2 rounded bg-tiffany-blue py-4 text-center font-montserrat text-lg text-charcoal ring-slate-50 transition-colors hover:bg-moonstone/90 active:ring-2'>
            get in touch
      </a>
    </PageSection>
  );
};
