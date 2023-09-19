import { PageSection } from '../../../components/PageSection';
import { SubTitle } from '../../../components/SubTitle';
import { Title, TitleSize } from '../../../components/Title';
import {
  Accordion,
} from '../../../components/custom.library';

export const AcademicExperience = () => {
  return (
    <PageSection>
      <div className="mt-4 w-full transition-all duration-300 md:my-auto md:w-4/5 lg:w-4/5">
        <Title size={TitleSize.XL}>Acadmic Experience</Title>
        <br />
        <div className="flex justify-between ">
          <Accordion
            className="mx-1 w-2/5 cursor-pointer rounded p-2 ring ring-blue-300 transition-all hover:scale-105 hover:bg-gray-700"
            title={
              <>
                <Title size={TitleSize.LG}>Master's Degree</Title>
                <SubTitle>
                  State University at Albany, SUNY
                </SubTitle>
              </>
            }
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              cupiditate nesciunt voluptates fugiat earum cum delectus quidem
              ullam laudantium provident. Neque explicabo beatae ad non
              doloremque, error ullam ipsum cumque.
            </p>
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
            className="mx-1 w-2/5 cursor-pointer rounded p-2 ring ring-blue-300 transition-all hover:scale-105 hover:bg-gray-700"
            title={
              <>
                <Title size={TitleSize.LG}>Bachelor's Degree</Title>
                <SubTitle>
                  State University at Albany, SUNY
                </SubTitle>
              </>
            }
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              cupiditate nesciunt voluptates fugiat earum cum delectus quidem
              ullam laudantium provident. Neque explicabo beatae ad non
              doloremque, error ullam ipsum cumque.
            </p>
            <div className="flex w-full flex-wrap p-2">
              <Title size={TitleSize.SM} className="mx-auto my-2 rounded bg-std-red px-3 py-1 text-center">
                Operating Systems
              </Title>
              <Title size={TitleSize.SM} className="mx-auto my-2 rounded bg-std-red px-3 py-1 text-center">
                Multimedia Computing
              </Title>
              <Title size={TitleSize.SM} className="mx-auto my-2 rounded bg-std-red px-3 py-1 text-center">
                Computer Architecture
              </Title>
              <Title size={TitleSize.SM} className="mx-auto my-2 rounded bg-std-red px-3 py-1 text-center">
                Machine Learning
              </Title>
            </div>
          </Accordion>
        </div>
      </div>
    </PageSection>
  );
};
