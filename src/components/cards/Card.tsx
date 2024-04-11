import cx from "classnames";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className }: CardProps): JSX.Element => {
  return (
    <div
      className={cx(
        "z-[998] w-full rounded bg-white p-4 text-left shadow transition-all hover:bg-gray-50  dark:bg-slate-700/80 dark:hover:bg-gray-700 md:w-[48%] ",
        className,
      )}
    >
      {children}
    </div>
  );
};
