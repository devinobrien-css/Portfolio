import { ReactElement } from "react";



interface SubTitleProps {
  className?: string;
  children: ReactElement | string;
}
export const SubTitle = ({ children, className }: SubTitleProps) => {
  return (
    <p className={`font-lato font-light text-gray-400 ${className}`}>
      {children}
    </p>
  );
};
