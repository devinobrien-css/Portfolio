import { ReactElement } from 'react';

interface SectionTitleProps {
  className?: string;
  children?: ReactElement | string;
}

export const SectionTitle = ({ children, className }: SectionTitleProps) => {
  return (
    <p
      className={`text-2xl font-lato font-light transition-all md:text-4xl text-white ${className}`}
    >
      {children}
    </p>
  );
};
