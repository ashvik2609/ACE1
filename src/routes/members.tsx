import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { leadership, departments } from "@/lib/placeholders";

export const Route = createFileRoute("/members")({
  head: () => ({
    meta: [
      { title: "Apex Team — ACE" },
      { name: "description", content: "Meet the Apex Team of ACE — Directors, Joint Directors, Deputy Directors, and the six department teams." },
      { property: "og:title", content: "Apex Team — ACE" },
      { property: "og:description", content: "Directors and department teams running ACE this year." },
    ],
    links: [{ rel: "canonical", href: "/members" }],
  }),
  component: Members,
});




function PersonCard({ name, role, index = 0 }: { name: string; role: string; index?: number }) {
  return (
    <Reveal type="scale" delay={index * 50}>
      <article className="bg-background p-6 hover:bg-surface transition-colors duration-300 transform hover:scale-105 cursor-pointer">
        <div className="font-display font-semibold text-lg leading-tight">{name}</div>
        <div className="text-sm text-muted-foreground mt-1">{role}</div>
      </article>
    </Reveal>
  );
}


function Tier({ label, people }: { label: string; people: { name: string; role: string }[] }) {
  return (
    <Reveal type="fade">
      <div className="mb-16">
        <div className="flex items-baseline justify-between mb-6 pb-3 border-b border-hairline">
          <h3 className="font-display text-2xl font-semibold">{label}</h3>
          <span className="text-xs uppercase tracking-widest text-muted-foreground tabular-nums">
            {String(people.length).padStart(2, "0")}
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-hairline border border-hairline">
          {people.map((p, i) => (
            <PersonCard key={p.name} name={p.name} role={p.role} index={i} />
          ))}
        </div>
      </div>
    </Reveal>
  );
}

function Members() {
  return (
    <Layout>
      <PageHero
        eyebrow="The Apex Team"
        title="The students leading ACE this year."
      />

      <section className="container-page py-20">
        <Reveal type="fade" className="mb-12 max-w-2xl">
          <header>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Leadership</div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight">
              Directors, Joint Directors, and Deputy Directors.
            </h2>
          </header>
        </Reveal>

        <Tier label="Directors" people={leadership.directors} />
        <Tier label="Joint Directors" people={leadership.jointDirectors} />
        <Tier label="Deputy Directors" people={leadership.deputyDirectors} />
      </section>

      <section className="container-page pb-24">
        <Reveal type="fade" className="mb-12 max-w-2xl">
          <header>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Departments</div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight">
              Six departments, eighteen members.
            </h2>
            <p className="mt-3 text-muted-foreground">
              Finance, Marketing, Entrepreneurship, Tech, Media, and Hawkeye — each team owns a slice of how ACE runs.
            </p>
          </header>
        </Reveal>

        <div className="space-y-16">
          {departments.map((dept) => (
            <div key={dept.name}>
              <div className="flex items-baseline justify-between mb-6 pb-3 border-b border-hairline">
                <h3 className="font-display text-2xl font-semibold">{dept.name}</h3>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Department</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-hairline border border-hairline">
                {dept.members.map((name) => (
                  <PersonCard key={name} name={name} role={`${dept.name} Department`} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
