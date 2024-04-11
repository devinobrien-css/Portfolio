import { ReactNode, useEffect, useState } from 'react';
import { useScrollPercentage } from 'react-scroll-percentage';
import cx from 'classnames';

interface SideBarAnimationProps {
  children: ReactNode;
  content: ReactNode;
  threshold?: number;
  initialPosition?: number;
  lower_value?: number;
  upper_value?: number;
}

export const BottomBarAnimation = ({
  children,
  content,
  threshold,
  lower_value,
  upper_value,
}: SideBarAnimationProps) => {
  const [currentPosition, setCurrentPosition] = useState(0);

  const [ref, percentage] = useScrollPercentage({
    threshold: 0,
  });
  useEffect(() => {
    const normalized = Math.round(percentage * 100);
    if (normalized < (lower_value ?? 30))
      setCurrentPosition(normalized * (threshold ?? 8));
    else if (normalized > (upper_value ?? 70))
      setCurrentPosition((100 - normalized) * (threshold ?? 8));
  }, [percentage, threshold, lower_value, upper_value]);

  return (
    <div ref={ref}>
      <div
        style={{
          transform: `translateY(-${currentPosition}px)`,
        }}
        className={cx('fixed bottom-[-550px] left-0 w-screen transition-all')}
      >
        {content}
      </div>
      {children}
    </div>
  );
};
