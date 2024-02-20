
import { PageSection } from '../components/titles/PageSection';
import cx from 'classnames';
import { PageTitle } from '../components/titles/PageTitle';
import { useGlobalContext } from '../components/context/useGlobalContext';

export const AboutMe = () => {
  const {tldr} = useGlobalContext();

  return (
    <PageSection>
      <div className="flex flex-wrap p-10 transition-all duration-300 md:m-auto md:flex-nowrap md:p-6">
        <div className="md:w-2/3">
          <PageTitle title="About Me" />
          <br />
          <p className={
            cx('text-paynes-grey font-montserrat transition-height delay-500 duration-[3s] overflow-clip')
          }>
              From the front-end's aesthetic appeal to the back-end's robust functionality, my portfolio showcases
              the diverse range of projects I've had the pleasure of working on. Each project is a testament to my
              problem-solving skills, attention to detail, and relentless pursuit of excellence in software development.
            <br />
            <br />
            {
              !tldr && (
                <span>
                    My journey in software development began with a passion for technology and a desire to create. 
                    I've since honed my skills in full-stack development, mastering a wide array
                    of technologies and frameworks.
                </span>
              )
            }
            <br />
            <br />
            {
              !tldr && (
                <span>
                    I thrive on challenges and take pride in transforming complex problems into elegant, scalable solutions.
                    My expertise encompasses a wide array of technologies, frameworks, and languages, allowing me to adapt to
                    the ever-evolving landscape of software development.
                </span>
              )
            }
          </p>
          <br />
          <br />
        </div>
        <div className="my-auto hidden w-2/5 flex-col p-8 md:flex">
          <img src='https://access-portfolio-images.s3.amazonaws.com/profile.jpeg' alt='Devin' className='size-90 my-auto rounded bg-white object-cover p-4 shadow'/>
        </div>
      </div>
    </PageSection >
  );
};
