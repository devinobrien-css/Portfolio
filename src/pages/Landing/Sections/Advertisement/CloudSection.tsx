import { SubTitle } from '../../../../components/text/SubTitle';
import { Title } from '../../../../components/text/Title';
import { TitleSize } from '../../../../data/constants';
import { SkillIcon } from '../../../../components/SkillIcon';

export const CloudSection = () => {
  return (
    <div>
      <Title size={TitleSize.LG}>
          Low code? No code? Moving to the cloud?
      </Title>
      <SubTitle>
          With serverless development on the rise, Google, Microsoft and Amazon
          have stepped up as cloud providers...
      </SubTitle>
      <div className="mt-4 flex">
        <SkillIcon icon={'logos:aws'} />
        <SkillIcon icon={'logos:google-cloud'} />
        <SkillIcon icon={'logos:microsoft-icon'} />
      </div>
    </div>
  );
};