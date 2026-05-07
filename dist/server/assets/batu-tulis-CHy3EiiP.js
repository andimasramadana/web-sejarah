import { V as jsxRuntimeExports } from "./worker-entry-DM7bhe6K.js";
import { A as AnimatedPage } from "./AnimatedPage-NOVtC5KY.js";
import { S as SectionHeading } from "./SectionHeading-CJHXoJFc.js";
import { d as detailImg } from "./batu-tulis-detail-tDjPyXho.js";
import { m as motion } from "./router-BrhbvmJi.js";
import { L as LocationCard, E as ExploreNav } from "./ExploreNav-Bfozlz3t.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./arrow-right-B44OBGh5.js";
const facts = [
  { k: "Bahasa", v: "Sunda Kuno" },
  { k: "Aksara", v: "Sunda Kuno / Kawi" },
  { k: "Era", v: "Abad ke-16" },
  { k: "Pemilik", v: "Sri Baduga Maharaja" }
];
function BatuTulisSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "batu-tulis", className: "relative py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, x: -40 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
        className: "relative perspective-1000",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative preserve-3d animate-float", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-4 gradient-gold opacity-20 blur-3xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: detailImg,
              alt: "Detail aksara Sunda Kuno pada Prasasti Batu Tulis",
              loading: "lazy",
              width: 1024,
              height: 1024,
              className: "relative w-full aspect-square object-cover rounded-sm shadow-deep border border-gold/20"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -bottom-6 -right-6 glass-heritage p-5 rounded-sm shadow-gold max-w-[220px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.3em] text-copper mb-1", children: "Inscription" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-gold text-sm leading-snug", children: '"Wangsit dari masa silam, terukir abadi di batu."' })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeading,
        {
          eyebrow: "Prasasti Batu Tulis",
          title: "Batu yang",
          highlight: "mengingat",
          description: "Prasasti Batu Tulis adalah salah satu peninggalan paling penting dari Kerajaan Sunda Pajajaran. Terletak di Bogor, prasasti ini memuat catatan tentang Sri Baduga Maharaja — raja yang dimuliakan dalam tradisi lisan Sunda."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid grid-cols-2 gap-5", children: facts.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.1, duration: 0.6 },
          className: "glass-heritage p-5 rounded-sm border-l-2 border-gold/60",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.3em] text-copper mb-1", children: f.k }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg text-parchment", children: f.v })
          ]
        },
        f.k
      )) })
    ] })
  ] }) });
}
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedPage, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-24", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(BatuTulisSection, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsx(LocationCard, { name: "Prasasti Batu Tulis", eyebrow: "Situs Heritage Pajajaran", address: "Jl. Batutulis No. 54, Batutulis, Kec. Bogor Selatan, Kota Bogor, Jawa Barat 16133", hours: "Selasa – Minggu · 08.00 – 16.00 WIB", phone: "+62 251 8323 644", mapsEmbed: "https://www.google.com/maps?q=Prasasti+Batu+Tulis+Bogor&output=embed", mapsLink: "https://maps.google.com/?q=Prasasti+Batu+Tulis+Bogor" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(ExploreNav, { nextTo: "/museum-peta", nextLabel: "Museum Peta" })
] }) });
export {
  SplitComponent as component
};
