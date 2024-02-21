import { Icon } from '@iconify/react';
import cx from 'classnames';
import { SkillIconSize } from '../data/constants';
import { useState } from 'react';

interface SkillIconProps {
	className?: string;
	icon: string;
  skill?: string;
	size?: SkillIconSize;
}

export const SkillIcon = ({ className, icon, skill, size }: SkillIconProps): JSX.Element => {
  const [showTooltip,setShowTooltip] = useState<boolean>(false);

  return (
    <div className={cx('mx-auto rounded bg-gray-50 p-2 shadow dark:bg-white/80 w-min relative',className)}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <span className={cx('absolute top-[90%] whitespace-nowrap rounded bg-white shadow p-1 opacity-0 z-[200] font-code transition-opacity', {
        'opacity-100': showTooltip,
      })} 
      >
        {skill}
      </span>
      <Icon icon={icon} width="50" height="50" className={cx({
        [SkillIconSize.SM]: size === SkillIconSize.SM,
        [SkillIconSize.MD]: size === SkillIconSize.MD,
        [SkillIconSize.LG]: size === SkillIconSize.LG,
      })}/>
    </div>
  );
};