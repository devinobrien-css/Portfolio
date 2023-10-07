import cx from 'classnames'

interface TextSectionProps {
  children?: string
  className?: string
}
export const TextSection = ({ children, className }: TextSectionProps) => {
  return <p className={cx(className, `font-lato text-gray-200`)}>{children}</p>;
};
