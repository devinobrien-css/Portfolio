import { ReactElement } from 'react';

interface PageSectionProps {
  className?: string;
  children?: ReactElement[] | ReactElement | string | string[] | null | undefined;
}

export const PageSection = ({ className, children }: PageSectionProps) => {
  return (
    <section className={`flex min-h-screen flex-col items-center ${className}`}>
      {children}
    </section>
  );
};
