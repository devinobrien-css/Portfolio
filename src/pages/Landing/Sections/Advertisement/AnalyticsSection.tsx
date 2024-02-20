import { SubTitle } from '../../../../components/text/SubTitle';
import { Title } from '../../../../components/text/Title';
import { TitleSize } from '../../../../data/constants';
import { SkillIcon } from '../../../../components/SkillIcon';

export const AnalyticsSection = () => {
  return (
    <div className='flex flex-col gap-y-2'>
      <Title size={TitleSize.LG}>
          Track, analyze and assess issues before they occur
      </Title>
      <SubTitle>
          Continuous integration and development calls for carefully curated unit
          and end to end test suites...
      </SubTitle>
      <div className="flex">
        <SkillIcon icon={'logos:jest'} />
        <SkillIcon icon={'logos:selenium'} />
        <SkillIcon icon={'logos:git-icon'} />
        <SkillIcon icon={'logos:docker-icon'} />
      </div>
    </div>
  );
};