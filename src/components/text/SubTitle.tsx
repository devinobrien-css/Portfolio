import { ReactElement } from 'react';

interface SubTitleProps {
  className?: string;
  children: ReactElement | string;
}

/**
 * SubTitle component
 * @param {SubTitleProps} props - The props
 * @returns {JSX.Element} The SubTitle component
 */
export const SubTitle = ({ children, className }: SubTitleProps): JSX.Element => {
  return (
    <p className={`font-lato font-light dark:text-gray-400 ${className}`}>
      {children}
    </p>
  );
};
