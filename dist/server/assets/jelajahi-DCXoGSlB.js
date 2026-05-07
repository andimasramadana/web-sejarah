import { V as jsxRuntimeExports } from "./worker-entry-DM7bhe6K.js";
import { c as createLucideIcon, p as petaImg, m as motion, L as Link } from "./router-BrhbvmJi.js";
import { A as AnimatedPage } from "./AnimatedPage-NOVtC5KY.js";
import { S as SectionHeading } from "./SectionHeading-CJHXoJFc.js";
import { d as detailImg } from "./batu-tulis-detail-tDjPyXho.js";
import { A as ArrowRight } from "./arrow-right-B44OBGh5.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [
  [
    "path",
    {
      d: "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",
      key: "169xi5"
    }
  ],
  ["path", { d: "M15 5.764v15", key: "1pn4in" }],
  ["path", { d: "M9 3.236v15", key: "1uimfh" }]
];
const Map = createLucideIcon("map", __iconNode$1);
const __iconNode = [
  ["path", { d: "M19 17V5a2 2 0 0 0-2-2H4", key: "zz82l3" }],
  [
    "path",
    {
      d: "M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",
      key: "1ph1d7"
    }
  ]
];
const Scroll = createLucideIcon("scroll", __iconNode);
const places = [{
  to: "/batu-tulis",
  title: "Prasasti Batu Tulis",
  eyebrow: "Peninggalan Pajajaran",
  desc: "Batu bertulis yang memuat catatan tentang Sri Baduga Maharaja — saksi Kerajaan Sunda Pajajaran.",
  img: detailImg,
  icon: Scroll
}, {
  to: "/museum-peta",
  title: "Museum Peta",
  eyebrow: "Kartografi Nusantara",
  desc: "Koleksi peta antik yang menggambarkan bagaimana Nusantara dipetakan oleh dunia berabad-abad lalu.",
  img: petaImg,
  icon: Map
}];
function JelajahiPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedPage, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pt-32 pb-24 min-h-screen", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { align: "center", eyebrow: "Jelajahi Tempat", title: "Ingin menjelajahi", highlight: "mana dulu?", description: "Pilih satu dari dua tempat bersejarah di Bogor untuk mulai perjalanan Anda." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto", children: places.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
      opacity: 0,
      y: 30
    }, animate: {
      opacity: 1,
      y: 0
    }, transition: {
      delay: i * 0.15,
      duration: 0.8
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: p.to, className: "group block relative overflow-hidden rounded-sm border border-gold/20 shadow-deep hover:shadow-gold transition-all duration-500", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/5] overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.img, alt: p.title, className: "absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000", width: 800, height: 1e3 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-heritage-950 via-heritage-950/60 to-heritage-950/20" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col justify-end p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full gradient-gold grid place-items-center mb-5 shadow-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(p.icon, { size: 20, className: "text-heritage-950" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.4em] text-copper mb-2", children: p.eyebrow }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl md:text-4xl gradient-text-gold mb-3", children: p.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-5 max-w-md", children: p.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-gold text-sm tracking-wide group-hover:gap-4 transition-all", children: [
          "Mulai jelajahi",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
        ] })
      ] })
    ] }) }, p.to)) })
  ] }) }) });
}
export {
  JelajahiPage as component
};
