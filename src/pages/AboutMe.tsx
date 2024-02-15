
import { PageSection } from '../components/PageSection';
import cx from 'classnames';
import { PageTitle } from '../components/PageTitle';
import { useGlobalContext } from '../components/context/useGlobalContext';

export const AboutMe = () => {
  const {tldr} = useGlobalContext();

  return (
    <PageSection className="p-2">
      <div className="flex flex-wrap transition-all duration-300 md:my-auto md:flex-nowrap">
        <div className="w-[95%] p-10 md:mx-auto md:p-6">
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

        <div className="hidden w-3/5 flex-col p-8 md:flex">
          <img src='https://access-portfolio-images.s3.amazonaws.com/profile.jpeg' alt='Devin' className='size-90 my-auto rounded bg-white object-cover p-4 shadow'/>
          {/* <img src='https://access-portfolio-images.s3.amazonaws.com/profile-removebg-preview.png' alt='Devin' className='size-90 my-auto rounded  object-cover p-4'/> */}
          
        </div>
      </div>
    </PageSection >
  );
};
