
import { useGlobalContext } from '../../../util/context/useGlobalContext';
import { PageSection } from '../../../components/text/PageSection';
import { PageTitle } from '../../../components/text/PageTitle';
import { SubTitle } from '../../../components/text/SubTitle';

export const AboutMe = () => {
  const {tldr} = useGlobalContext();

  return (
    <PageSection className="flex flex-wrap transition-all duration-300 md:flex-nowrap">
      <div className="my-auto flex flex-col gap-y-2 md:w-2/3">
        <PageTitle title="About Me" />
        <SubTitle className='flex flex-col gap-y-3'>
          <span>              
              From the front-end's aesthetic appeal to the back-end's robust functionality, my portfolio showcases
              the diverse range of projects I've had the pleasure of working on. Each project is a testament to my
              problem-solving skills, attention to detail, and relentless pursuit of excellence in software development.
          </span>

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
          }
        </SubTitle>
      </div>

      <div className="my-auto hidden w-2/5 flex-col p-8 md:flex">
        <img src='https://access-portfolio-images.s3.amazonaws.com/profile.jpeg' alt='Devin' className='size-90 my-auto rounded bg-white object-cover p-4 shadow dark:bg-tiffany-blue'/>
      </div>
    </PageSection>
  );
};
