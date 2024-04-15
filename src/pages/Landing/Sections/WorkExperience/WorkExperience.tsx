import { Title } from '../../../../components/text/Title';
import { TitleSize } from '../../../../data/constants';
import { PageTitle } from '../../../../components/text/PageTitle';
import { employers } from '../../../../data/employers';
import { WorkCard } from './WorkCard';
import { PageSection } from '../../../../components/text/PageSection';

export const WorkExperience = (): JSX.Element => {
  return (
    <PageSection className='py-32'>
      <div className='mt-4 w-full transition-all duration-300 md:my-auto'>
        <Title
          size={TitleSize.LG}
          className='!font-bebas !text-4xl md:!text-6xl'
        >
          Where I've Worked
        </Title>
        <PageTitle title='Past Employers' />
        <br />
        <br />
        <div className='flex flex-col gap-4'>
          {employers.map((employer, index) => {
            return (
              <WorkCard
                key={employer.name}
                employer={employer}
                initialOpen={index === 0}
              />
            );
          })}
        </div>
      </div>
    </PageSection>
  );
};
