import { ReactNode } from "react";
import backgroundImage from "@/assets/Screenshot_2026-05-26_160934 copy.png";
import { Reveal } from "./Reveal";

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
    <section className="border-b border-hairline relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div className="container-page py-20 md:py-28 relative z-10">
        <Reveal type="fade" delay={0}>
          <div className="eyebrow mb-5">{eyebrow}</div>
        </Reveal>
        <Reveal type="default" delay={100}>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl">{title}</h1>
        </Reveal>
        {description && (
          <Reveal type="fade" delay={200}>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">{description}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
