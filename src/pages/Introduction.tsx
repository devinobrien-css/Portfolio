import { TypewriterText } from '../animations/TypewriterText';
import { PageSection } from '../components/PageSection';
import { Title } from '../components/Title';
import { ButtonType, TitleSize } from '../components/constants';
import { useGlobalContext } from '../components/context/GlobalContext';
import { Button } from '../components/form/Button';

export const Introduction = () => {
  const {tldr} = useGlobalContext();

  return (
    <PageSection className="">
      <div className="transition-all duration-300 md:my-auto md:flex">
        <div className="mx-auto my-0 w-full p-10 sm:my-24 md:p-6">
          <TypewriterText text='Hello there, my name is' className='pl-1 font-code text-xl text-gray-500' />
          <Title size={TitleSize.XL} className="mt-2 text-light-cyan">Devin O'Brien</Title>
          <br />
          <Title size={TitleSize.LG} className='font-montserrat text-moonstone'>Full Stack Software Engineer</Title>
          <Title size={TitleSize.LG} className='font-montserrat text-moonstone'>-</Title>
          <Title size={TitleSize.LG} className='font-montserrat text-moonstone'>Computer Science Master's Student</Title>
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
                  testament to my commitment to creating seamless, efficient, and user-centric software
                  applications.
                </span>
              )
            }
          </p>
          <br />
          <Button style={ButtonType.WIDE}>
            get in touch
          </Button>
        </div>
      </div>
    </PageSection>
  );
};
