import { PageSection } from "../../../components/PageSection"
import { useInView } from 'react-intersection-observer';
import cx from 'classnames';
import { PageTitle } from "../../../components/PageTitle";

export const AboutMe = () => {
  const { ref, inView, entry } = useInView({
    trackVisibility: true,
    threshold: 0,
    delay: 100,
    onChange: (inView: boolean, entry: IntersectionObserverEntry) => console.log('dingleberg')
  });

  return (
    <PageSection className="p-2">
      <div ref={ref} className="w-full transition-all duration-300 md:my-auto flex flex-wrap-reverse md:w-4/5 lg:w-4/5">
        <div className="md:w-1/2 p-6 mx-auto">
          <PageTitle title="About Me" />

          <br />
          <p className={
            cx("text-paynes-grey font-montserrat transition-height delay-500 duration-[3s] overflow-clip", {
              'h-[0%]': !inView,
              'h-[100%]': inView,
            })
          }>
            From the front-end's aesthetic appeal to the back-end's robust functionality, my portfolio showcases
            the diverse range of projects I've had the pleasure of working on. Each project is a testament to my
            problem-solving skills, attention to detail, and relentless pursuit of excellence in software development.
            <br />
            <br />

            I thrive on challenges and take pride in transforming complex problems into elegant, scalable solutions.
            My expertise encompasses a wide array of technologies, frameworks, and languages, allowing me to adapt to
            the ever-evolving landscape of software development.
          </p>
          <br />
          <br />
        </div>
        <div className="w-full md:w-1/2 border-l-8 border-b-8 m-8 md:m-0">
          <div className="border-l-8 border-b-8 border-paynes-grey relative h-full min-h-[40vh] md:min-h-[60vh] m-8  bg-headshot bg-cover bg-top bg-no-repeat">
          </div>
        </div>
      </div>
    </PageSection >
  )
}
