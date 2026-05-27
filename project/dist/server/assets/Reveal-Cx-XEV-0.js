import { V as reactExports, L as jsxRuntimeExports } from "./server-C1jvFsDS.js";
import { L as Link } from "./router-I3TUVc4j.js";
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};
const Icon = reactExports.forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => reactExports.createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);
const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({ className, ...props }, ref) => reactExports.createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
const __iconNode$1 = [
  ["path", { d: "M4 5h16", key: "1tepv9" }],
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 19h16", key: "1djgab" }]
];
const Menu = createLucideIcon("menu", __iconNode$1);
const __iconNode = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
const X = createLucideIcon("x", __iconNode);
const logo = "data:image/png;base64,";
const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/resources", label: "Resources" },
  { to: "/projects", label: "Projects" },
  { to: "/events", label: "Events" },
  { to: "/members", label: "Members" },
  { to: "/alumni", label: "Alumni" },
  { to: "/faculty", label: "Faculty" },
  { to: "/aceit", label: "ACEit" },
  { to: "/contact", label: "Contact" }
];
function Header() {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-50 border-b border-hairline bg-background/80 backdrop-blur-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page flex h-16 items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "flex items-center gap-2 font-display text-lg font-bold tracking-tight", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "ACE", className: "h-7 w-auto" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex items-center gap-7 text-sm", children: nav.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: n.to,
          className: "text-muted-foreground transition-colors hover:text-foreground",
          activeProps: { className: "text-foreground" },
          activeOptions: { exact: n.to === "/" },
          children: n.label
        },
        n.to
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "lg:hidden p-2",
          onClick: () => setOpen(!open),
          "aria-label": "Toggle menu",
          children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
        }
      )
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden border-t border-hairline", children: /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "container-page flex flex-col py-4 gap-3 text-sm", children: nav.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: n.to,
        onClick: () => setOpen(false),
        className: "text-muted-foreground hover:text-foreground",
        activeProps: { className: "text-foreground" },
        activeOptions: { exact: n.to === "/" },
        children: n.label
      },
      n.to
    )) }) })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "border-t border-hairline mt-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page py-12 grid gap-10 md:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "ACE", className: "h-8 w-auto" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground max-w-xs", children: "The commerce club exploring markets, finance, and entrepreneurship — one idea at a time." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow mb-3", children: "Explore" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "hover:underline", children: "About" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/projects", className: "hover:underline", children: "Projects" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/events", className: "hover:underline", children: "Events" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/aceit", className: "hover:underline", children: "ACEit Issue" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow mb-3", children: "Connect" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/members", className: "hover:underline", children: "Members" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/alumni", className: "hover:underline", children: "Alumni" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/faculty", className: "hover:underline", children: "Faculty" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "hover:underline", children: "Contact" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-hairline", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page py-5 flex flex-col md:flex-row justify-between text-xs text-muted-foreground gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " ACE — Commerce Club. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Built with intent." })
    ] }) })
  ] });
}
function Layout({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
function Reveal({
  children,
  delay = 0,
  className = "",
  type = "default"
}) {
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("in"), delay);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  const animationClass = type === "default" ? "reveal" : `reveal-${type}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: `${animationClass} ${className}`, children });
}
export {
  Layout as L,
  Reveal as R,
  createLucideIcon as c,
  logo as l
};
