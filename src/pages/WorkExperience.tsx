import { Icon } from '@iconify/react';
import { PageSection } from '../components/PageSection';
import { Title } from '../components/Title';
import { TitleSize } from '../components/constants';
import { SubTitle } from '../components/SubTitle';
import { PageTitle } from '../components/PageTitle';
import { employers } from '../data/employers';

export const WorkExperience = () => {
  return (
    <PageSection className="p-10 md:p-6">
      <div className="mt-4 w-full transition-all duration-300 md:my-auto">
        <PageTitle title='Past Employment' />
        <br />
        <div className='flex flex-wrap gap-4'>
          {
            employers.map((employer) => {
              return (
                <div
                  key={employer.name}
                  className="w-full cursor-pointer rounded bg-white p-4 text-left shadow transition-all hover:bg-gray-50 dark:bg-slate-700/80  dark:hover:bg-gray-700 md:w-[48%]"
                >
                  <Title size={TitleSize.LG}>{employer.name}</Title>
                  <SubTitle>
                    {employer.title}
                  </SubTitle>
                  <hr className="my-2"/>
                  <SubTitle>
                    {employer.description}
                  </SubTitle>
                  <br />
                  <Title size={TitleSize.MD}>Skills Used:</Title>
                  <div className="flex">
                    {employer.skills.map((skill) => {
                      return (
                        <div key={skill} className="mx-auto rounded bg-gray-900 p-2">
                          <Icon icon={`logos:${skill}`} width="50" height="50" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    </PageSection>
  );
};
