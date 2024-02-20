import { Icon } from '@iconify/react';
import { SectionTitle } from '../../components/titles/SectionTitle';
import { SubTitle } from '../../components/titles/SubTitle';

export const CloudSection = () => {
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