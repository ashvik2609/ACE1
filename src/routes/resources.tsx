import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { resources } from "@/lib/placeholders";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — ACE" },
      { name: "description", content: "Long-form articles from the inaugural ACE magazine — Amul, cryptocurrency, careers in commerce, and more." },
      { property: "og:title", content: "Resources — ACE" },
      { property: "og:description", content: "Articles from the inaugural ACE magazine." },
    ],
    links: [{ rel: "canonical", href: "/resources" }],
  }),
  component: Resources,
});

function Resources() {
  return (
    <Layout>
      <PageHero
        eyebrow="The Student Ledger"
        title="Articles from the team."
        description="Selected long-form pieces from the inaugural ACE magazine."
      />
      <section className="container-page py-20 space-y-px">
        {resources.map((r, i) => (
          <Reveal key={r.title} type="default" delay={i * 100}>
            <article className="grid md:grid-cols-12 gap-6 py-10 border-b border-hairline items-start group cursor-pointer hover:opacity-75 transition-opacity duration-300">
            <div className="md:col-span-1 text-sm tabular-nums text-muted-foreground group-hover:translate-x-1 transition-transform duration-300">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="md:col-span-4">
              <h3 className="font-display text-2xl font-semibold tracking-tight leading-tight group-hover:translate-x-2 transition-transform duration-300">{r.title}</h3>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-3 group-hover:text-foreground transition-colors duration-300">
                {r.authors ?? r.author}
              </div>
            </div>
            <p className="md:col-span-7 text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">{r.description}</p>
            </article>
          </Reveal>
        ))}
      </section>
    </Layout>
  );
}
