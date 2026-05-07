import { V as jsxRuntimeExports } from "./worker-entry-DM7bhe6K.js";
import { c as createLucideIcon, m as motion, M as MapPin, L as Link, X } from "./router-BrhbvmJi.js";
import { A as ArrowRight } from "./arrow-right-B44OBGh5.js";
const __iconNode$3 = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = createLucideIcon("arrow-left", __iconNode$3);
const __iconNode$2 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }]
];
const Clock = createLucideIcon("clock", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
];
const ExternalLink = createLucideIcon("external-link", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const Phone = createLucideIcon("phone", __iconNode);
function LocationCard({
  name,
  eyebrow,
  address,
  hours,
  phone,
  mapsEmbed,
  mapsLink
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container mx-auto px-6 pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.8 },
      className: "grid lg:grid-cols-5 gap-6",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-3 relative overflow-hidden rounded-sm border border-gold/20 shadow-deep min-h-[400px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "iframe",
            {
              src: mapsEmbed,
              title: `Peta lokasi ${name}`,
              loading: "lazy",
              referrerPolicy: "no-referrer-when-downgrade",
              className: "absolute inset-0 w-full h-full",
              style: { border: 0, filter: "invert(0.92) hue-rotate(180deg) saturate(0.8)" },
              allowFullScreen: true
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-4 left-4 glass-heritage px-4 py-2 rounded-sm pointer-events-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.3em] text-copper", children: eyebrow }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-gold text-base", children: name })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.4em] text-copper mb-2", children: "Lokasi" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl gradient-text-gold", children: name })
          ] }),
          [
            { icon: MapPin, label: "Alamat", value: address },
            { icon: Clock, label: "Jam Buka", value: hours },
            { icon: Phone, label: "Kontak", value: phone }
          ].map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-heritage p-4 rounded-sm flex gap-4 items-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-full gradient-gold grid place-items-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(it.icon, { size: 16, className: "text-heritage-950" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.3em] text-copper mb-1", children: it.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-base text-parchment leading-snug", children: it.value })
            ] })
          ] }, it.label)),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: mapsLink,
              target: "_blank",
              rel: "noreferrer",
              className: "inline-flex items-center gap-2 w-full justify-center py-3 gradient-gold text-heritage-950 font-medium tracking-wide rounded-sm shadow-gold hover:shadow-deep transition",
              children: [
                "Buka di Google Maps",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { size: 14 })
              ]
            }
          )
        ] })
      ]
    }
  ) });
}
function ExploreNav({ nextTo, nextLabel }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.7 },
      className: "container mx-auto px-6 pb-24",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-heritage rounded-sm p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/jelajahi",
            className: "inline-flex items-center gap-2 text-sm tracking-wide text-muted-foreground hover:text-gold transition group",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 16, className: "group-hover:-translate-x-1 transition" }),
              "Kembali ke Jelajahi"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/",
              className: "inline-flex items-center gap-2 px-5 py-2.5 border border-copper/40 text-copper tracking-wide rounded-sm hover:bg-copper/10 transition text-sm",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 14 }),
                "Keluar"
              ]
            }
          ),
          nextTo && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: nextTo,
              className: "group inline-flex items-center gap-2 px-6 py-2.5 gradient-gold text-heritage-950 font-medium tracking-wide rounded-sm shadow-gold hover:shadow-deep transition-all text-sm",
              children: [
                "Selanjutnya: ",
                nextLabel,
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16, className: "group-hover:translate-x-1 transition" })
              ]
            }
          )
        ] })
      ] })
    }
  );
}
export {
  ExploreNav as E,
  LocationCard as L
};
