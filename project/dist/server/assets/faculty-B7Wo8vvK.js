import { L as jsxRuntimeExports } from "./server-C1jvFsDS.js";
import { L as Layout, R as Reveal } from "./Reveal-Cx-XEV-0.js";
import { P as PageHero } from "./PageHero-DUR-Qtfc.js";
import { g as faculty } from "./placeholders-D6O2jgSJ.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-I3TUVc4j.js";
function Faculty() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Voices of the Faculty", title: "The teachers who keep us on track.", description: "Messages from the Commerce Department faculty at DPS Dwarka." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-page py-20 space-y-12", children: faculty.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { type: "default", delay: i * 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "grid md:grid-cols-12 gap-8 border-t border-hairline pt-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "md:col-span-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl font-semibold", children: f.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground mt-1", children: f.role })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "md:col-span-8 text-muted-foreground leading-relaxed", children: f.note })
    ] }) }, f.name)) })
  ] });
}
export {
  Faculty as component
};
