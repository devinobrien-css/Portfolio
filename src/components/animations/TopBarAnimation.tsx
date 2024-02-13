import { ReactNode, useEffect, useState } from 'react';
import { useScrollPercentage } from 'react-scroll-percentage';
import cx from 'classnames';

interface SideBarAnimationProps {
  className?:string;
  children:ReactNode;
  content:ReactNode;
  threshold?: number;
  lower_value?: number;
  upper_value?: number;
}

export const TopBarAnimation = ({className, children, content, threshold, lower_value, upper_value }:SideBarAnimationProps) => {
  const [currentPosition, setCurrentPosition] = useState(0);

  const [ref, percentage] = useScrollPercentage({
    threshold: 0,
  });
  useEffect(() => {
    const normalized = Math.round(percentage*100);
    if(normalized < (lower_value ?? 30))
      setCurrentPosition(normalized*(threshold ?? 8));
    else if(normalized > (upper_value ?? 70))
      setCurrentPosition((100-normalized)*(threshold ?? 8));
  }, [percentage]);

  return (
    <div ref={ref}>
      <div 
        style={{
          transform:`translateY(${currentPosition}px)`,
        }}
        className={cx('fixed w-screen right-0 -top-[200px] md:-right-[210px] transition-all', className)}
      >
        {content}
      </div>
      {children}
    </div>
  );
};