import { TypewriterText } from "../../../animations/TypewriterText"
import { PageSection } from "../../../components/PageSection"
import { Title, TitleSize } from "../../../components/Title"
import { Button, ButtonType } from "../../../components/form/Button"
import { SectionTitle } from "../../../components/titles/SectionTitle"


export const Introduction = () => {
  return (
    <PageSection className="p-4">
      <div className="w-full transition-all duration-300 md:my-auto md:flex md:w-4/5 lg:w-4/5">
        <div className="w-full p-6 mx-auto md:w-2/3">
          <TypewriterText text='Hello there, my name is' className='text-gray-500 text-xl pl-1 font-code' />
          <Title size={TitleSize.XL} className="mt-2 text-light-cyan">Devin O'Brien</Title>
          <br />
          <SectionTitle className='text-moonstone font-light font-montserrat'>Software Engineer</SectionTitle>
          <SectionTitle className='text-moonstone font-light font-montserrat'>Computer Science Master's Student</SectionTitle>
          <br />
          <p className="text-paynes-grey font-montserrat">
            Welcome to my portfolio website, where I invite you to embark on a journey through
            my passion for technology and innovation. 
            <br/>
            <br/>
            As a dedicated fullstack software engineer,
            I've had the privilege of crafting digital solutions that bridge the gap between
            imagination and reality. 
            {/* <br/>
            <br/>
            Here, you'll find a curated collection of my work, a
            testament to my commitment to creating seamless, efficient, and user-centric software
            applications. */}
          </p>
          <br />

          <Button style={ButtonType.WIDE}>
            get in touch
          </Button>
        </div>
      </div>
    </PageSection>
  )
}
