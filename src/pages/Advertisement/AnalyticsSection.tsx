import { Icon } from '@iconify/react';
import { SectionTitle } from '../../components/titles/SectionTitle';
import { SubTitle } from '../../components/titles/SubTitle';

export const AnalyticsSection = () => {
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