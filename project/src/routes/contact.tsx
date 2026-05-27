import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Mail, MapPin, Instagram, Linkedin } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — ACE" },
      { name: "description", content: "Get in touch with ACE — for collaborations, competitions, or just to say hello." },
      { property: "og:title", content: "Contact — ACE" },
      { property: "og:description", content: "Get in touch with ACE." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(10).max(1000),
});

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      toast.error("Please check your inputs (name, valid email, message ≥ 10 characters).");
      return;
    }
    // Static handler — opens the user's mail client with prefilled content.
    const subject = encodeURIComponent(`ACE inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:hello@ace-club.school?subject=${subject}&body=${body}`;
    toast.success("Thanks — opening your email client.");
  }

  return (
    <Layout>
      <PageHero
        eyebrow="Get in touch"
        title="Write to us. We read everything."
        description="Whether you want to host a joint event, pitch a column for ACEit, or just say hello — drop us a note."
      />
      <section className="container-page py-20 grid lg:grid-cols-12 gap-16">
        <Reveal type="left" className="lg:col-span-5 space-y-8">
          <div>
            <div className="eyebrow mb-2">Email</div>
            <a href="mailto:hello@ace-club.school" className="inline-flex items-center gap-2 font-display text-xl hover:underline">
              <Mail className="h-5 w-5" /> hello@ace-club.school
            </a>
          </div>
          <div>
            <div className="eyebrow mb-2">Address</div>
            <p className="inline-flex items-start gap-2">
              <MapPin className="h-5 w-5 mt-1 shrink-0" />
              <span>
                The Commerce Block, Room 14<br />
                Your School Campus<br />
                City, India
              </span>
            </p>
          </div>
          <div>
            <div className="eyebrow mb-2">Social</div>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 grid place-items-center border border-hairline hover:bg-accent transition-colors" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="h-10 w-10 grid place-items-center border border-hairline hover:bg-accent transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal type="right" className="lg:col-span-7">
          <form onSubmit={onSubmit} className="space-y-5">
          <div>
            <label className="eyebrow block mb-2">Your name</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              maxLength={100}
              className="w-full h-12 px-4 border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div>
            <label className="eyebrow block mb-2">Email</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              maxLength={255}
              className="w-full h-12 px-4 border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div>
            <label className="eyebrow block mb-2">Message</label>
            <textarea
              required
              rows={6}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              maxLength={1000}
              className="w-full px-4 py-3 border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-y"
            />
          </div>
          <button type="submit" className="h-12 px-8 bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity">
            Send message
          </button>
          </form>
        </Reveal>
      </section>
    </Layout>
  );
}
