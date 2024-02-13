import { ButtonHTMLAttributes } from 'react';
import cx from 'classnames';
import { ButtonType } from '../constants';

interface ButtonProps {
  className?: string;
  children: string;
  style: ButtonType;
}
export const Button = ({ className, children, style, ...rest }: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) => {


  return (
    <button
      className={
        cx(className, style)
      }
      {...rest}
    >
      {children}
    </button>
  );
};
