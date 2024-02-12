import { ReactNode, useEffect, useState } from 'react';
import { useScrollPercentage } from 'react-scroll-percentage'
import cx from 'classnames';

export const TopBarAnimation = ({children, content}:{children:ReactNode, content:ReactNode}) => {
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
          className={cx('fixed h-screen top-0 -right-[190px] md:-right-[210px] transition-all')}
        >
          {content}
        </div>
        {children}
    </div>
  )
}