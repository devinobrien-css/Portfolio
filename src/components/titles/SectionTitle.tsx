import { ReactElement } from 'react';

interface SectionTitleProps {
  className?: string;
  children?: ReactElement | string;
}

export const SectionTitle = ({ children, className }: SectionTitleProps) => {
  return (
    <p
      className={`text-3xl font-lato font-light text-white transition-all md:text-4xl ${className}`}
    >
      {children}
    </p>
  );
};
