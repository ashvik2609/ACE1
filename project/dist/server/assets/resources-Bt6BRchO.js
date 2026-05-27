import { L as jsxRuntimeExports } from "./server-C1jvFsDS.js";
import { L as Layout, R as Reveal } from "./Reveal-Cx-XEV-0.js";
import { P as PageHero } from "./PageHero-DUR-Qtfc.js";
import { r as resources } from "./placeholders-D6O2jgSJ.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-I3TUVc4j.js";
function Resources() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "The Student Ledger", title: "Articles from the team.", description: "Selected long-form pieces from the inaugural ACE magazine." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-page py-20 space-y-px", children: resources.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { type: "default", delay: i * 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "grid md:grid-cols-12 gap-6 py-10 border-b border-hairline items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-1 text-sm tabular-nums text-muted-foreground", children: String(i + 1).padStart(2, "0") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-semibold tracking-tight leading-tight", children: r.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground mt-3", children: r.authors ?? r.author })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "md:col-span-7 text-muted-foreground leading-relaxed", children: r.description })
    ] }) }, r.title)) })
  ] });
}
export {
  Resources as component
};
