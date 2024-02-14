import { PageSection } from '../components/PageSection';
import { PageTitle } from '../components/PageTitle';
import { SubTitle } from '../components/SubTitle';
import { Title } from '../components/Title';
import { TitleSize } from '../components/constants';
import { useGlobalContext } from '../components/context/useGlobalContext';


export const AcademicExperience = () => {
  const { tldr } = useGlobalContext();

  return (
    <PageSection className='p-10 md:p-6'>
      <div className="mt-4 w-full p-3 transition-all duration-300 md:my-auto">
        <PageTitle title="Academics" />
        <SubTitle>
          click for more details
        </SubTitle>
        <br />
        <div className="flex flex-wrap justify-between gap-y-8">
          <div
            className="w-full cursor-pointer rounded bg-slate-700/80 p-4 text-left transition-all  hover:bg-gray-700 md:w-[48%]"
          >
            <Title size={TitleSize.LG}>Master's Degree</Title>
            <SubTitle className='italic'>
              State University at Albany, SUNY - 2024
            </SubTitle>
            <hr className="my-2" />

            {!tldr && (
              <p className='text-white'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                  cupiditate nesciunt voluptates fugiat earum cum delectus quidem
                  ullam laudantium provident. Neque explicabo beatae ad non
                  doloremque, error ullam ipsum cumque.
              </p>
            )}

            <hr className="my-2" />
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
            className="w-full cursor-pointer rounded bg-slate-700/80 p-4 text-left transition-all  hover:bg-gray-700 md:w-[48%]"
          >
            <Title size={TitleSize.LG}>Bachelor's Degree</Title>
            <SubTitle>
              State University at Albany, SUNY - 2022
            </SubTitle>
            <hr className="my-2" />
            <p className='text-white'>
              {!tldr && (
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                  cupiditate nesciunt voluptates fugiat earum cum delectus quidem
                  ullam laudantium provident. Neque explicabo beatae ad non
                  doloremque, error ullam ipsum cumque.
                </p>
              )}
            </p>
            <hr className="my-2" />
            <div className="flex w-full flex-wrap p-2">
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
