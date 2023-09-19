import { Icon } from '@iconify/react';
import { useState } from 'react';
import {
  LabeledIcon,
} from '../../../components/custom.library';
import { SectionTitle } from '../../../components/titles/SectionTitle';
import { SubTitle } from '../../../components/SubTitle';
import { PageSection } from '../../../components/PageSection';

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

export const OverallAd = () => {
  const [currentTab, setTab] = useState(tabData[0].name);

  const Section = tabData.filter((tab) => {
    return tab.name === currentTab;
  })[0].description;

  return (
    <PageSection>
      <div className="md:my-auto md:w-9/12 ">
        <div className="md:flex">
          <div className="mx-auto w-11/12 md:mx-0 md:w-5/12 [&>*]:my-2">
            {tabData.map((tab, index) => {
              return (
                <LabeledIcon
                  key={tab.name}
                  className={`rounded p-3 ${tab.name === currentTab
                    ? 'text-white outline-none ring ring-blue-300'
                    : 'text-gray-500'
                    }`}
                  icon={tab.icon}
                  onClick={() => setTab(tab.name)}
                >
                  {tab.name}
                </LabeledIcon>
              );
            })}
          </div>
          <div className="pl-8 md:w-1/2">
            <Section />
            <button className="mx-auto my-4 block scale-95 transform rounded px-4 py-2 text-gray-400 outline-none ring ring-gray-400 transition-all hover:scale-100">
              {
                tabData.filter((tab) => {
                  return tab.name === currentTab;
                })[0].button
              }
            </button>
          </div>
        </div>
      </div>
    </PageSection>
  );
};
