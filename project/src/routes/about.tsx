import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { editorialNote, mentors } from "@/lib/placeholders";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — ACE" },
      { name: "description", content: "ACE — Alliance of Commerce and Entrepreneurship, Delhi Public School Dwarka." },
      { property: "og:title", content: "About — ACE" },
      { property: "og:description", content: "ACE — Alliance of Commerce and Entrepreneurship, DPS Dwarka." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <Layout>
      <PageHero
        eyebrow="About"
        title="ACE — Alliance of Commerce and Entrepreneurship."
        description="A student-led commerce club at Delhi Public School Dwarka."
      />

      <section className="border-b border-hairline bg-surface">
        <div className="container-page py-20 grid lg:grid-cols-2 gap-12">
          <Reveal type="left">
            <div className="eyebrow mb-4">Our Vision</div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight mb-6">
              Cultivating Tomorrow's Business Leaders
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To cultivate the next generation of innovative business leaders who will shape the future of commerce and entrepreneurship through creativity, collaboration, and ethical leadership.
            </p>
          </Reveal>
          <Reveal type="right">
            <div className="eyebrow mb-4">Our Mission</div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight mb-6">
              Empowering Students for Success
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We provide hands-on business experience, mentorship, and resources to help students develop entrepreneurial skills, financial literacy, and strategic thinking that will serve them throughout their careers.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-page py-20 border-b border-hairline">
        <div className="grid lg:grid-cols-12 gap-12">
          <Reveal type="left" className="lg:col-span-4">
            <div className="eyebrow mb-3">Editorial note</div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight">
              From the Editorial Team
            </h2>
          </Reveal>
          <Reveal type="right" className="lg:col-span-8 space-y-5 text-lg leading-relaxed text-muted-foreground whitespace-pre-line">
            {editorialNote}
          </Reveal>
        </div>
      </section>

      <section className="container-page py-20">
        <Reveal type="fade" className="mb-12 max-w-2xl">
          <div className="eyebrow mb-3">Visionary insights from our mentors</div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight">
            The voices guiding ACE.
          </h2>
        </Reveal>

        <div className="space-y-20">
          {mentors.map((m, i) => (
            <Reveal key={m.name} type="default" delay={i * 100}>
              <article className="grid lg:grid-cols-12 gap-12 border-t border-hairline pt-12">
                <header className="lg:col-span-4">
                  <div className="eyebrow mb-3">{m.role}</div>
                  <h3 className="font-display text-2xl font-semibold">{m.name}</h3>
                  <p className="mt-3 text-sm text-muted-foreground italic">{m.title}</p>
                </header>
                <div className="lg:col-span-8 space-y-8">
                  {m.sections.map((s) => (
                    <div key={s.heading}>
                      <h4 className="font-display text-lg font-semibold mb-2">{s.heading}</h4>
                      <p className="text-muted-foreground leading-relaxed">{s.body}</p>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </Layout>
  );
}
