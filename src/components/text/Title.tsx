import { ReactElement } from 'react';
import cx from 'classnames';
import { TitleSize } from '../../data/constants';

interface TitleProps {
  size?: TitleSize;
  className?: string;
  children?: ReactElement | string | ( ReactElement | string)[];
}

/**
 * Title component
 * @param {TitleProps} props - The props
 * @returns {JSX.Element} The Title component
 */
export const Title = ({ className, size = TitleSize.SM, children }: TitleProps): JSX.Element => {
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
            'sm:text-xs text-sm': size === TitleSize.XS,
          }
        )}
    >
      {children}
    </p>
  );
};
