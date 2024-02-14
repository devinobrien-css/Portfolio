import { ReactElement } from 'react';
import cx from 'classnames';
import { TitleSize } from './constants';



interface TitleProps {
  size?: TitleSize;
  className?: string;
  children?: ReactElement | string;
}

export const Title = ({ className, size = TitleSize.SM, children }: TitleProps) => {
  return (
    <p
      className={
        cx(
          className,
          'font-montserrat font-light dark:text-white',
          {
            'text-3xl sm:text-5xl md:text-6xl': size === TitleSize.XL,
            'text-xl sm:text-3xl md:text-4xl': size === TitleSize.LG,
            'text-md md:text-lg': size === TitleSize.MD,
            'text-xs sm:text-sm md:text-md': size === TitleSize.SM,
            'sm:text-xs md:text-sm': size === TitleSize.XS,
          }
        )}
    >
      {children}
    </p>
  );
};
