import { L as jsxRuntimeExports } from "./server-C1jvFsDS.js";
import { L as Layout, R as Reveal } from "./Reveal-Cx-XEV-0.js";
import { P as PageHero } from "./PageHero-DUR-Qtfc.js";
import { E as EmailSignup } from "./EmailSignup-DvlvgRd8.js";
import { b as aceitIssues } from "./placeholders-D6O2jgSJ.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-I3TUVc4j.js";
import "./types-DGfzljZx.js";
function ACEit() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "ACEit · The ACE publication", title: "The Commerce Department Magazine.", description: "A tribute to creativity, collaboration, and the spirit of enterprise." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-page py-20 space-y-20", children: aceitIssues.map((issue, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { type: "default", delay: i * 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "grid md:grid-cols-12 gap-6 pb-8 border-b border-hairline", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: issue.issue }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground mt-1", children: issue.season })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "md:col-span-9 font-display text-3xl md:text-4xl font-semibold tracking-tight", children: issue.cover })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid md:grid-cols-2 gap-px bg-hairline border border-hairline", children: issue.sections.map((section, i2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow mb-3 tabular-nums", children: String(i2 + 1).padStart(2, "0") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-xl font-semibold mb-4", children: section.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-muted-foreground", children: section.items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-sm leading-relaxed", children: it }, it)) })
      ] }, section.title)) })
    ] }) }, issue.issue)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-hairline", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page py-20 grid lg:grid-cols-12 gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { type: "left", className: "lg:col-span-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow mb-4", children: "Subscribe" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl md:text-5xl font-bold tracking-tight", children: "Get the next issue in your inbox." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { type: "right", className: "lg:col-span-6 self-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(EmailSignup, {}) })
    ] }) })
  ] });
}
export {
  ACEit as component
};
