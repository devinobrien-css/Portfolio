import { Icon } from '@iconify/react';
import { SubTitle } from '../../../../components/text/SubTitle';
import { TitleSize } from '../../../../data/constants';
import { Title } from '../../../../components/text/Title';

export const DataSection = () => {
  //SQL? NoSQL? Somewhere in-between?
  return (
    <div>
      <Title size={TitleSize.LG}>
        Years of experience across various data stores
      </Title>
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