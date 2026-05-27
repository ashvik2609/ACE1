import { L as jsxRuntimeExports } from "./server-C1jvFsDS.js";
import { L as Layout, R as Reveal } from "./Reveal-Cx-XEV-0.js";
import { P as PageHero } from "./PageHero-DUR-Qtfc.js";
import { p as projects } from "./placeholders-D6O2jgSJ.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-I3TUVc4j.js";
function Projects() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Selected work", title: "Things ACE has built this year." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-page py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-hairline border-y border-hairline", children: projects.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { type: "default", delay: i * 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "py-10 grid md:grid-cols-12 gap-6 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-1 text-sm tabular-nums text-muted-foreground", children: String(i + 1).padStart(2, "0") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block text-xs uppercase tracking-wider border border-hairline px-2 py-1", children: p.tag }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "md:col-span-4 font-display text-2xl font-semibold tracking-tight", children: p.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "md:col-span-4 text-muted-foreground leading-relaxed", children: p.description })
    ] }) }, p.title)) }) })
  ] });
}
export {
  Projects as component
};
