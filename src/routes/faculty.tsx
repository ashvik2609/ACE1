import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { faculty } from "@/lib/placeholders";

export const Route = createFileRoute("/faculty")({
  head: () => ({
    meta: [
      { title: "Faculty — ACE" },
      { name: "description", content: "Voices of the Faculty — the Commerce Department teachers who guide ACE." },
      { property: "og:title", content: "Faculty — ACE" },
      { property: "og:description", content: "Commerce Department teachers who guide ACE." },
    ],
    links: [{ rel: "canonical", href: "/faculty" }],
  }),
  component: Faculty,
});

function Faculty() {
  return (
    <Layout>
      <PageHero
        eyebrow="Voices of the Faculty"
        title="The teachers who keep us on track."
        description="Messages from the Commerce Department faculty at DPS Dwarka."
      />
      <section className="container-page py-20 space-y-12">
        {faculty.map((f, i) => (
          <Reveal key={f.name} type="default" delay={i * 100}>
            <article className="grid md:grid-cols-12 gap-8 border-t border-hairline pt-10 group cursor-pointer hover:opacity-80 transition-opacity duration-300">
              <header className="md:col-span-4">
                <div className="font-display text-xl font-semibold group-hover:text-foreground transition-colors duration-300">{f.name}</div>
                <div className="text-sm text-muted-foreground mt-1 group-hover:text-foreground transition-colors duration-300">{f.role}</div>
              </header>
              <p className="md:col-span-8 text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">{f.note}</p>
            </article>
          </Reveal>
        ))}
      </section>
    </Layout>
  );
}
