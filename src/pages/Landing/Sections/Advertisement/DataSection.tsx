import { Icon } from '@iconify/react';
import { SectionTitle } from '../../../../components/text/SectionTitle';
import { SubTitle } from '../../../../components/text/SubTitle';

export const DataSection = () => {
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