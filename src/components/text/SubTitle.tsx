
interface SubTitleProps {
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}

/**
 * SubTitle component
 * @param {SubTitleProps} props - The props
 * @returns {JSX.Element} The SubTitle component
 */
export const SubTitle = ({ children, className }: SubTitleProps): JSX.Element => {
  return (
    <p className={`font-montserrat text-paynes-grey dark:text-moonstone ${className}`}>
      {children}
    </p>
  );
};
