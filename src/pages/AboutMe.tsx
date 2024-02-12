
import { PageSection } from "../components/PageSection"
import cx from 'classnames';
import { PageTitle } from "../components/PageTitle";
import { SideBarAnimation } from "../components/animations/SideBarAnimation";
import { Icon } from "@iconify/react";

const frontendFrameworks = [
  {
    icon: 'logos:react',
    title: 'React',
  },
  {
    icon: 'logos:angular-icon',
    title: 'Angular',
  }, 
  {
    icon: 'logos:vue',
    title: 'Vue',
  },
  {
    icon: 'logos:svelte-icon',
    title: 'Svelte',
  }
]

const backendFrameworks = [
  {
    icon: 'logos:nodejs',
    title: 'Node.js',
  },
  {
    icon: 'devicon:express',
    title: 'Express',
  },
  {
    icon: 'logos:django',
    title: 'Django',
  },
  {
    icon: 'logos:flask',
    title: 'Flask',
  },
  {
    icon: 'logos:spring-icon',
    title: 'Springboot',
  },
  {
    title: 'ASP.NET',
    icon: 'logos:dotnet'
  },
  {
    title: 'Laravel',
    icon: 'logos:laravel'
  }
]

const languages = [
  {
    icon: 'vscode-icons:file-type-html',
    title: 'HTML',
  },
  {
    icon: 'vscode-icons:file-type-css',
    title: 'CSS',
  },
  {
    icon: 'vscode-icons:file-type-js-official',
    title: 'JavaScript',
  },
  {
    icon: 'logos:typescript-icon',
    title: 'TypeScript',
  },
  {
    icon: 'vscode-icons:file-type-python',
    title: 'Python',
  }, 
  {
    icon: 'logos:java',
    title: 'Java',
  },
  {
    icon: 'logos:c-sharp',
    title: 'C#',
  }, 
  {
    icon: 'logos:php',
    title: 'PHP',
  }
]

export const AboutMe = () => {
  return (
    <PageSection className="p-2">
      <SideBarAnimation
        content={
          <div className="bg-gray-800 h-full overflow-y-auto px-4 md:py-0 py-2 font-lato text-white">
            <h2 className="text-2xl py-2 sticky top-0 bg-gray-800 md:block hidden">
              Quick Statistics
            </h2>

            <div className="md:border md:p-2 rounded">
              <h2 className="border-b mb-1 md:block hidden">Frontend Frameworks:</h2>
              <div className="flex flex-col gap-y-1">
                {frontendFrameworks.map((framework) => {
                  return (
                    <div key={framework.title} className="flex gap-2">
                      <Icon icon={framework.icon} className="w-8 h-8 shadow p-1 bg-white rounded"/>
                      <p className="text-lg md:block hidden">{framework.title}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="md:border md:p-2 rounded my-2">
              <h2 className="border-b mb-1 md:block hidden">Backend Frameworks:</h2>
              <div className="flex flex-col gap-y-1">
                {backendFrameworks.map((framework) => {
                  return (
                    <div key={framework.title} className="flex gap-2">
                      <Icon icon={framework.icon} className="w-8 h-8 shadow p-1 bg-white rounded"/>
                      <p className="text-lg md:block hidden">{framework.title}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="md:border md:p-2 rounded">
              <h2 className="border-b mb-1 md:block hidden">Languages:</h2>
              <div className="flex flex-col gap-y-1">
                {languages.map((language) => {
                  return (
                    <div key={language.title} className="flex gap-2">
                      <Icon icon={language.icon} className="w-8 h-8 shadow p-1 bg-white rounded"/>
                      <p className="text-lg md:block hidden">{language.title}</p>
                    </div>
                  )
                })}
              </div>
            </div>
            
          </div>
        }
      >
        <div className="transition-all duration-300 md:my-auto flex md:flex-nowrap flex-wrap">
          <div className="p-10 md:p-6 md:mx-auto w-[95%]">
            <PageTitle title="About Me" />

            <br />
            <p className={
              cx("text-paynes-grey font-montserrat transition-height delay-500 duration-[3s] overflow-clip")
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
          <div className="w-3/5 border-l-8 border-b-8 m-8 md:m-0 md:block hidden">
            <div className="border-l-8 border-b-8 border-paynes-grey relative h-full min-h-[20vh] md:min-h-[20vh] m-8 bg-headshot bg-cover bg-top bg-no-repeat">
            </div>
          </div>
        </div>
      </SideBarAnimation>
    </PageSection >
  )
}
