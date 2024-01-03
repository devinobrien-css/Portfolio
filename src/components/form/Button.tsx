import { ButtonHTMLAttributes } from "react";
import cx from 'classnames'



export enum ButtonType {
  PRIMARY = 'border-2 text-tiffany-blue border-paynes-grey rounded-lg p-4 hover:bg-slate-800 bg-opacity-50 transition-colors',
  WIDE = 'border-2 text-tiffany-blue border-paynes-grey rounded-lg p-2 font-lato hover:bg-slate-800 bg-opacity-50 transition-colors w-full',
}

interface ButtonProps {
  className?: string;
  children: string;
  style: ButtonType
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
  )
}
