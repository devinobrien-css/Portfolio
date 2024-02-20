import { Card } from '../../components/Card';
import { SkillIcon } from '../../components/SkillIcon';
import { PageSection } from '../../components/text/PageSection';
import { PageTitle } from '../../components/text/PageTitle';
import { SubTitle } from '../../components/text/SubTitle';
import { TextSection } from '../../components/text/TextSection';
import { Title } from '../../components/text/Title';
import { TitleSize } from '../../data/constants';


export const Docs = () => {
  return (
    <PageSection>
      <div className='z-[1000] w-2/3'>
        <br/>
        <h1 className="font-code text-6xl">Component Library</h1>
        <br/>
        <br/>
        <PageTitle title='This is a Page Title'/>
        <br/>
        <hr className='my-1'/>

        <br/>
        <Title size={TitleSize.XL}>This is a Title XL</Title>
        <br/>
        <Title size={TitleSize.LG}>This is a Title LG</Title>
        <br/>
        <Title size={TitleSize.MD}>This is a Title MD</Title>
        <br/>
        <Title size={TitleSize.SM}>This is a Title SM</Title>
        <br/>
        <Title size={TitleSize.XS}>This is a Title XS</Title>
        <br/>
        <hr className='my-1'/>
        <br/>
        <SubTitle>This is a SubTitle</SubTitle>
        <br/>
        <hr className='my-1'/>
        <br/>
        <TextSection>
          This is a Text Section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ad quae si voluerunt, dispicere etiam ab origine.
        </TextSection>
        <br/>
        <hr className='my-1'/>
        <br/>
        <Card>
          <Title size={TitleSize.LG}>This is a Title MD</Title>
          <hr className='my-1'/>
          <TextSection>
          This is a Text Section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ad quae si voluerunt, dispicere etiam ab origine.
          </TextSection>
        </Card>
        <br/>
        <SkillIcon icon='logos:react' />
      </div>
    </PageSection>
  );
};