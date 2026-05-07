import { V as jsxRuntimeExports } from "./worker-entry-DM7bhe6K.js";
import { A as AnimatedPage } from "./AnimatedPage-NOVtC5KY.js";
import { S as SectionHeading } from "./SectionHeading-CJHXoJFc.js";
import { m as motion, p as petaImg } from "./router-BrhbvmJi.js";
import { L as LocationCard, E as ExploreNav } from "./ExploreNav-Bfozlz3t.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./arrow-right-B44OBGh5.js";
function MuseumPetaSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "museum-peta", className: "relative py-24 md:py-32 bg-heritage-900/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "order-2 lg:order-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeading,
        {
          eyebrow: "Museum Peta",
          title: "Kartografi",
          highlight: "Nusantara",
          description: "Koleksi peta kuno menampilkan bagaimana para penjelajah, kartografer, dan kerajaan memandang Nusantara berabad-abad lalu — dari kompas tua, naga laut, hingga jalur rempah yang membentuk dunia."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-10 space-y-4", children: [
        "Peta dunia abad ke-16 dengan ornamen kompas emas",
        "Kartografi Nusantara dari era VOC dan kolonial",
        "Sketsa jalur rempah dari Maluku ke Eropa",
        "Atlas heritage karya kartografer lokal Bogor"
      ].map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.li,
        {
          initial: { opacity: 0, x: -20 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.1 },
          className: "flex items-start gap-3 text-muted-foreground",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-2 inline-block w-2 h-px bg-gold" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t })
          ]
        },
        t
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.9, rotateY: 12 },
        whileInView: { opacity: 1, scale: 1, rotateY: 0 },
        viewport: { once: true },
        transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
        className: "order-1 lg:order-2 relative perspective-1000",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-6 gradient-gold opacity-15 blur-3xl rounded-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative preserve-3d", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: petaImg,
                alt: "Peta antik Nusantara di Museum Peta",
                loading: "lazy",
                width: 1920,
                height: 1280,
                className: "w-full aspect-[3/2] object-cover rounded-sm shadow-deep border border-gold/20"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 left-4 glass-heritage px-4 py-2 rounded-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.3em] text-gold", children: "Est. 1745" }) })
          ] })
        ]
      }
    )
  ] }) });
}
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedPage, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-24 bg-heritage-950", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(MuseumPetaSection, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsx(LocationCard, { name: "Museum Peta", eyebrow: "Museum Pembela Tanah Air", address: "Jl. Jenderal Sudirman No. 35, Sempur, Kec. Bogor Tengah, Kota Bogor, Jawa Barat 16129", hours: "Selasa – Minggu · 08.00 – 15.00 WIB", phone: "+62 251 8324 945", mapsEmbed: "https://www.google.com/maps?q=Museum+PETA+Bogor&output=embed", mapsLink: "https://maps.google.com/?q=Museum+PETA+Bogor" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(ExploreNav, { nextTo: "/batu-tulis", nextLabel: "Prasasti Batu Tulis" })
] }) });
export {
  SplitComponent as component
};
