import { BottomBarAnimation } from '../../../../components/animations/BottomBarAnimation';
import { TopBarAnimation } from '../../../../components/animations/TopBarAnimation';
import { PageSection } from '../../../../components/text/PageSection';
import { DevelopmentSection } from './DevelopmentSection';
import { CloudSection } from './CloudSection';
import { DataSection } from './DataSection';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import cx from 'classnames';
import { AnalyticsSection } from './AnalyticsSection';

const tabData = [
  {
    name: 'app development',
    button: 'software experience',
    icon: 'ion:code-slash-outline',
    description: DevelopmentSection,
  },
  {
    name: 'data management',
    button: 'storage experience',
    icon: 'carbon:datastore',
    description: DataSection,
  },
  {
    name: 'cloud integration',
    button: 'serverless experience',
    icon: 'carbon:cloud-data-ops',
    description: CloudSection,
  },
  {
    name: 'performance analysis',
    button: 'analytics experience',
    icon: 'carbon:chart-line-data',
    description: AnalyticsSection,
  },
];

interface SelectedTab {
  name: string;
  index: number;
  button_title?: string;
}
export const OverallAd = () => {
  const [tab, setTab] = useState<SelectedTab>({
    index: 0,
    name: tabData[0].name,
    button_title: tabData[0].button
  });

  const Section = tabData.filter((t) => {
    return t.name === tab.name;
  })[0].description;

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
            <h2 className='text-4xl text-gray-900 dark:text-tiffany-blue'>Right Tool, Right Job</h2>
            <p className='text-xl text-gray-700 dark:text-moonstone'>Mastering Cloud Infra, Frontend, API, and DB Development Expertise</p>
          </div>
        }
      >
        <PageSection className='p-6'>
          <div className="md:my-auto">
            <div className="md:flex">
              <div className="relative mx-auto h-fit w-11/12 md:mx-0 md:w-1/2">
                <div className={
                  cx('z-10 border-l-2 dark:border-light-cyan border-gray-800 w-max h-1/4 absolute transition-all left-0', {
                    'top-0': tab.index === 0,
                    'top-1/4': tab.index === 1,
                    'top-1/2': tab.index === 2,
                    'top-3/4': tab.index === 3,
                  })}
                ></div>
                <div className={'absolute left-0 top-0  z-0 h-[100%] border-l-2 border-gray-500'}></div>


                {tabData.map((t, index) => {
                  return (
                    <div key={t.name} className='relative flex'>
                      <button
                        key={t.name}
                        className={
                          cx('p-2 transition-colors flex', {
                            'dark:text-light-cyan text-gray-700': t.name === tab.name,
                            'dark:text-paynes-grey text-gray-500': t.name !== tab.name,
                          })}
                        onClick={() => setTab({
                          name: t.name,
                          index: index
                        })}
                      >
                        <Icon icon={t.icon} width="40" height="40" />
                        <span className='my-auto ml-4 font-bebas text-2xl'>{t.name}</span>
                      </button>
                    </div>
                  );
                })}
              </div>
              <div className="max-w-xl px-4 md:w-1/2">
                <Section />
                <br />
              </div>
            </div>
          </div>
        </PageSection >
      </TopBarAnimation>
    </BottomBarAnimation>
  );
};
