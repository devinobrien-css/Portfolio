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
        <PageTitle title='Employers' />
        <br />
        <div className='flex flex-wrap justify-center gap-4'>
          {
            employers.map((employer) => {
              return (
                <div
                  key={employer.name}
                  className="w-full cursor-pointer rounded bg-white p-4 text-left shadow transition-all hover:bg-gray-50 dark:bg-slate-700/80  dark:hover:bg-gray-700 md:w-[48%]"
                >
                  <div className='flex'>
                    <img src={employer.icon} alt={employer.name} className="size-20 rounded-full object-cover p-2 shadow"/>
                    <div className='pl-2'>
                      <Title size={TitleSize.MD}>{employer.name}</Title>
                      <SubTitle>
                        {employer.title}
                      </SubTitle>
                      <SubTitle>
                        {employer.timeline}
                      </SubTitle>
                    </div>
                  </div>
                  <hr className="my-2"/>
                  <SubTitle>
                    {employer.description}
                  </SubTitle>
                </div>
              );
            })
          }
        </div>
      </div>
    </PageSection>
  );
};
