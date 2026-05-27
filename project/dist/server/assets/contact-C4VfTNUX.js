import { V as reactExports, L as jsxRuntimeExports } from "./server-C1jvFsDS.js";
import { c as createLucideIcon, L as Layout, R as Reveal } from "./Reveal-Cx-XEV-0.js";
import { P as PageHero } from "./PageHero-DUR-Qtfc.js";
import { t as toast } from "./router-I3TUVc4j.js";
import { o as objectType, s as stringType } from "./types-DGfzljZx.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$3 = [
  ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5", key: "2e1cvw" }],
  ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" }],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }]
];
const Instagram = createLucideIcon("instagram", __iconNode$3);
const __iconNode$2 = [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f"
    }
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }]
];
const Linkedin = createLucideIcon("linkedin", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
const Mail = createLucideIcon("mail", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
];
const MapPin = createLucideIcon("map-pin", __iconNode);
const schema = objectType({
  name: stringType().trim().min(1).max(100),
  email: stringType().trim().email().max(255),
  message: stringType().trim().min(10).max(1e3)
});
function Contact() {
  const [form, setForm] = reactExports.useState({
    name: "",
    email: "",
    message: ""
  });
  function onSubmit(e) {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      toast.error("Please check your inputs (name, valid email, message ≥ 10 characters).");
      return;
    }
    const subject = encodeURIComponent(`ACE inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}

— ${form.name} (${form.email})`);
    window.location.href = `mailto:hello@ace-club.school?subject=${subject}&body=${body}`;
    toast.success("Thanks — opening your email client.");
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Get in touch", title: "Write to us. We read everything.", description: "Whether you want to host a joint event, pitch a column for ACEit, or just say hello — drop us a note." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-page py-20 grid lg:grid-cols-12 gap-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { type: "left", className: "lg:col-span-5 space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow mb-2", children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "mailto:hello@ace-club.school", className: "inline-flex items-center gap-2 font-display text-xl hover:underline", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-5 w-5" }),
            " hello@ace-club.school"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow mb-2", children: "Address" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "inline-flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-5 w-5 mt-1 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "The Commerce Block, Room 14",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "Your School Campus",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "City, India"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow mb-2", children: "Social" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "h-10 w-10 grid place-items-center border border-hairline hover:bg-accent transition-colors", "aria-label": "Instagram", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "h-10 w-10 grid place-items-center border border-hairline hover:bg-accent transition-colors", "aria-label": "LinkedIn", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "h-4 w-4" }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { type: "right", className: "lg:col-span-7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "eyebrow block mb-2", children: "Your name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", required: true, value: form.name, onChange: (e) => setForm({
            ...form,
            name: e.target.value
          }), maxLength: 100, className: "w-full h-12 px-4 border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "eyebrow block mb-2", children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", required: true, value: form.email, onChange: (e) => setForm({
            ...form,
            email: e.target.value
          }), maxLength: 255, className: "w-full h-12 px-4 border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "eyebrow block mb-2", children: "Message" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, rows: 6, value: form.message, onChange: (e) => setForm({
            ...form,
            message: e.target.value
          }), maxLength: 1e3, className: "w-full px-4 py-3 border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-y" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "h-12 px-8 bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity", children: "Send message" })
      ] }) })
    ] })
  ] });
}
export {
  Contact as component
};
