import { Card } from '../../components/cards/Card';
import { ProjectCard } from '../../components/cards/ProjectCard';
import { SkillIcon } from '../../components/SkillIcon';
import { PageSection } from '../../components/text/PageSection';
import { PageTitle } from '../../components/text/PageTitle';
import { SubTitle } from '../../components/text/SubTitle';
import { TextSection } from '../../components/text/TextSection';
import { Title } from '../../components/text/Title';
import { TitleSize } from '../../data/constants';
import { useSEO, pageSEO } from '../../hooks/useSEO';

export const Docs = () => {
  // Apply SEO configuration with noIndex true for this internal docs page
  useSEO(pageSEO.docs);

  return (
    <PageSection className='relative w-4/5'>
      <div className=''>
        <br />
        <h1 className='font-code text-6xl dark:text-white'>
          Component Library
        </h1>
        <br />
        <br />
        <PageTitle title='This is a Page Title' />
        <br />
        <hr className='my-1' />
        <br />
        <Title size={TitleSize.XL}>This is a Title XL</Title>
        <br />
        <Title size={TitleSize.LG}>This is a Title LG</Title>
        <br />
        <Title size={TitleSize.MD}>This is a Title MD</Title>
        <br />
        <Title size={TitleSize.SM}>This is a Title SM</Title>
        <br />
        <Title size={TitleSize.XS}>This is a Title XS</Title>
        <br />
        <hr className='my-1' />
        <br />
        <SubTitle>This is a SubTitle</SubTitle>
        <br />
        <hr className='my-1' />
        <br />
        <TextSection>
          This is a Text Section. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Ad quae si voluerunt, dispicere etiam ab origine.
        </TextSection>
        <br />
        <hr className='my-1' />
        <br />
        <Card>
          <Title size={TitleSize.LG}>This is a Title MD</Title>
          <hr className='my-1' />
          <TextSection>
            This is a Text Section. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Ad quae si voluerunt, dispicere etiam ab origine.
          </TextSection>
        </Card>
        <br />
        <hr className='my-1' />
        <br />
        <div className='flex gap-x-2'>
          <SkillIcon icon='logos:react' />
          <SkillIcon icon='logos:angular' />
        </div>
        <br />
        <hr className='my-1' />
        <br />
        <div className='flex w-full justify-center gap-x-8'>
          <ProjectCard
            project={{
              title: 'Project Title',
              description:
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat voluptatibus dolores, adipisci est necessitatibus asperiores.',
              image:
                'https://access-portfolio-images.s3.amazonaws.com/angular-bg.webp',
              tags: ['react', 'typescript'],
              github: '',
              demo: '',
              skills: [
                {
                  name: 'React',
                  icon: 'https://via.placeholder.com/150',
                },
                {
                  name: 'TypeScript',
                  icon: 'https://via.placeholder.com/150',
                },
                {
                  name: 'TailwindCSS',
                  icon: 'https://via.placeholder.com/150',
                },
              ],
            }}
          />

          <ProjectCard
            project={{
              title: 'Project Title',
              description:
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat voluptatibus dolores, adipisci est necessitatibus asperiores.',
              image:
                'https://access-portfolio-images.s3.amazonaws.com/angular-bg.webp',
              tags: ['react', 'typescript'],
              github: '',
              demo: '',
              skills: [
                {
                  name: 'React',
                  icon: 'https://via.placeholder.com/150',
                },
                {
                  name: 'TypeScript',
                  icon: 'https://via.placeholder.com/150',
                },
                {
                  name: 'TailwindCSS',
                  icon: 'https://via.placeholder.com/150',
                },
              ],
            }}
          />

          <ProjectCard
            project={{
              title: 'Project Title',
              description:
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat voluptatibus dolores, adipisci est necessitatibus asperiores.',
              image:
                'https://access-portfolio-images.s3.amazonaws.com/angular-bg.webp',
              tags: ['react', 'typescript'],
              github: '',
              demo: '',
              skills: [
                {
                  name: 'React',
                  icon: 'https://via.placeholder.com/150',
                },
                {
                  name: 'TypeScript',
                  icon: 'https://via.placeholder.com/150',
                },
                {
                  name: 'TailwindCSS',
                  icon: 'https://via.placeholder.com/150',
                },
              ],
            }}
          />
        </div>

        <br />
        <br />
        <br />
      </div>
    </PageSection>
  );
};
