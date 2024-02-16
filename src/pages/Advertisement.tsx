import { Icon } from '@iconify/react';
import { useState } from 'react';
import { SectionTitle } from '../components/titles/SectionTitle';
import { SubTitle } from '../components/SubTitle';
import { PageSection } from '../components/PageSection';
import { TopBarAnimation } from '../components/animations/TopBarAnimation';
import { BottomBarAnimation } from '../components/animations/BottomBarAnimation';
import cx from 'classnames';

const DevelopmentSection = () => {
  return (
    <div>
      <SectionTitle>
        Better tools, Better practice, Better performance.
      </SectionTitle>
      <SubTitle>
        Building enterprise-level software requires knowledge of the latest,
        top-of-the-line tools available...
      </SubTitle>
      <div className="mt-4 flex">
        <div className="mx-auto rounded bg-gray-50 p-2 shadow dark:bg-gray-900">
          <Icon
            icon={'vscode-icons:file-type-reactjs'}
            width="50"
            height="50"
          />
        </div>
        <div className="mx-auto rounded bg-gray-50 p-2 shadow dark:bg-gray-900">
          <Icon icon={'logos:svelte-icon'} width="50" height="50" />
        </div>
        <div className="mx-auto rounded bg-gray-50 p-2 shadow dark:bg-gray-900">
          <Icon icon={'logos:vue'} width="50" height="50" />
        </div>
        <div className="mx-auto rounded bg-gray-50 p-2 shadow dark:bg-gray-900">
          <Icon icon={'logos:angular-icon'} width="50" height="50" />
        </div>
      </div>
    </div>
  );
};

const DataSection = () => {
  //SQL? NoSQL? Somewhere in-between?
  return (
    <div>
      <SectionTitle>
        Years of experience across various data stores
      </SectionTitle>
      <SubTitle>
        Successfully selecting a datastore and optimizing its speed and cost is
        essential to proper management of an application...
      </SubTitle>
      <div className="mt-4 flex">
        <div className="mx-auto rounded bg-gray-50 p-2 shadow dark:bg-gray-900">
          <Icon icon={'logos:postgresql'} width="50" height="50" />
        </div>
        <div className="mx-auto rounded bg-gray-50 p-2 shadow dark:bg-gray-900">
          <Icon icon={'logos:mysql'} width="50" height="50" />
        </div>
        <div className="mx-auto rounded bg-gray-50 p-2 shadow dark:bg-gray-900">
          <Icon icon={'logos:graphql'} width="50" height="50" />
        </div>
        <div className="mx-auto rounded bg-gray-50 p-2 shadow dark:bg-gray-900">
          <Icon icon={'simple-icons:neo4j'} width="50" height="50" />
        </div>
      </div>
    </div>
  );
};

const CloudSection = () => {
  return (
    <div>
      <SectionTitle>
        Low code? No code? Looking to enhance your app to the cloud?
      </SectionTitle>
      <SubTitle>
        With serverless development on the rise, Google, Microsoft and Amazon
        have stepped up as cloud providers...
      </SubTitle>
      <div className="mt-4 flex">
        <div className="mx-auto rounded bg-gray-50 p-2 shadow dark:bg-gray-900">
          <Icon
            icon={'logos:aws'}
            width="50"
            height="50"
            className="rounded border-white bg-white p-1 text-white"
          />
        </div>
        <div className="mx-auto rounded bg-gray-50 p-2 shadow dark:bg-gray-900">
          <Icon icon={'logos:google-cloud'} width="50" height="50" />
        </div>
        <div className="mx-auto rounded bg-gray-50 p-2 shadow dark:bg-gray-900">
          <Icon icon={'logos:microsoft-icon'} width="50" height="50" />
        </div>
      </div>
    </div>
  );
};
const AnalysisSection = () => {
  return (
    <div>
      <SectionTitle>
        Track, analyze and assess issues before they occur
      </SectionTitle>
      <SubTitle>
        Continuous integration and development calls for carefully curated unit
        and end to end test suites...
      </SubTitle>
      <div className="mt-4 flex">
        <div className="mx-auto rounded bg-gray-50 p-2 shadow dark:bg-gray-900">
          <Icon icon={'vscode-icons:file-type-jest'} width="50" height="50" />
        </div>
        <div className="mx-auto rounded bg-gray-50 p-2 shadow dark:bg-gray-900">
          <Icon icon={'logos:github-octocat'} width="50" height="50" />
        </div>

        <div className="mx-auto rounded bg-gray-50 p-2 shadow dark:bg-gray-900">
          <Icon icon={'logos:git-icon'} width="50" height="50" />
        </div>  
        
        <div className="mx-auto rounded bg-gray-50 p-2 shadow dark:bg-gray-900">
          <Icon icon={'logos:docker-icon'} width="50" height="50" />
        </div>

        
      </div>
    </div>
  );
};

