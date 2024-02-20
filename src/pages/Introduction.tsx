import { TypewriterText } from '../animations/TypewriterText';
import { PageSection } from '../components/titles/PageSection';
import { Title } from '../components/titles/Title';
import { TitleSize } from '../data/constants';
import { useGlobalContext } from '../components/context/useGlobalContext';

export const Introduction = () => {
  const {tldr} = useGlobalContext();

  return (
    <PageSection className="">
      <div className="transition-all duration-300 md:my-auto md:flex">
        
        <div className="mx-auto my-0 w-full p-10 sm:my-24 md:p-6">
          <TypewriterText text='Hello there, my name is' className='pl-1 font-code text-xl text-gray-500' />
          <Title size={TitleSize.XL} className="mt-2 text-gray-900 dark:text-light-cyan">Devin O'Brien</Title>
          <br />
          <Title size={TitleSize.LG} className='font-montserrat text-gray-800 dark:text-moonstone'>Full Stack Software Engineer</Title>
          <Title size={TitleSize.LG} className='font-montserrat text-gray-800 dark:text-moonstone md:hidden'>-</Title>
          <Title size={TitleSize.LG} className='font-montserrat text-gray-800 dark:text-moonstone'>Computer Science Master's Student</Title>
          <br />
          <p className="font-montserrat text-paynes-grey">
            {
              !tldr && (
                <span>
                  Welcome to my portfolio website, where I invite you to embark on a journey through
                  my passion for technology and innovation. 
                </span>
              )
            }
            <br/>
            <br/>
            <span>
              As a dedicated fullstack software engineer,
              I've had the privilege of crafting digital solutions that bridge the gap between
              imagination and reality. 
            </span>
            <br/>
            <br/>
            {
              !tldr && (
                <span>
                  Here, you'll find a curated collection of my work, a
                  testament to my commitment to creating seamless, efficient, and user-centric software.
                </span>
              )
            }
          </p>
          <br />
          <a href='mailto:devinobrien@icloud.com' className='block w-1/2 rounded bg-tiffany-blue py-4 text-center font-montserrat text-lg text-charcoal'>
            get in touch
          </a>
        </div>
      </div>
    </PageSection>
  );
};
