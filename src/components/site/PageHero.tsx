import { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
}) {
  return (
    <section className="border-b border-hairline">
      <div className="container-page py-20 md:py-28">
        <div className="eyebrow mb-5">{eyebrow}</div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl">{title}</h1>
        {description && (
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">{description}</p>
        )}
      </div>
    </section>
  );
}
