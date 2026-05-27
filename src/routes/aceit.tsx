import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { EmailSignup } from "@/components/site/EmailSignup";
import { aceitIssues } from "@/lib/placeholders";

export const Route = createFileRoute("/aceit")({
  head: () => ({
    meta: [
      { title: "ACEit — ACE" },
      { name: "description", content: "The ACE Commerce Department Magazine — inaugural edition 2025-26." },
      { property: "og:title", content: "ACEit — ACE" },
      { property: "og:description", content: "Our inaugural publication." },
    ],
    links: [{ rel: "canonical", href: "/aceit" }],
  }),
  component: ACEit,
});

function ACEit() {
  return (
    <Layout>
      <PageHero
        eyebrow="ACEit · The ACE publication"
        title="The Commerce Department Magazine."
        description="A tribute to creativity, collaboration, and the spirit of enterprise."
      />

      <section className="container-page py-20 space-y-20">
        {aceitIssues.map((issue, i) => (
          <Reveal key={issue.issue} type="default" delay={i * 100}>
            <article>
            <header className="grid md:grid-cols-12 gap-6 pb-8 border-b border-hairline">
              <div className="md:col-span-3">
                <div className="eyebrow">{issue.issue}</div>
                <div className="text-sm text-muted-foreground mt-1">{issue.season}</div>
              </div>
              <h3 className="md:col-span-9 font-display text-3xl md:text-4xl font-semibold tracking-tight">
                {issue.cover}
              </h3>
            </header>

            <div className="mt-10 grid md:grid-cols-2 gap-px bg-hairline border border-hairline">
              {issue.sections.map((section, i) => (
                <div key={section.title} className="bg-background p-8">
                  <div className="eyebrow mb-3 tabular-nums">{String(i + 1).padStart(2, "0")}</div>
                  <h4 className="font-display text-xl font-semibold mb-4">{section.title}</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    {section.items.map((it) => (
                      <li key={it} className="text-sm leading-relaxed">{it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="border-t border-hairline">
        <div className="container-page py-20 grid lg:grid-cols-12 gap-12">
          <Reveal type="left" className="lg:col-span-6">
            <div className="eyebrow mb-4">Subscribe</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Get the next issue in your inbox.</h2>
          </Reveal>
          <Reveal type="right" className="lg:col-span-6 self-end">
            <EmailSignup />
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
