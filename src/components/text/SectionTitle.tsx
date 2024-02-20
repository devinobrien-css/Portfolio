import { ReactElement } from 'react';

interface SectionTitleProps {
  className?: string;
  children?: ReactElement | string;
}

/**
 * SectionTitle component
 * @param {SectionTitleProps} props - The props
 * @returns {JSX.Element} The SectionTitle component
 */
export const SectionTitle = ({ children, className }: SectionTitleProps): JSX.Element => {
  return (
    <p
      className={`font-lato text-2xl font-light transition-all dark:text-white md:text-4xl ${className}`}
    >
      {children}
    </p>
  );
};