const tabData = [
  {
    name: 'app development',
    button: 'software experience',
    icon: 'ion:code-slash-outline',
    description: DevelopmentSection,
  },
  {
    name: 'data management',
    button: 'storage experience',
    icon: 'carbon:datastore',
    description: DataSection,
  },
  {
    name: 'cloud integration',
    button: 'serverless experience',
    icon: 'carbon:cloud-data-ops',
    description: CloudSection,
  },
  {
    name: 'performance analysis',
    button: 'analytics experience',
    icon: 'carbon:chart-line-data',
    description: AnalysisSection,
  },
];

interface SelectedTab {
  name: string;
  index: number;
  button_title?: string;
}
export const OverallAd = () => {
  const [tab, setTab] = useState<SelectedTab>({
    index: 0,
    name: tabData[0].name,
    button_title: tabData[0].button
  });

  const Section = tabData.filter((t) => {
    return t.name === tab.name;
  })[0].description;


  return (
      <BottomBarAnimation
        threshold={23}
        content={
          <div className='hidden w-full justify-end px-12 py-8 sm:flex'>
            <div className='float-right size-32 bg-programming bg-cover bg-center bg-no-repeat md:size-64'></div>
          </div>
        }>
        <TopBarAnimation
          className='hidden p-2 sm:block'
          threshold={8}
          content={
            <div className='z-[110] w-full py-8  font-montserrat'>
              <h2 className='text-4xl text-gray-900 dark:text-tiffany-blue'>Right Tool, Right Job</h2>
              <p className='text-xl text-gray-700 dark:text-moonstone'>Mastering Cloud Infra, Frontend, API, and DB Development Expertise</p>
            </div>
          }
        >
    <PageSection className='p-6'>
          <div className="md:my-auto">
            <div className="md:flex">
              <div className="relative mx-auto h-fit w-11/12 md:mx-0 md:w-1/2">

                <div className={
                  cx('z-10 border-l-2 dark:border-light-cyan border-gray-800 w-max h-1/4 absolute transition-all left-0', {
                    'top-0': tab.index === 0,
                    'top-1/4': tab.index === 1,
                    'top-1/2': tab.index === 2,
                    'top-3/4': tab.index === 3,
                  })}
                ></div>
                <div className={'absolute left-0 top-0  z-0 h-[100%] border-l-2 border-gray-500'}></div>


                {tabData.map((t, index) => {
                  return (
                    <div key={t.name} className='relative flex'>
                      <button
                        key={t.name}
                        className={
                          cx('p-2 transition-colors flex', {
                            'dark:text-light-cyan text-gray-700': t.name === tab.name,
                            'dark:text-paynes-grey text-gray-500': t.name !== tab.name,
                          })}
                        onClick={() => setTab({
                          name: t.name,
                          index: index
                        })}
                      >
                        <Icon icon={t.icon} width="40" height="40" />
                        <span className='my-auto ml-4 font-bebas text-2xl'>{t.name}</span>
                      </button>
                    </div>
                  );
                })}
              </div>
              <div className="max-w-xl px-4 md:w-1/2">
                <Section />
                <br />
                {/* <Button style={ButtonType.PRIMARY} className='mx-auto block'>
                  {
                    tabData.filter((t) => {
                      return t.name === tab.name;
                    })[0].button
                  }
                </Button> */}
              </div>
            </div>
          </div>
    </PageSection >
        </TopBarAnimation>
      </BottomBarAnimation>
  );
};
