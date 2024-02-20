import cx from 'classnames';

interface TextSectionProps {
  children?: string
  className?: string
}

/**
 * TextSection component
 * @param {TextSectionProps} props - The props
 * @returns {JSX.Element} The TextSection component
 */
export const TextSection = ({ children, className }: TextSectionProps): JSX.Element => {
  return <p className={cx(className, 'font-lato dark:text-gray-200 text-gray-700')}>{children}</p>;
};
