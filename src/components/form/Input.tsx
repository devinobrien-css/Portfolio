import { HTMLProps } from "react";

interface InputProps {
  className?: string;
}
export const Input = ({ className, ...rest }: InputProps & HTMLProps<HTMLInputElement>) => {
  return <input className={`w-full bg-transparent ${className}`} {...rest} />;
};
