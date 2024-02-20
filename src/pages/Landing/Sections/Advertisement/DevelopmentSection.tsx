import { SectionTitle } from '../../../../components/text/SectionTitle';
import { Icon } from '@iconify/react';
import { SubTitle } from '../../../../components/text/SubTitle';

export const DevelopmentSection = () => {
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