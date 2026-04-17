interface PillProps {
  children: React.ReactNode;
  className?: string;
}

export const Pill = ({ children, className }: PillProps) => {
  return (
    <span
      className={`h-fit rounded-lg bg-neutral-200 px-2 py-1 font-lato text-xs text-neutral-700 dark:bg-neutral-700 dark:text-neutral-300 ${className}`}
    >
      {children}
    </span>
  );
};
