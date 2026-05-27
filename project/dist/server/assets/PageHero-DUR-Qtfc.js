import { L as jsxRuntimeExports } from "./server-C1jvFsDS.js";
function PageHero({
  eyebrow,
  title,
  description
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-hairline", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page py-20 md:py-28", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow mb-5", children: eyebrow }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-6xl font-bold tracking-tight max-w-3xl", children: title }),
    description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed", children: description })
  ] }) });
}
export {
  PageHero as P
};
