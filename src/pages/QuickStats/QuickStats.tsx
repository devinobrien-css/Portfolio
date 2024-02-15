import { Bar, Pie } from 'react-chartjs-2';
import { PageSection } from '../../components/PageSection';
import { PageTitle } from '../../components/PageTitle';
import { ChartEvent } from 'chart.js';
import { useState } from 'react';
import { SubTitle } from '../../components/SubTitle';
import { backendFrameworks, cloudServices, databases, frontendFrameworks, infrastructure, languages, styles } from '../../data/skills';
import { Icon } from '@iconify/react';

enum Section {
  BackendFrameworks = 'Backend Frameworks',
  FrontendFrameworks = 'Frontend Frameworks',
  Styling = 'Design/Styling',
  Languages = 'Languages',
  Databases = 'Databases',
  Infrastructure = 'Infrastructure',
  CloudServices = 'Cloud Services'
}

const data = {
  labels: ['Backend Frameworks', 'Frontend Frameworks', 'Design/Styling', 'Languages', 'Databases', 'Infrastructure', 'Cloud Services'],
  datasets: [
    {
      label: '# of Skills',
      backgroundColor: [
        '#C6E9EB',
        '#9AD4D6',
        '#78A6AE',
        '#78A6BE',
        '#557786',
        '#557796',
        '#101935',
      ],
      hoverBackgroundColor: '#F2FDFF',
      borderColor: 'transparent',
      borderWidth: 2,
      data: [backendFrameworks.length, frontendFrameworks.length, styles.length, languages.length, databases.length, infrastructure.length, cloudServices.length]
    },
  ]
};

const RenderSection = ({section}:{section:string}) => {
  switch (section) {
  case Section.BackendFrameworks:
    return (
      <div className="flex flex-wrap justify-evenly gap-x-1 gap-y-3">
        {
          backendFrameworks.map((framework) => {
            return (
              <Icon width={8} height={8} key={framework.title} icon={framework.icon} className="size-16 rounded bg-white p-1 shadow dark:bg-azure-blue"/>
            );
          })
        }
      </div>
    );
  case Section.FrontendFrameworks:
    return (
      <div className="flex flex-wrap justify-evenly gap-x-1 gap-y-3">
        {
          frontendFrameworks.map((framework) => {
            return (
              <Icon width={8} height={8} key={framework.title} icon={framework.icon} className="size-16 rounded bg-white p-1 shadow dark:bg-azure-blue"/>
            );
          })
        }
      </div>
    );
  case Section.Styling:
    return (
      <div className="flex flex-wrap justify-evenly gap-x-1 gap-y-3">
        {
          styles.map((style) => {
            return (
              <Icon width={8} height={8} key={style.title} icon={style.icon} className="size-16 rounded bg-white p-1 shadow dark:bg-azure-blue"/>
            );
          })
        }
      </div>
    );
  case Section.Languages:
    return (
      <div className="flex flex-wrap justify-evenly gap-x-1 gap-y-3">
        {
          languages.map((language) => {
            return (
              <Icon width={8} height={8} key={language.title} icon={language.icon} className="size-16 rounded bg-white p-1 shadow dark:bg-azure-blue"/>
            );
          })
        }
      </div>
    );
  case Section.Infrastructure:
    return (
      <div className="flex flex-wrap justify-evenly gap-x-1 gap-y-3">
        {
          infrastructure.map((infra) => {
            return (
              <Icon width={8} height={8} key={infra.title} icon={infra.icon} className="size-16 rounded bg-white p-1 shadow dark:bg-azure-blue"/>
            );
          })
        }
      </div>
    );  
  case Section.Databases:
    return (
      <div className="flex flex-wrap justify-evenly gap-x-1 gap-y-3">
        {
          databases.map((database) => {
            return (
              <Icon width={8} height={8} key={database.title} icon={database.icon} className="size-16 rounded bg-white p-1 shadow dark:bg-azure-blue"/>
            );
          })
        }
      </div>
    );
  case Section.CloudServices:
    return (
      <div className="flex flex-wrap justify-evenly gap-x-1 gap-y-3">
        {
          cloudServices.map((cloud) => {
            return (
              <Icon width={8} height={8} key={cloud.title} icon={cloud.icon} className="size-16 rounded bg-white p-1 shadow dark:bg-azure-blue"/>
            );
          })
        }
      </div>
    );
  default:
    return (
      <div>
        <h2>Click on a Column</h2>
      </div>
    );
  }
};

export const QuickStats = () => {
  const [section,setSection] = useState<string>(Section.BackendFrameworks);
  const [chartType,setChartType] = useState<string>('bar');

  const options = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onClick: (_event: ChartEvent, elements: any[]) => {
      if (elements.length > 0) {
        const index = elements[0].index;
        setSection(data?.labels?.[index]);
      }
    },
  };

  return (
    <PageSection>
      <div className="w-[95%] p-10 md:mx-auto md:p-6">
        <PageTitle title='Quick Stats' />
        <div className='flex justify-between'>
          <SubTitle className='hidden md:block'>
          Click on a section to see more details
          </SubTitle>
          <button onClick={() => setChartType(chartType === 'bar' ? 'pie' : 'bar')} className='my-auto hidden font-montserrat text-tiffany-blue underline md:block'>
            Switch to {chartType === 'bar' ? 'Pie' : 'Bar'}
          </button>
        </div>

        <div className='mx-auto block cursor-pointer pb-8 md:hidden md:w-3/5'>
          <Pie 
            data={data} 
            options={options}
          />
        </div>
        <div className='md:flex'>
          <div className='hidden w-2/3 font-lato md:block'>
            {
              chartType === 'bar' ? <Bar 
                className='mx-auto w-full cursor-pointer'
                data={data} 
                options={options}
              /> : <Pie 
                className='mx-auto w-3/5 cursor-pointer'
                data={data} 
                options={options}
              />
            }
          </div>
          <div className='px-4 md:w-1/3 md:pt-4'>
            <h2 className='pb-4 font-bebas text-3xl dark:text-white md:text-4xl'>{section}</h2>
            <RenderSection section={section} />
          </div>
        </div>
      </div>
    </PageSection>
  );
};