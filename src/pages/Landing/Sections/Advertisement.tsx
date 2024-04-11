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
    <PageSection className="">
      <div className="-ml-8 w-full rounded-l py-8 font-montserrat dark:bg-slate-800">
        <Title size={TitleSize.LG}>Right Tool, Right Job</Title>
        <Title size={TitleSize.MD}>
          Mastering Cloud Infra, Frontend, API, and DB Development Expertise
        </Title>
      </div>
      <div className="my-auto md:flex">
        <div className="relative mx-auto h-fit w-full md:mx-0 md:w-1/3">
          <div
            className={cx(
              'absolute left-0 z-10 h-1/4 w-max border-l-2 border-gray-800 transition-all dark:border-light-cyan',
              {
                'top-0': tab === TabNames.Development,
                'top-1/4': tab === TabNames.Data,
                'top-1/2': tab === TabNames.Cloud,
                'top-3/4': tab === TabNames.Analytics,
              },
            )}
          ></div>
          <div
            className={
              'absolute left-0 top-0  z-0 h-full border-l-2 border-gray-500'
            }
          ></div>

          {tabData.map((t) => {
            return (
              <div key={t.name} className="relative flex">
                <button
                  key={t.name}
                  className={cx('flex p-2 transition-colors', {
                    'text-gray-700 dark:text-light-cyan': t.tab === tab,
                    'text-gray-500 dark:text-paynes-grey': t.tab !== tab,
                  })}
                  onClick={() => setTab(t.tab)}
                >
                  <Icon icon={t.icon} width="40" height="40" />
                  <span className="my-auto ml-4 font-bebas text-2xl">
                    {t.name}
                  </span>
                </button>
              </div>
            );
          })}
        </div>
        <div className="my-2 max-w-xl md:w-2/3 md:px-4">
          <div className="flex flex-col gap-y-2">
            <Title size={TitleSize.LG}>{currentTab.title}</Title>
            <SubTitle>{currentTab.subtitle}</SubTitle>
            <div className="flex gap-x-1">
              {currentTab.skills.map((skill) => {
                return (
                  <SkillIcon
                    key={skill.icon}
                    icon={skill.icon}
                    skill={skill.title}
                    size={SkillIconSize.SM}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </PageSection>
  );
};
