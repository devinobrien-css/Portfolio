import { ReactElement } from 'react';

interface SectionTitleProps {
  className?: string;
  children?: ReactElement | string;
}

export const SectionTitle = ({ children, className }: SectionTitleProps) => {
  return (
    <p
      className={`font-bebas text-3xl text-white transition-all md:text-4xl ${className}`}
    >
      {children}
    </p>
  );
};
