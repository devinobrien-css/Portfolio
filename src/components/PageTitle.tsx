

export const PageTitle = ({
  title
}: {
  title: string
}) => {
  return (
    <div className="flex gap-x-4">
      <h3 className="my-auto whitespace-nowrap font-code text-xl text-charcoal dark:text-light-cyan md:text-3xl">{title}</h3>
      <hr className="my-auto w-full border-b border-charcoal" />
    </div>
  );
};
