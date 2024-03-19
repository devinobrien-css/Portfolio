import { Icon } from '@iconify/react';
import { PageSection } from '../../components/text/PageSection';
import { PageTitle } from '../../components/text/PageTitle';
import { SubTitle } from '../../components/text/SubTitle';
import { useEffect, useState } from 'react';
import cx from 'classnames';
import { Title } from '../../components/text/Title';
import { TitleSize } from '../../data/constants';
import { backend_tags, cloud_tags, database_tags, design_tags, devops_tags, frontend_tags } from '../../data/github_projects';
import { projects } from '../../data/github_projects';
import { QuickStats } from './Sections/QuickStats/QuickStats';
import { ProjectCard } from '../../components/cards/ProjectCard';
import { scroller } from 'react-scroll';
import { useLocation } from 'react-router-dom';


interface TagProps { 
  tag: string, 
  addTag: (tag: string) => void,
  removeTag: (tag: string) => void 
  isSelected: boolean
}

const Tag = ({ tag, addTag, removeTag, isSelected }: TagProps) => {
  return (
    <button className={cx('shadow rounded p-2 transition-all cursor-pointer', {
      'dark:bg-slate-800 ring ring-blue-300 dark:text-slate-300': isSelected,
      'bg-white dark:bg-slate-600 text-slate-300 dark:text-slate-400': !isSelected,
    })} onClick={() => {
      if (isSelected) {
        removeTag(tag);
      } else {
        addTag(tag);
      }
    }}>
      <span>{tag}</span>
    </button>
  );
};

