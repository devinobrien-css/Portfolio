import { ReactElement } from 'react';

interface SectionTitleProps {
  className?: string;
  children?: ReactElement | string;
}

export const SectionTitle = ({ children, className }: SectionTitleProps) => {
  return (
    <p
      className={`font-lato text-2xl font-light transition-all dark:text-white md:text-4xl ${className}`}
    >
      {children}
    </p>
  );
};
