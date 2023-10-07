import { PageSection } from '../../../../components/PageSection';
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
    <PageSection className=''>
      <div className="mt-4 w-full transition-all duration-300 md:my-auto">
        <Title size={TitleSize.XL} className='md:w-4/5 mx-auto'>Project Experience</Title>
        <br />
        <br />
        <div className="flex overflow-x-scroll py-4">
          {projectSets.map((projectSet: ProjectCardProps[]) => {
            return (
              <div className='min-w-full'>
                <div className='flex flex-wrap gap-12 justify-center'>
                  {projectSet.map(project => {
                    return <ProjectCard {...project} />

                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </PageSection>
  );
};
