import { PageSection } from '../../../components/text/PageSection';
import { Title } from '../../../components/text/Title';
import { TitleSize } from '../../../data/constants';
import { SubTitle } from '../../../components/text/SubTitle';
import { PageTitle } from '../../../components/text/PageTitle';
import { employers } from '../../../data/employers';
import { BottomBarAnimation } from '../../../components/animations/BottomBarAnimation';
import { Card } from '../../../components/Card';

export const WorkExperience = (): JSX.Element => {
  return (
    <BottomBarAnimation
      threshold={20}
      content={
        <div className='hidden w-full justify-end px-12 py-8 sm:flex'>
          <img src='https://access-portfolio-images.s3.amazonaws.com/At+the+office-amico.svg' alt='programming' className='z-[10] m-2 hidden size-56 object-cover md:block'/>
        </div>
      }>
      <PageSection className="p-10 md:p-6">
        <div className="mt-4 w-full transition-all duration-300 md:my-auto">
          <PageTitle title='Employers' />
          <br />
          <div className='flex flex-wrap justify-center gap-4'>
            {
              employers.map((employer) => {
                return (
                  <Card key={employer.name}>
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
                  </Card>
                );
              })
            }
          </div>
        </div>
      </PageSection>
    </BottomBarAnimation>
  );
};
