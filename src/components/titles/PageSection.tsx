import { ReactElement } from 'react';

interface PageSectionProps {
  className?: string;
  children?: ReactElement[] | ReactElement | string | string[] | null | undefined;
}

/**
 * PageSection component
 * @param {PageSectionProps} props - The props
 * @returns {JSX.Element} The PageSection component
 */
export const PageSection = ({ className, children }: PageSectionProps): JSX.Element => {
  return (
    <section className={`flex min-h-screen flex-col items-center  ${className}`}>
      {children}
    </section>
  );
};
