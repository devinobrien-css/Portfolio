

export const PageTitle = ({
  title
}: {
  title: string
}) => {
  return (
    <div className="flex gap-x-4">
      <h3 className="text-light-cyan whitespace-nowrap font-code text-xl md:text-3xl my-auto">{title}</h3>
      <hr className="border-b border-charcoal w-full my-auto" />
    </div>
  )
}
