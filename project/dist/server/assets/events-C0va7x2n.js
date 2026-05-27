import { L as jsxRuntimeExports } from "./server-C1jvFsDS.js";
import { L as Layout, R as Reveal } from "./Reveal-Cx-XEV-0.js";
import { P as PageHero } from "./PageHero-DUR-Qtfc.js";
import { f as events, a as accolades } from "./placeholders-D6O2jgSJ.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-I3TUVc4j.js";
function Events() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Calendar & accolades", title: "What we host. Where we compete.", description: "Glimpses of MÉLANGE SPECTRUM 2025, our flagship events, and the competitions our members have placed in." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-page py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { type: "fade", className: "eyebrow mb-6", children: "Events" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-10", children: events.map((e, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { type: "default", delay: i * 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "grid md:grid-cols-12 gap-6 py-8 border-t border-hairline", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold leading-tight", children: e.name }),
          e.date && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground mt-2", children: e.date }),
          e.venue && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: e.venue }),
          e.organizers && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs uppercase tracking-widest text-muted-foreground mt-3", children: [
            "Organized by · ",
            e.organizers
          ] }),
          e.resourcePerson && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs uppercase tracking-widest text-muted-foreground mt-3", children: [
            "Resource Person · ",
            e.resourcePerson
          ] }),
          e.participants && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs uppercase tracking-widest text-muted-foreground mt-1", children: [
            "Participants · ",
            e.participants
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-8 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: e.description }),
          e.winners && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow mb-2", children: "Winners" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "text-sm space-y-1", children: e.winners.map((w) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: w }, w)) })
          ] }),
          e.note && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground italic leading-relaxed", children: e.note })
        ] })
      ] }) }, e.name)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-hairline", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { type: "fade", className: "mb-10 max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow mb-3", children: "Accolades of the Club" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-semibold leading-tight", children: "Where we placed." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-hairline divide-y divide-hairline", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-12 gap-4 py-3 text-xs uppercase tracking-widest text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-2", children: "Position" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-3", children: "Event" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-3", children: "Venue" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-4", children: "Participants" })
        ] }),
        accolades.map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-12 gap-4 py-5 items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-2 font-display font-semibold", children: a.position }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-3 font-medium", children: a.event }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-3 text-sm text-muted-foreground", children: a.venue }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "md:col-span-4 text-sm text-muted-foreground space-y-1", children: a.participants.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: p }, p)) })
        ] }, i))
      ] })
    ] }) })
  ] });
}
export {
  Events as component
};
