import { Icon } from '@iconify/react';
import { PageSection } from '../../../../components/PageSection';
import { PageTitle } from '../../../../components/PageTitle';
import { SubTitle } from '../../../../components/SubTitle';
import { TextSection } from '../../../../components/TextSection';
import { Title, TitleSize } from '../../../../components/Title';
import { ProjectCard, ProjectCardProps } from './ProjectCard';
import { projects } from './projects';

interface aggregateCardsProps {
  cards: any[];
  cards_per_page: number;
}
const aggregateCards = ({ cards, cards_per_page }: aggregateCardsProps) => {

  const response: any[][] = [];
  for (let i = 0; i < cards.length; i++) {
    const cardSet: any[] = []
    for (let j = 0; j < cards_per_page; j++) {
      if (i + j < cards.length)
        cardSet.push(cards[i + j])
    }
    response.push(cardSet)
    i += cards_per_page
  }

  console.log(response)
  return response
}


export const ProjectExperience = () => {
  const projectSets = aggregateCards({ cards: projects, cards_per_page: 3 })

  return (
    <PageSection className='p-7'>
      <div className="mt-4 w-full transition-all duration-300 md:my-auto">
        <PageTitle title='Projects' />
        <br />
        <br />
        <div className='flex flex-wrap gap-y-6 p-2'>
          {projects.map(project => {
            return <ProjectCard {...project} />
          })}
        </div>
        {/* <div className="flex overflow-x-scroll py-4">
          {projectSets.map((projectSet: ProjectCardProps[]) => {
            return (
              <div className='min-w-full'>
                <div className='flex flex-wrap gap-12 justify-center'>
                </div>
              </div>
            )
          })}
        </div> */}
      <br/>

      <hr/>
      <a className='flex gap-x-2 my-4 justify-center cursor-pointer' href='https://www.github.com/devinobrien-css'>
        <Icon icon='line-md:github-twotone' className='text-white my-auto'/>
        <SubTitle className='my-auto text-white'>
          view more on Github
        </SubTitle>
      </a>
      <hr/>
      <hr className='w-1/2 my-2 mx-auto'/>
      </div>
    </PageSection>
  );
};
