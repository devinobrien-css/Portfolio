import { ReactNode, useEffect, useState } from 'react';
import { useScrollPercentage } from 'react-scroll-percentage';
import cx from 'classnames';

interface SideBarAnimationProps {
  className?: string;
  children: ReactNode;
  content: ReactNode;
  threshold?: number;
  lower_value?: number;
  upper_value?: number;
  with_opacity?: boolean;
}

export const TopBarAnimation = ({
  className,
  children,
  content,
  with_opacity,
  threshold,
  lower_value,
  upper_value,
}: SideBarAnimationProps) => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [currentOpacity, setCurrentOpacity] = useState(0);

  const [ref, percentage] = useScrollPercentage({
    threshold: 0,
  });
  useEffect(() => {
    const normalized = Math.round(percentage * 100);

    if (normalized < (lower_value ?? 30)) {
      setCurrentPosition(normalized * (threshold ?? 8));
      setCurrentOpacity(normalized * 2);
    } else if (normalized > (upper_value ?? 70)) {
      setCurrentOpacity((100 - normalized) * 2);
      setCurrentPosition((100 - normalized) * (threshold ?? 8));
    }
  }, [lower_value, percentage, threshold, upper_value]);

  return (
    <div ref={ref}>
      <div
        style={{
          transform: `translateY(${currentPosition}px)`,
          opacity: with_opacity ? currentOpacity / 100 : 1,
        }}
        className={cx(
          'fixed -top-[200px] right-0 w-screen transition-all md:-right-[210px]',
          className,
        )}
      >
        {content}
      </div>
      {children}
    </div>
  );
};
