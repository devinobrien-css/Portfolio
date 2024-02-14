import cx from 'classnames';

interface TextSectionProps {
  children?: string
  className?: string
}
export const TextSection = ({ children, className }: TextSectionProps) => {
  return <p className={cx(className, 'font-lato dark:text-gray-200 text-gray-700')}>{children}</p>;
};
