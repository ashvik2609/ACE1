import { L as jsxRuntimeExports } from "./server-C1jvFsDS.js";
import { L as Layout, R as Reveal } from "./Reveal-Cx-XEV-0.js";
import { P as PageHero } from "./PageHero-DUR-Qtfc.js";
import { l as leadership, d as departments } from "./placeholders-D6O2jgSJ.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-I3TUVc4j.js";
function PersonCard({
  name,
  role
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { type: "scale", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "bg-background p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-semibold text-lg leading-tight", children: name }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground mt-1", children: role })
  ] }) });
}
function Tier({
  label,
  people
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-between mb-6 pb-3 border-b border-hairline", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-semibold", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest text-muted-foreground tabular-nums", children: String(people.length).padStart(2, "0") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-hairline border border-hairline", children: people.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(PersonCard, { name: p.name, role: p.role }, p.name)) })
  ] });
}
function Members() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "The Apex Team", title: "The students leading ACE this year." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-page py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { type: "fade", className: "mb-12 max-w-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground mb-3", children: "Leadership" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-semibold leading-tight", children: "Directors, Joint Directors, and Deputy Directors." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tier, { label: "Directors", people: leadership.directors }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tier, { label: "Joint Directors", people: leadership.jointDirectors }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tier, { label: "Deputy Directors", people: leadership.deputyDirectors })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-page pb-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { type: "fade", className: "mb-12 max-w-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground mb-3", children: "Departments" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-semibold leading-tight", children: "Six departments, eighteen members." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Finance, Marketing, Entrepreneurship, Tech, Media, and Hawkeye — each team owns a slice of how ACE runs." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-16", children: departments.map((dept) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-between mb-6 pb-3 border-b border-hairline", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-semibold", children: dept.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Department" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-px bg-hairline border border-hairline", children: dept.members.map((name) => /* @__PURE__ */ jsxRuntimeExports.jsx(PersonCard, { name, role: `${dept.name} Department` }, name)) })
      ] }, dept.name)) })
    ] })
  ] });
}
export {
  Members as component
};
