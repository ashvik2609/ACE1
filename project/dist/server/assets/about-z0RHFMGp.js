import { L as jsxRuntimeExports } from "./server-C1jvFsDS.js";
import { L as Layout, R as Reveal } from "./Reveal-Cx-XEV-0.js";
import { P as PageHero } from "./PageHero-DUR-Qtfc.js";
import { e as editorialNote, m as mentors } from "./placeholders-D6O2jgSJ.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-I3TUVc4j.js";
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "About", title: "ACE — Alliance of Commerce and Entrepreneurship.", description: "A student-led commerce club at Delhi Public School Dwarka." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-hairline bg-surface", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page py-20 grid lg:grid-cols-2 gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { type: "left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow mb-4", children: "Our Vision" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-semibold leading-tight mb-6", children: "Cultivating Tomorrow's Business Leaders" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground leading-relaxed", children: "To cultivate the next generation of innovative business leaders who will shape the future of commerce and entrepreneurship through creativity, collaboration, and ethical leadership." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { type: "right", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow mb-4", children: "Our Mission" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-semibold leading-tight mb-6", children: "Empowering Students for Success" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground leading-relaxed", children: "We provide hands-on business experience, mentorship, and resources to help students develop entrepreneurial skills, financial literacy, and strategic thinking that will serve them throughout their careers." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-page py-20 border-b border-hairline", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { type: "left", className: "lg:col-span-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow mb-3", children: "Editorial note" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-semibold leading-tight", children: "From the Editorial Team" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { type: "right", className: "lg:col-span-8 space-y-5 text-lg leading-relaxed text-muted-foreground whitespace-pre-line", children: editorialNote })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-page py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { type: "fade", className: "mb-12 max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow mb-3", children: "Visionary insights from our mentors" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-semibold leading-tight", children: "The voices guiding ACE." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-20", children: mentors.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { type: "default", delay: i * 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "grid lg:grid-cols-12 gap-12 border-t border-hairline pt-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "lg:col-span-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow mb-3", children: m.role }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-semibold", children: m.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground italic", children: m.title })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-8 space-y-8", children: m.sections.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-lg font-semibold mb-2", children: s.heading }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: s.body })
        ] }, s.heading)) })
      ] }) }, m.name)) })
    ] })
  ] });
}
export {
  About as component
};
