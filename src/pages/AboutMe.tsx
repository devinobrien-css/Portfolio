
import { PageSection } from '../components/PageSection';
import cx from 'classnames';
import { PageTitle } from '../components/PageTitle';
import { SideBarAnimation } from '../components/animations/SideBarAnimation';
import { Icon } from '@iconify/react';
import { useGlobalContext } from '../components/context/GlobalContext';

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
];

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
];

const languages = [
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
    title: 'GoLang',
    icon: 'logos:go'
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
];

export const AboutMe = () => {
  const {tldr} = useGlobalContext();

  return (
    <PageSection className="p-2">
      <SideBarAnimation
        content={
          <div className=" flex h-screen flex-col overflow-y-auto px-4 py-2 font-lato text-white md:py-0">

            <div className="my-auto">
              <h2 className="mb-2 hidden text-2xl md:block">
                Quick Statistics
              </h2>
              <div className="rounded md:bg-charcoal md:p-2">
                <h2 className=" mb-1 hidden md:block">Frontend Frameworks:</h2>
                <div className="flex flex-col gap-y-1">
                  {frontendFrameworks.map((framework) => {
                    return (
                      <div key={framework.title} className="flex gap-2">
                        <Icon icon={framework.icon} className="size-8 rounded bg-white p-1 shadow"/>
                        <p className="hidden text-lg md:block">{framework.title}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="my-2 rounded md:bg-charcoal md:p-2">
                <h2 className="mb-1 hidden md:block">Backend Frameworks:</h2>
                <div className="flex flex-col gap-y-1">
                  {backendFrameworks.map((framework) => {
                    return (
                      <div key={framework.title} className="flex gap-2">
                        <Icon icon={framework.icon} className="size-8 rounded bg-white p-1 shadow"/>
                        <p className="hidden text-lg md:block">{framework.title}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="rounded md:bg-charcoal md:p-2">
                <h2 className="mb-1 hidden md:block">Languages:</h2>
                <div className="flex flex-col gap-y-1">
                  {languages.map((language) => {
                    return (
                      <div key={language.title} className="flex gap-2">
                        <Icon icon={language.icon} className="size-8 rounded bg-white p-1 shadow"/>
                        <p className="hidden text-lg md:block">{language.title}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            
          </div>
        }
      >
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
                    My journey in software development began with a passion for technology and a desire to create
                    innovative solutions. I've since honed my skills in full-stack development, mastering a wide array
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
          <div className="m-8 hidden w-3/5 border-b-8 border-l-8 md:m-0 md:block">
            <div className="relative m-8 h-full min-h-[20vh] border-b-8 border-l-8 border-paynes-grey bg-headshot bg-cover bg-top bg-no-repeat md:min-h-[20vh]">
            </div>
          </div>
        </div>
      </SideBarAnimation>
    </PageSection >
  );
};
