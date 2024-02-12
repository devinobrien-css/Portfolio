import { TypewriterText } from "../animations/TypewriterText"
import { PageSection } from "../components/PageSection"
import { Title, TitleSize } from "../components/Title"
import { Button, ButtonType } from "../components/form/Button"


export const Introduction = () => {
  return (
    <PageSection className="">
      <div className="transition-all duration-300 md:my-auto md:flex">
        <div className="w-full p-10 md:p-6 mx-auto">
          <TypewriterText text='Hello there, my name is' className='text-gray-500 text-xl pl-1 font-code' />
          <Title size={TitleSize.XL} className="mt-2 text-light-cyan">Devin O'Brien</Title>
          <br />
          <Title size={TitleSize.LG} className='text-moonstone font-montserrat'>Full Stack Software Engineer</Title>
          <Title size={TitleSize.LG} className='text-moonstone font-montserrat'>-</Title>
          <Title size={TitleSize.LG} className='text-moonstone font-montserrat'>Computer Science Master's Student</Title>
          <br />
          <p className="text-paynes-grey font-montserrat">
            Welcome to my portfolio website, where I invite you to embark on a journey through
            my passion for technology and innovation. 
            <br/>
            <br/>
            As a dedicated fullstack software engineer,
            I've had the privilege of crafting digital solutions that bridge the gap between
            imagination and reality. 
            <br/>
            <br/>
            Here, you'll find a curated collection of my work, a
            testament to my commitment to creating seamless, efficient, and user-centric software
            applications.
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
