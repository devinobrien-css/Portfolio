import { ReactElement } from 'react';

interface PageSectionProps {
  className?: string;
  children?: ReactElement;
}

export const PageSection = ({ className, children }: PageSectionProps) => {
  return (
    <div className={`flex min-h-screen flex-col items-center ${className}`}>
      {children}
    </div>
  );
};
