import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { alumni } from "@/lib/placeholders";

export const Route = createFileRoute("/alumni")({
  head: () => ({
    meta: [
      { title: "Alumni — ACE" },
      { name: "description", content: "Rising From Our Roots — where ACE alumni are now." },
      { property: "og:title", content: "Alumni — ACE" },
      { property: "og:description", content: "Where ACE alumni are now." },
    ],
    links: [{ rel: "canonical", href: "/alumni" }],
  }),
  component: Alumni,
});

function Alumni() {
  return (
    <Layout>
      <PageHero
        eyebrow="Rising From Our Roots"
        title="Where ACE alumni went next."
        description="Members of ACE who have gone on to study, work, and build careers across the world."
      />
      <section className="container-page py-20 space-y-12">
        {alumni.map((a, i) => (
          <Reveal key={a.name} type="default" delay={i * 100}>
            <article className="grid md:grid-cols-12 gap-8 border-t border-hairline pt-10">
            <header className="md:col-span-4">
              <div className="font-display text-xl font-semibold">{a.name}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Batch · {a.batch}</div>
              <div className="text-sm text-muted-foreground mt-2">{a.now}</div>
            </header>
            <p className="md:col-span-8 text-muted-foreground leading-relaxed">{a.note}</p>
            </article>
          </Reveal>
        ))}
      </section>
    </Layout>
  );
}
