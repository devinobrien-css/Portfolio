import { PageSection } from '../components/PageSection';
import { PageTitle } from '../components/PageTitle';
import { SubTitle } from '../components/SubTitle';
import { Title } from '../components/Title';
import { TitleSize } from '../components/constants';

export const AcademicExperience = () => {

  return (
    <PageSection className='p-10 md:p-6'>
      <div className="mt-4 w-full p-3 transition-all duration-300 md:my-auto">
        <PageTitle title="Academics" />
        <br />
        <div className="flex flex-wrap justify-between gap-y-8">
          <div
            className="w-full cursor-pointer rounded bg-white p-4 text-left shadow transition-all hover:bg-gray-50 dark:bg-slate-700/80  dark:hover:bg-gray-700 md:w-[48%]"
          >
            <img src='https://access-portfolio-images.s3.amazonaws.com/UAlbanyMark_F_S03B_HEX_Black_White.png' alt='ualbany' className='mx-auto  w-full rounded p-2 dark:hidden'/>
            <img src='https://access-portfolio-images.s3.amazonaws.com/UAlbanyMark_F_S03B_HEX_Reversal_Gold_White.png' alt='ualbany' className='mx-auto hidden w-full rounded p-2 dark:block'/>
            <hr className="my-2"/>
            
            <Title size={TitleSize.LG}>Master's Degree</Title>
            <SubTitle className='italic'>
              State University at Albany, SUNY - 2024
            </SubTitle>
            <hr className="my-2"/>
            <div className="flex w-full flex-wrap p-2">
              <Title size={TitleSize.SM} className="bg-std-red mx-auto my-2 rounded px-3 py-1 text-center">
                Data Structures
              </Title>
              <Title size={TitleSize.SM} className="bg-std-red mx-auto my-2 rounded px-3 py-1 text-center">
                Discrete Math
              </Title>
              <Title size={TitleSize.SM} className="bg-std-red mx-auto my-2 rounded px-3 py-1 text-center">
                Databases
              </Title>
              <Title size={TitleSize.SM} className="bg-std-red mx-auto my-2 rounded px-3 py-1 text-center">
                Machine Learning
              </Title>
            </div>
          </div>

          <div
            className="w-full cursor-pointer rounded bg-white p-4 text-left shadow transition-all hover:bg-gray-50 dark:bg-slate-700/80  dark:hover:bg-gray-700 md:w-[48%]"
          >
            <img src='https://access-portfolio-images.s3.amazonaws.com/UAlbanyMark_F_S03B_HEX_Reversal_Gold_White.png' alt='ualbany' className='mx-auto hidden w-full rounded p-2 dark:block'/>
            <img src='https://access-portfolio-images.s3.amazonaws.com/UAlbanyMark_F_S03B_HEX_Black_White.png' alt='ualbany' className='mx-auto  w-full rounded p-2 dark:hidden'/>
            <hr className="my-2"/>
            <Title size={TitleSize.LG}>Bachelor's Degree</Title>
            <SubTitle className='italic'>
              State University at Albany, SUNY - 2022
            </SubTitle>
            <hr className="my-2"/>
            <div className="flex w-full flex-wrap gap-2 p-2">
              <Title size={TitleSize.SM} className="bg-std-red mx-auto my-2 rounded px-3 py-1 text-center">
                OS Development
              </Title>
              <Title size={TitleSize.SM} className="bg-std-red mx-auto my-2 rounded px-3 py-1 text-center">
                Multimedia
              </Title>
              <Title size={TitleSize.SM} className="bg-std-red mx-auto my-2 rounded px-3 py-1 text-center">
                AI/Learning
              </Title>
              <Title size={TitleSize.SM} className="bg-std-red mx-auto my-2 rounded px-3 py-1 text-center">
                Hardware Design
              </Title>
            </div>
          </div>
        </div>
      </div>
    </PageSection>
  );
};
