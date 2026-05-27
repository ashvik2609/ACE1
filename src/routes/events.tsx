import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { events, accolades } from "@/lib/placeholders";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — ACE" },
      { name: "description", content: "Annual Fest 2025, Mock Stock, Accountancy workshop, and the club's accolades." },
      { property: "og:title", content: "Events — ACE" },
      { property: "og:description", content: "ACE events and accolades." },
    ],
    links: [{ rel: "canonical", href: "/events" }],
  }),
  component: Events,
});

function Events() {
  return (
    <Layout>
      <PageHero
        eyebrow="Calendar & accolades"
        title="What we host. Where we compete."
        description="Glimpses of MÉLANGE SPECTRUM 2025, our flagship events, and the competitions our members have placed in."
      />

      <section className="container-page py-20">
        <Reveal type="fade" className="eyebrow mb-6">Events</Reveal>
        <div className="space-y-10">
          {events.map((e, i) => (
            <Reveal key={e.name} type="default" delay={i * 100}>
              <article className="grid md:grid-cols-12 gap-6 py-8 border-t border-hairline group cursor-pointer hover:opacity-80 transition-opacity duration-300">
              <div className="md:col-span-4">
                <h3 className="font-display text-xl font-semibold leading-tight group-hover:translate-x-2 transition-transform duration-300">{e.name}</h3>
                {e.date && <div className="text-sm text-muted-foreground mt-2">{e.date}</div>}
                {e.venue && <div className="text-sm text-muted-foreground">{e.venue}</div>}
                {e.organizers && (
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mt-3">
                    Organized by · {e.organizers}
                  </div>
                )}
                {e.resourcePerson && (
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mt-3">
                    Resource Person · {e.resourcePerson}
                  </div>
                )}
                {e.participants && (
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                    Participants · {e.participants}
                  </div>
                )}
              </div>
              <div className="md:col-span-8 space-y-4">
                <p className="text-muted-foreground leading-relaxed">{e.description}</p>
                {e.winners && (
                  <div>
                    <div className="eyebrow mb-2">Winners</div>
                    <ul className="text-sm space-y-1">
                      {e.winners.map((w) => (
                        <li key={w}>{w}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {e.note && <p className="text-sm text-muted-foreground italic leading-relaxed">{e.note}</p>}
              </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-hairline">
        <div className="container-page py-20">
          <Reveal type="fade" className="mb-10 max-w-2xl">
            <div className="eyebrow mb-3">Accolades of the Club</div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight">
              Where we placed.
            </h2>
          </Reveal>

          <div className="border-t border-hairline divide-y divide-hairline">
            <div className="grid md:grid-cols-12 gap-4 py-3 text-xs uppercase tracking-widest text-muted-foreground">
              <div className="md:col-span-2">Position</div>
              <div className="md:col-span-3">Event</div>
              <div className="md:col-span-3">Venue</div>
              <div className="md:col-span-4">Participants</div>
            </div>
            {accolades.map((a, i) => (
              <div key={i} className="grid md:grid-cols-12 gap-4 py-5 items-start">
                <div className="md:col-span-2 font-display font-semibold">{a.position}</div>
                <div className="md:col-span-3 font-medium">{a.event}</div>
                <div className="md:col-span-3 text-sm text-muted-foreground">{a.venue}</div>
                <ul className="md:col-span-4 text-sm text-muted-foreground space-y-1">
                  {a.participants.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
