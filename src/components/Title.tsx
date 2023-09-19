import { ReactElement } from "react";
import cx from 'classnames';

export enum TitleSize {
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl'
}

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
          `font-montserrat font-light text-white `,
          {
            'text-5xl md:text-6xl': size === TitleSize.XL,
            'text-3xl md:text-4xl': size === TitleSize.LG,
            'md:text-lg': size === TitleSize.MD,
            'text-sm md:text-md': size === TitleSize.SM,
            'text-xs md:text-sm': size === TitleSize.XS,
          }
        )}
    >
      {children}
    </p>
  )
}
