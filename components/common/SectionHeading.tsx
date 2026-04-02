type SectionHeadingProps = {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
}

export function SectionHeading({ title, description, icon }: SectionHeadingProps) {
  return (
    <div className="space-y-4">
      <div className="flex flex-row items-center gap-4">
      {icon && (<div className="flex justify-center text-primary">{icon}
      </div>
      )}

      <h2 className="text-3xl font-extrabold tracking-wide sm:text-4xl md:text-5xl ">{title}</h2>
      </div>
      <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto md:mx-0">
        {description}
      </p>
    </div>
  )
}