import { Icon } from '@iconify/react';
import { useState } from 'react';
import {
  LabeledIcon,
} from '../../../components/custom.library';
import { SectionTitle } from '../../../components/titles/SectionTitle';
import { SubTitle } from '../../../components/SubTitle';
import { PageSection } from '../../../components/PageSection';
import cx from 'classnames'
import { Button, ButtonType } from '../../../components/form/Button';

const DevelopmentSection = () => {
  return (
    <div>
      <SectionTitle>
        Better tools, Better practice, Better Performance.
      </SectionTitle>
      <SubTitle>
        Building enterprise-level software requires knowledge of the latest,
        top-of-the-line tools available...
      </SubTitle>
      <div className="mt-4 flex">
        <div className="mx-auto rounded bg-gray-900 p-2">
          <Icon
            icon={'vscode-icons:file-type-reactjs'}
            width="50"
            height="50"
          />
        </div>
        <div className="mx-auto rounded bg-gray-900 p-2">
          <Icon icon={'logos:svelte-icon'} width="50" height="50" />
        </div>
        <div className="mx-auto rounded bg-gray-900 p-2">
          <Icon icon={'logos:vue'} width="50" height="50" />
        </div>
        <div className="mx-auto rounded bg-gray-900 p-2">
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
        <div className="mx-auto rounded bg-gray-900 p-2">
          <Icon icon={'logos:postgresql'} width="50" height="50" />
        </div>
        <div className="mx-auto rounded bg-gray-900 p-2">
          <Icon icon={'logos:mysql'} width="50" height="50" />
        </div>
        <div className="mx-auto rounded bg-gray-900 p-2">
          <Icon icon={'logos:graphql'} width="50" height="50" />
        </div>
        <div className="mx-auto rounded bg-gray-900 p-2 text-white">
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
        <div className="mx-auto rounded bg-gray-900 p-2 text-white">
          <Icon
            icon={'logos:aws'}
            width="50"
            height="50"
            className="rounded border-white bg-white p-1 text-white"
          />
        </div>
        <div className="mx-auto rounded bg-gray-900 p-2">
          <Icon icon={'logos:google-cloud'} width="50" height="50" />
        </div>
        <div className="mx-auto rounded bg-gray-900 p-2">
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
        <div className="mx-auto rounded bg-gray-900 p-2">
          <Icon icon={'vscode-icons:file-type-jest'} width="50" height="50" />
        </div>
        <div className="mx-auto rounded bg-gray-900 p-2 text-white">
          <Icon icon={'logos:github-octocat'} width="50" height="50" />
        </div>
        <div className="mx-auto rounded bg-gray-900 p-2 text-white">
          <Icon icon={'mdi:microsoft-dot-net'} width="50" height="50" />
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
    button: 'statistics experience',
    icon: 'carbon:chart-line-data',
    description: AnalysisSection,
  },
];

interface SelectedTab {
  name: string;
  index: number;
  button_title: string;
}
export const OverallAd = () => {
  const [currentTab, setTab] = useState<SelectedTab>({
    index: 0,
    name: tabData[0].name,
    button_title: tabData[0].button
  });

  const Section = tabData.filter((tab) => {
    return tab.name === currentTab.name;
  })[0].description;


  return (
    <PageSection>
      <div className="md:my-auto md:w-9/12 ">
        <div className="md:flex">
          <div className="mx-auto w-11/12 md:mx-0 md:w-5/12 relative h-fit">

            <div className={
              cx(`z-10 border-l-2 border-light-cyan w-max h-1/4 absolute transition-all left-0`, {
                'top-0': currentTab.index === 0,
                'top-1/4': currentTab.index === 1,
                'top-1/2': currentTab.index === 2,
                'top-3/4': currentTab.index === 3,
              })}
            ></div>
            <div className={`z-0 border-l-2 border-gray-500  h-[100%] absolute top-0 left-0`}></div>


            {tabData.map((tab, index) => {
              return (
                <div className='flex relative'>
                  <LabeledIcon
                    key={tab.name}
                    className={
                      cx('p-3 transition-colors ', {
                        'text-light-cyan': tab.name === currentTab.name,
                        'text-paynes-grey': tab.name !== currentTab.name,
                      })}
                    icon={tab.icon}
                    onClick={() => setTab({
                      name: tab.name,
                      index: index
                    })}
                  >
                    {tab.name}
                  </LabeledIcon>
                </div>
              );
            })}
          </div>
          <div className="pl-8 md:w-1/2">
            <Section />
            <br />
            <Button style={ButtonType.PRIMARY}>
              get in touch
            </Button>
            <button className="mx-auto my-4 block scale-95 transform rounded px-4 py-2 text-gray-400 outline-none ring ring-gray-400 transition-all hover:scale-100">
              {
                tabData.filter((tab) => {
                  return tab.name === currentTab.name;
                })[0].button
              }
            </button>
          </div>
        </div>
      </div>
    </PageSection >
  );
};
