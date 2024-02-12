import { ReactNode, useEffect, useState } from 'react';
import { useScrollPercentage } from 'react-scroll-percentage'
import cx from 'classnames';

export const SideBarAnimation = ({children, content}:{children:ReactNode, content:ReactNode}) => {
  const [currentPosition, setCurrentPosition] = useState(0);

  const [ref, percentage] = useScrollPercentage({
    threshold: 0,
  })
  useEffect(() => {
    const normalized = Math.round(percentage*100);
    if(normalized < 50)
      setCurrentPosition(normalized*5);
    else
      setCurrentPosition((100-normalized)*5);
  }, [percentage]);

  return (
    <div ref={ref}>
      <div 

          style={{
            transform:`translateX(-${currentPosition}px)`,
          }}
          className={cx('fixed h-screen top-0 -right-[240px]')}
        >
          {content}
        </div>
        {children}
    </div>
  )
}