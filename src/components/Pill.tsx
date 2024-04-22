interface PillProps {
  children: React.ReactNode;
  className?: string;
}

export const Pill = ({ children, className }: PillProps) => {
  return (
    <span
      className={`h-fit rounded-lg bg-slate-200 px-2 py-1 font-lato text-xs text-blue-500 dark:bg-slate-700 dark:text-red-500 ${className}`}
    >
      {children}
    </span>
  );
};
