import { TypewriterText } from "../../../animations/TypewriterText"
import { PageSection } from "../../../components/PageSection"
import { Title, TitleSize } from "../../../components/Title"
import { Button, ButtonType } from "../../../components/form/Button"
import { SectionTitle } from "../../../components/titles/SectionTitle"


export const Introduction = () => {
  return (
    <PageSection>
      <div className="w-full transition-all duration-300 md:my-auto md:flex md:w-4/5 lg:w-4/5">
        {/* <div className="mx-auto h-full max-h-72 w-8/12 rounded-xl bg-headshot bg-cover bg-top bg-no-repeat md:mx-0 md:max-h-full md:w-1/3"></div> */}
        <div className="w-full p-6 mx-auto md:w-2/3">
          <TypewriterText text='Hello there, my name is' className='text-gray-500 text-xl pl-1 font-code' />
          <Title size={TitleSize.XL} className="mt-2 text-light-cyan">Devin O'Brien</Title>
          <br />
          <SectionTitle className='text-tiffany-blue font-light font-montserrat'>Software Engineer</SectionTitle>
          <SectionTitle className='text-tiffany-blue font-light font-montserrat'>Computer Science Master's Student</SectionTitle>
          <br />
          <br />
          <p className="text-paynes-grey font-montserrat">
            Welcome to my portfolio website, where I invite you to embark on a journey through
            my passion for technology and innovation. As a dedicated fullstack software engineer,
            I've had the privilege of crafting digital solutions that bridge the gap between
            imagination and reality. Here, you'll find a curated collection of my work, a
            testament to my commitment to creating seamless, efficient, and user-centric software
            applications.
          </p>
          <br />
          <br />

          <Button style={ButtonType.PRIMARY}>
            get in touch
          </Button>
        </div>
      </div>
    </PageSection>
  )
}
