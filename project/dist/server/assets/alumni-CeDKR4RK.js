import { L as jsxRuntimeExports } from "./server-C1jvFsDS.js";
import { L as Layout, R as Reveal } from "./Reveal-Cx-XEV-0.js";
import { P as PageHero } from "./PageHero-DUR-Qtfc.js";
import { c as alumni } from "./placeholders-D6O2jgSJ.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-I3TUVc4j.js";
function Alumni() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Rising From Our Roots", title: "Where ACE alumni went next.", description: "Members of ACE who have gone on to study, work, and build careers across the world." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-page py-20 space-y-12", children: alumni.map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { type: "default", delay: i * 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "grid md:grid-cols-12 gap-8 border-t border-hairline pt-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "md:col-span-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl font-semibold", children: a.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs uppercase tracking-widest text-muted-foreground mt-1", children: [
          "Batch · ",
          a.batch
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground mt-2", children: a.now })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "md:col-span-8 text-muted-foreground leading-relaxed", children: a.note })
    ] }) }, a.name)) })
  ] });
}
export {
  Alumni as component
};