export const Projects = () => {
  const location = useLocation();
  const [search,setSearch] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [showFilterMenu, setShowFilterMenu] = useState(false);

  const addTag = (tag: string) => {
    setTags([...tags, tag]);
  };

  const removeTag = (tag: string) => {
    setTags(tags.filter(t => t !== tag));
  };

  const tagSelected = (tag: string) => {
    return tags.includes(tag);
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    if (queryParams.get('goto') === 'all-projects') {
      scroller.scrollTo('all-projects', {
        duration: 1500,
        delay: 100,
        smooth: true,
        offset: -10,
      });
    }
  } ,[location.search]);

  return (
    <>
      <div className={cx('absolute left-0 top-0 z-30 w-screen h-screen', {
        'block': showFilterMenu,
        'hidden': !showFilterMenu
      })} onClick={() => setShowFilterMenu(false)}></div>
      <div className='relative mx-auto py-12 md:max-w-[65%]' id='projects-page'>
        <div id='all-projects' />
        <PageSection className='min-h-screen'>

          <div className='p-4'>
            <PageTitle title='Github Projects' />

            <SubTitle className='flex flex-col gap-y-3'>
              Explore my diverse range of projects, each a testament to my attention to detail, and relentless pursuit of excellence in software development.
            </SubTitle>

            <div className='relative' id="filter-menu-button">
              <div className='flex w-full flex-wrap justify-between gap-4 py-4'>
                <div className='flex gap-2'>
                  <input 
                    type='text' 
                    placeholder='Search' 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}  
                    className='w-full appearance-none rounded px-3 py-2 font-code text-gray-700 shadow outline-none ring-blue-300 focus:ring-2 dark:bg-slate-800 dark:text-slate-50'
                  />
                  <button 
                    className={
                      cx(
                        'z-50 flex gap-x-2 rounded bg-white p-4 font-montserrat text-paynes-grey dark:text-slate-400 shadow dark:bg-slate-800', 
                        {
                          'ring-2 ring-blue-300 ': showFilterMenu,
                        }
                      )
                    }
                    onClick={() => setShowFilterMenu(!showFilterMenu)}
                  >
                    <Icon icon="akar-icons:filter" className='size-6'/>
                    <span>Filter</span>
                  </button>
                </div>
                <a 
                  href='https://github.com/devinobrien-css' 
                  className='group flex w-fit gap-x-2 rounded bg-white p-4 font-montserrat text-paynes-grey shadow ring-blue-300 transition-all hover:scale-105 hover:underline active:ring-2 dark:bg-moonstone dark:text-gray-800 md:w-fit' 
                  target='_blank'
                >
                  <Icon icon="ph:github-logo-duotone" className='size-6 transition-all group-hover:scale-110'/>View all on Github
                </a>
              </div>

              <div 
                id='filter-menu' 
                className={
                  cx(
                    'absolute right-left md:h-max overflow-y-auto h-[60vh] top-20 md:top-18 z-40 flex-col gap-y-2 rounded ring-2 ring-blue-300 bg-white p-4 text-left font-montserrat text-paynes-grey shadow dark:bg-gray-800',
                    {
                      'hidden': !showFilterMenu
                    }
                  )
                }
              >
                <div>
                  <Title className='pb-4' size={TitleSize.LG}>Click on tags to refine the projects</Title>
                
                  <button 
                    onClick={() => setTags([])} 
                    className='rounded bg-white p-2 shadow ring-blue-300 hover:bg-slate-300 active:bg-slate-400 active:ring-2 dark:bg-tiffany-blue'
                  >
                  Clear
                  </button>
                </div>

                <div className='flex flex-col gap-y-4 py-4'>
                  <SubTitle className=''>Frontend</SubTitle>
                  <div className='flex flex-wrap gap-4 border-b pb-4'>
                    {
                      frontend_tags.map((tag, i) => (
                        <Tag key={i} tag={tag} addTag={addTag} removeTag={removeTag} isSelected={tagSelected(tag)}/>
                      ))
                    }
                  </div>

                  <SubTitle className=''>Backend</SubTitle>
                  <div className='flex flex-wrap gap-4 border-b pb-4'>
                    {
                      backend_tags.map((tag, i) => (
                        <Tag key={i} tag={tag} addTag={addTag} removeTag={removeTag} isSelected={tagSelected(tag)}/>
                      ))
                    }
                  </div>
              
                  <SubTitle className=''>Cloud</SubTitle>
                  <div className='flex flex-wrap gap-4 border-b pb-4'>
                    {
                      cloud_tags.map((tag, i) => (
                        <Tag key={i} tag={tag} addTag={addTag} removeTag={removeTag} isSelected={tagSelected(tag)}/>
                      ))
                    }
                  </div>
                  <SubTitle className=''>Database</SubTitle>
                  <div className='flex flex-wrap gap-4 border-b pb-4'>
                    {
                      database_tags.map((tag, i) => (
                        <Tag key={i} tag={tag} addTag={addTag} removeTag={removeTag} isSelected={tagSelected(tag)}/>
                      ))
                    }
                  </div>

                  <SubTitle className=''>Design</SubTitle>
                  <div className='flex flex-wrap gap-4 border-b pb-4'>
                    {
                      design_tags.map((tag, i) => (
                        <Tag key={i} tag={tag} addTag={addTag} removeTag={removeTag} isSelected={tagSelected(tag)}/>
                      ))
                    }
                  </div>

                  <SubTitle className=''>DevOps</SubTitle>
                  <div className='flex flex-wrap gap-4 border-b pb-4'>
                    {
                      devops_tags.map((tag) => (
                        <Tag key={tag} tag={tag} addTag={addTag} removeTag={removeTag} isSelected={tagSelected(tag)}/>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-wrap justify-evenly gap-8 p-2'>
            {
              projects.filter(project => {
                return project.tags?.some(tag => tag.toLowerCase().includes(search.toLowerCase())) || project.title.toLowerCase().includes(search.toLowerCase());
              }).filter(project => {
                if (tags.length === 0) {
                  return true;
                }
                return tags.some(tag => project.tags?.includes(tag));
              }
              )
                .map((project, i) => (
                  <ProjectCard project={project} key={i} />
                ))
            }
          </div>
        </PageSection>

        <div id='quick-stats' />
        <QuickStats />
      </div>
    </>
  );
};