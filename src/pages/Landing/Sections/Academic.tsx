import { PageSection } from '../../../components/text/PageSection';
import { PageTitle } from '../../../components/text/PageTitle';
import { SubTitle } from '../../../components/text/SubTitle';
import { Title } from '../../../components/text/Title';
import { TitleSize } from '../../../data/constants';
import { Card } from '../../../components/cards/Card';
import { Pill } from '../../../components/Pill';

export const AcademicExperience = () => {
  return (
    <PageSection>
      <div className='mt-4 w-full transition-all duration-300 md:my-auto'>
        <PageTitle title='Academics' />
        <br />
        <div className='flex flex-wrap justify-between gap-y-8'>
          <Card className='!dark:hover:bg-slate-800 h-fit dark:!bg-gray-800'>
            <Title size={TitleSize.LG}>Master's Degree</Title>
            <SubTitle className='italic'>
              State University at Albany, SUNY - 2024
            </SubTitle>

            <hr className='my-2' />
            <div className='flex w-full flex-wrap justify-evenly gap-2 p-2'>
              {[
                'Computer Vision',
                'Data Structures',
                'Discrete Math',
                'Databases',
                'Artificial Intelligence',
                'Machine Learning',
              ].map((title, index) => (
                <Pill key={index}>{title}</Pill>
              ))}
            </div>
          </Card>

          <div className='w-full cursor-pointer rounded bg-white p-4 text-left shadow transition-all hover:bg-gray-50 dark:bg-gray-800  dark:hover:bg-slate-800 md:w-[48%]'>
            <Title size={TitleSize.LG}>Bachelor's Degree</Title>
            <SubTitle className='italic'>
              State University at Albany, SUNY - 2022
            </SubTitle>
            <hr className='my-2' />
            <div className='flex w-full flex-wrap justify-evenly gap-2 p-2'>
              {[
                'Operating Systems',
                'Multimedia Programming',
                'Motion Detection',
                'Artificial Intelligence',
                'Hardware Design',
              ].map((title, index) => (
                <Pill key={index}>{title}</Pill>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageSection>
  );
};
