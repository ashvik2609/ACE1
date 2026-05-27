import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { EmailSignup } from "@/components/site/EmailSignup";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/image-removebg-preview.png";
import backgroundImage from "@/assets/image.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ACE — Alliance of Commerce and Entrepreneurship" },
      { name: "description", content: "ACE — Alliance of Commerce and Entrepreneurship, Delhi Public School Dwarka." },
      { property: "og:title", content: "ACE — Alliance of Commerce and Entrepreneurship" },
      { property: "og:description", content: "Alliance of Commerce and Entrepreneurship, DPS Dwarka." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <Layout>
      <section className="border-b border-hairline relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="container-page py-20 md:py-32 relative z-10">
          <Reveal type="fade" delay={0}>
            <div className="mb-8">
              <img src={logo} alt="ACE" className="h-16 w-auto" />
            </div>
          </Reveal>
          <Reveal type="default" delay={100}>
            <div className="eyebrow mb-6">Delhi Public School Dwarka</div>
          </Reveal>
          <Reveal type="default" delay={200}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] max-w-5xl">
              ACE — Alliance of<br />Commerce and<br />Entrepreneurship.
            </h1>
          </Reveal>
          <Reveal type="default" delay={300}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/members" className="inline-flex items-center gap-2 h-12 px-6 bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity">
                Meet the Apex Team <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/about" className="inline-flex items-center gap-2 h-12 px-6 border border-input text-sm font-medium hover:bg-accent transition-colors">
                About
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="container-page py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            <Reveal type="scale" delay={0}>
              <div className="text-center md:text-left">
                <div className="font-display text-6xl md:text-7xl font-bold tracking-tight mb-3">6</div>
                <div className="text-lg font-medium mb-2">Departments</div>
                <p className="text-sm text-muted-foreground">Finance, Marketing, Entrepreneurship, Tech, Media, and Hawkeye — each driving ACE forward.</p>
              </div>
            </Reveal>
            <Reveal type="scale" delay={100}>
              <div className="text-center md:text-left">
                <div className="font-display text-6xl md:text-7xl font-bold tracking-tight mb-3">50+</div>
                <div className="text-lg font-medium mb-2">Members</div>
                <p className="text-sm text-muted-foreground">A growing community of passionate students, entrepreneurs, and future business leaders.</p>
              </div>
            </Reveal>
            <Reveal type="scale" delay={200}>
              <div className="text-center md:text-left">
                <div className="font-display text-6xl md:text-7xl font-bold tracking-tight mb-3">10+</div>
                <div className="text-lg font-medium mb-2">Years of Excellence</div>
                <p className="text-sm text-muted-foreground">A decade of fostering commerce education, innovation, and entrepreneurial spirit.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section>
        <div className="container-page py-24 grid lg:grid-cols-12 gap-12">
          <Reveal type="left" className="lg:col-span-6">
            <div className="eyebrow mb-4">Stay in the loop</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Get ACE updates in your inbox.</h2>
          </Reveal>
          <Reveal type="right" className="lg:col-span-6 self-end">
            <EmailSignup />
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
