import { Icon } from '@iconify/react';
import {
  Accordion,
} from '../../../components/custom.library';
import { PageSection } from '../../../components/PageSection';
import { Title, TitleSize } from '../../../components/Title';
import { SubTitle } from '../../../components/SubTitle';
import { PageTitle } from '../../../components/PageTitle';

export const WorkExperience = () => {
  return (
    <PageSection className="p-9">
      <div className="mt-4 w-full transition-all duration-300 md:my-auto md:w-4/5 lg:w-4/5">
        <PageTitle title='Past Employment' />
        <br />
        <div className="">
          <Accordion
            className="mx-auto my-4 md:w-2/5 cursor-pointer rounded p-2 ring ring-blue-300 transition-all hover:scale-105 hover:bg-gray-700"
            title={
              <>
                <Title size={TitleSize.LG}>Jahnel Group</Title>
                <SubTitle>
                  content here 
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
            <br />
            <Title size={TitleSize.MD}>Skills Used:</Title>
            <div className="flex">
              <div className="mx-auto rounded bg-gray-900 p-2">
                <Icon icon={'logos:react'} width="50" height="50" />
              </div>
              <div className="mx-auto rounded bg-gray-900 p-2">
                <Icon icon={'logos:aws'} width="50" height="50" />
              </div>
              <div className="mx-auto rounded bg-gray-900 p-2">
                <Icon icon={'logos:tailwindcss-icon'} width="50" height="50" />
              </div>
            </div>
          </Accordion>
          
          <Accordion
            className="mx-auto my-4 md:w-2/5 cursor-pointer rounded p-2 ring ring-blue-300 transition-all hover:scale-105 hover:bg-gray-700"
            title={
              <>
                <Title size={TitleSize.LG}>NeuroScience Lab</Title>
                <SubTitle>
                  Develop and manage the Center for Neuroscience and Experiantal
                  Education's web presence
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
            <br />
            <Title size={TitleSize.MD}>Skills Used:</Title>
            <div className="flex">
              <div className="mx-auto rounded bg-gray-900 p-2">
                <Icon icon={'logos:react'} width="50" height="50" />
              </div>
              <div className="mx-auto rounded bg-gray-900 p-2">
                <Icon icon={'logos:aws'} width="50" height="50" />
              </div>
              <div className="mx-auto rounded bg-gray-900 p-2">
                <Icon icon={'logos:tailwindcss-icon'} width="50" height="50" />
              </div>
            </div>
          </Accordion>

          <Accordion
            className="mx-auto my-4 md:w-2/5 cursor-pointer rounded p-2 ring ring-blue-300 transition-all hover:scale-105 hover:bgoxford-blue"
            title={
              <>
                <Title size={TitleSize.LG}>Tekniverse</Title>
                <SubTitle>
                  Constructed self-generating unit tests for a suite of
                  applications
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
            <br />
            <Title size={TitleSize.MD}>Skills Used:</Title>
            <div className="flex">
              <div className="mx-auto rounded bg-gray-900 p-2">
                <Icon
                  icon={'mdi:dot-net'}
                  width="50"
                  height="50"
                  color="white"
                />
              </div>
              <div className="mx-auto rounded bg-gray-900 p-2">
                <Icon icon={'logos:c-sharp'} width="50" height="50" />
              </div>
              <div className="mx-auto rounded bg-gray-900 p-2">
                <Icon icon={'logos:mariadb'} width="50" height="50" />
              </div>
            </div>
          </Accordion>

          <Accordion
            className="mx-auto my-4 md:w-2/5 cursor-pointer rounded p-2 ring ring-blue-300 transition-all hover:scale-105 hover:bg-gray-700"
            title={
              <>
                <Title size={TitleSize.LG}>Content Critical Solutions</Title>
                <SubTitle>
                  Built a GUI to track their manufactoring floor's processing
                  simplifying factory operation
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
            <Title size={TitleSize.MD} className="mt-2">Skills Used:</Title>
            <div className="flex">
              <div className="mx-auto rounded bg-gray-900 p-2">
                <Icon
                  icon={'vscode-icons:file-type-php'}
                  width="50"
                  height="50"
                />
              </div>
              <div className="mx-auto rounded bg-gray-900 p-2">
                <Icon icon={'logos:python'} width="50" height="50" />
              </div>
              <div className="mx-auto rounded bg-gray-900 p-2">
                <Icon icon={'logos:mysql'} width="50" height="50" />
              </div>
            </div>
          </Accordion>
        </div>
      </div>
    </PageSection>
  );
};
