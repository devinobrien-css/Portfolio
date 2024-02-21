import { BottomBarAnimation } from '../../../components/animations/BottomBarAnimation';
import { TopBarAnimation } from '../../../components/animations/TopBarAnimation';
import { PageSection } from '../../../components/text/PageSection';
import { SubTitle } from '../../../components/text/SubTitle';
import { advertisement } from '../../../data/advertisement';
import { SkillIcon } from '../../../components/SkillIcon';
import { Title } from '../../../components/text/Title';
import { SkillIconSize, TitleSize } from '../../../data/constants';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import cx from 'classnames';

enum TabNames {
  Development = 'development',
  Data = 'data',
  Cloud = 'cloud',
  Analytics = 'analytics',
}

const tabData = [
  {
    name: 'app development',
    tab: TabNames.Development,
    icon: 'ion:code-slash-outline',
  },
  {
    name: 'data management',
    tab: TabNames.Data,
    icon: 'carbon:datastore',
  },
  {
    name: 'cloud integration',
    tab: TabNames.Cloud,
    icon: 'carbon:cloud-data-ops',
  },
  {
    name: 'performance analysis',
    tab: TabNames.Analytics,
    icon: 'carbon:chart-line-data',
  },
];

export const OverallAd = () => {
  const [tab, setTab] = useState<TabNames>(TabNames.Development);


  const currentTab = advertisement[tab];

  return (
    <BottomBarAnimation
      threshold={20}
      content={
        <div className='hidden w-full justify-end px-12 py-8 sm:flex'>
          <img src='https://access-portfolio-images.s3.amazonaws.com/Programming-amico.svg' alt='programming' className='m-12 hidden size-56 object-cover md:block'/>
        </div>
      }>
      <TopBarAnimation
        className='hidden p-2 sm:block'
        threshold={9}
        content={
          <div className='z-[110] w-full py-8  font-montserrat'>
            <Title size={TitleSize.LG}>Right Tool, Right Job</Title>
            <Title size={TitleSize.MD}>Mastering Cloud Infra, Frontend, API, and DB Development Expertise</Title>
          </div>
        }
      >
        <PageSection className='p-6'>
          <div className="md:my-auto">
            <div className="md:flex">
              <div className="relative mx-auto h-fit w-11/12 md:mx-0 md:w-1/3">
                <div className={
                  cx('z-10 border-l-2 dark:border-light-cyan border-gray-800 w-max h-1/4 absolute transition-all left-0', {
                    'top-0': tab === TabNames.Development,
                    'top-1/4': tab === TabNames.Data,
                    'top-1/2': tab === TabNames.Cloud,
                    'top-3/4': tab === TabNames.Analytics,
                  })}
                ></div>
                <div className={'absolute left-0 top-0  z-0 h-[100%] border-l-2 border-gray-500'}></div>


                {tabData.map(t => {
                  return (
                    <div key={t.name} className='relative flex'>
                      <button
                        key={t.name}
                        className={
                          cx('p-2 transition-colors flex', {
                            'dark:text-light-cyan text-gray-700': t.tab === tab,
                            'dark:text-paynes-grey text-gray-500': t.tab !== tab,
                          })}
                        onClick={() => setTab(t.tab)}
                      >
                        <Icon icon={t.icon} width="40" height="40" />
                        <span className='my-auto ml-4 font-bebas text-2xl'>{t.name}</span>
                      </button>
                    </div>
                  );
                })}
              </div>
              <div className="my-2 max-w-xl px-4 md:w-2/3">
                <div className='flex flex-col gap-y-2'>
                  <Title size={TitleSize.LG}>
                    {currentTab.title}
                  </Title>
                  <SubTitle>
                    {currentTab.subtitle}
                  </SubTitle>
                  <div className="flex gap-x-1">
                    {
                      currentTab.skills.map((skill) => {
                        return (
                          <SkillIcon key={skill.icon} icon={skill.icon} skill={skill.title} size={SkillIconSize.SM} />
                        );
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PageSection >
      </TopBarAnimation>
    </BottomBarAnimation>
  );
};
