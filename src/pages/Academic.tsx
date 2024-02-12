import { PageSection } from '../components/PageSection';
import { PageTitle } from '../components/PageTitle';
import { SubTitle } from '../components/SubTitle';
import { Title, TitleSize } from '../components/Title';
import {
  Accordion,
} from '../components/custom.library';

export const AcademicExperience = () => {
  return (
    <PageSection className='p-5'>
      <div className="mt-4 w-full p-3 transition-all duration-300 md:my-auto md:w-4/5 lg:w-4/5">
        <PageTitle title="Academics" />
        <SubTitle>click for further details</SubTitle>
        <br />
        <div className="flex justify-between flex-wrap gap-y-8">
          <Accordion
            className="mx-1 md:w-2/5 cursor-pointer rounded p-2 ring ring-blue-300 transition-all hover:scale-105 hover:oxford-blue"
            title={
              <>
                <Title size={TitleSize.LG}>Master's Degree</Title>
                <SubTitle className='italic'>
                  State University at Albany, SUNY - 2023
                </SubTitle>
              </>
            }
          >
            <SubTitle className='mt-1'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              cupiditate nesciunt voluptates fugiat earum cum delectus quidem
              ullam laudantium provident. Neque explicabo beatae ad non
              doloremque, error ullam ipsum cumque.
            </SubTitle>
            <div className="flex w-full flex-wrap p-2">
              <Title size={TitleSize.SM} className="mx-auto my-2 rounded bg-std-red px-3 py-1 text-center">
                Data Structures
              </Title>
              <Title size={TitleSize.SM} className="mx-auto my-2 rounded bg-std-red px-3 py-1 text-center">
                Discrete Math
              </Title>
              <Title size={TitleSize.SM} className="mx-auto my-2 rounded bg-std-red px-3 py-1 text-center">
                Databases
              </Title>
              <Title size={TitleSize.SM} className="mx-auto my-2 rounded bg-std-red px-3 py-1 text-center">
                Machine Learning
              </Title>
            </div>
          </Accordion>
          <Accordion
            className="mx-1 md:w-2/5 cursor-pointer rounded p-2 ring ring-blue-300 transition-all hover:scale-105 hover:oxford-blue"
            title={
              <>
                <Title size={TitleSize.LG}>Bachelor's Degree</Title>
                <SubTitle>
                  State University at Albany, SUNY - 2022
                </SubTitle>
              </>
            }
          >
            <SubTitle>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              cupiditate nesciunt voluptates fugiat earum cum delectus quidem
              ullam laudantium provident. Neque explicabo beatae ad non
              doloremque, error ullam ipsum cumque.
            </SubTitle>
            <div className="flex w-full flex-wrap p-2">
              <Title size={TitleSize.SM} className="mx-auto my-2 rounded bg-std-red px-3 py-1 text-center">
                OS Development
              </Title>
              <Title size={TitleSize.SM} className="mx-auto my-2 rounded bg-std-red px-3 py-1 text-center">
                Multimedia
              </Title>
              <Title size={TitleSize.SM} className="mx-auto my-2 rounded bg-std-red px-3 py-1 text-center">
                AI/Learning
              </Title>
              <Title size={TitleSize.SM} className="mx-auto my-2 rounded bg-std-red px-3 py-1 text-center">
                Hardware Design
              </Title>
            </div>
          </Accordion>
        </div>
      </div>
    </PageSection>
  );
};
