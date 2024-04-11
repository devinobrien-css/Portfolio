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

export const SkillIcon = ({
  className,
  icon,
  skill,
  size,
}: SkillIconProps): JSX.Element => {
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  return (
    <div
      className={cx(
        'relative mx-auto w-min rounded bg-gray-50 p-2 shadow dark:bg-white/80',
        className,
      )}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <span
        className={cx(
          'absolute top-[90%] z-[200] whitespace-nowrap rounded bg-white p-1 font-code opacity-0 shadow transition-opacity',
          {
            'opacity-100': showTooltip,
          },
        )}
      >
        {skill}
      </span>
      <Icon
        icon={icon}
        width='50'
        height='50'
        className={cx({
          [SkillIconSize.SM]: size === SkillIconSize.SM,
          [SkillIconSize.MD]: size === SkillIconSize.MD,
          [SkillIconSize.LG]: size === SkillIconSize.LG,
        })}
      />
    </div>
  );
};
