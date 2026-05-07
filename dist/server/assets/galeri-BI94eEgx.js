import { r as reactExports, V as jsxRuntimeExports } from "./worker-entry-DM7bhe6K.js";
import { A as AnimatedPage } from "./AnimatedPage-NOVtC5KY.js";
import { S as SectionHeading } from "./SectionHeading-CJHXoJFc.js";
import { m as motion } from "./router-BrhbvmJi.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const g1 = "/assets/galeri-1-UB8isvNO.jpg";
const g2 = "/assets/galeri-2-BMc73pr2.jpg";
const g3 = "/assets/galeri-3-C6hdac0D.jpg";
const g4 = "/assets/galeri-4-FbhnvVn6.jpg";
const g5 = "/assets/galeri-5-B2WW5QdQ.jpg";
const g6 = "/assets/galeri-6-C1GpKtWi.jpg";
const items = [
  { src: g1, title: "Prasasti Batu Tulis", caption: " Kisah Kesedihan Prabu Surawisesa, Ditemukan Adolf Winkler Sebelum Direlokasi ke Museum" },
  { src: g2, title: "Senjata Perang", caption: "Berbagai jenis senjata perang." },
  { src: g3, title: "Perlengkapan perang", caption: "Sebuah etalase yang memajang perlengkapan tentara PETA tentara juga diajarkan cara memegang samurai" },
  { src: g4, title: "Diorama", caption: "Diorama di museum PETA Bogor" },
  { src: g5, title: "Pelatihan", caption: "Pelatihan Tentara" },
  { src: g6, title: "Relief", caption: "Beberapa relief yang ada di pintu masuk Museum PETA menggambarkan sejarah perkembangan tentara PETA" }
];
function Galeri() {
  const scrollerRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onWheel = (e) => {
      if (e.deltaY === 0) return;
      const max = el.scrollWidth - el.clientWidth;
      if (max <= 0) return;
      const atStart = el.scrollLeft <= 0 && e.deltaY < 0;
      const atEnd = el.scrollLeft >= max - 1 && e.deltaY > 0;
      if (atStart || atEnd) return;
      e.preventDefault();
      el.scrollBy({ left: e.deltaY, behavior: "smooth" });
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-24 md:py-32 pt-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeading,
      {
        align: "center",
        eyebrow: "Galeri Heritage",
        title: "Koleksi",
        highlight: "Visual",
        description: "Sebuah perjalanan visual menyusuri koleksi prasasti, naskah, dan peta yang membentuk narasi heritage Pajajaran. Geser ke samping untuk menjelajah."
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref: scrollerRef,
        className: "mt-16 overflow-x-auto overflow-y-hidden scroll-smooth pb-8",
        style: { scrollbarWidth: "thin" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-6 px-6 md:px-12 w-max", children: items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.figure,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-60px" },
            transition: { delay: i % 3 * 0.1, duration: 0.7 },
            className: "group relative overflow-hidden rounded-sm border border-gold/15 bg-heritage-900 shadow-deep flex-shrink-0 w-[280px] md:w-[360px]",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/5] overflow-hidden", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: it.src,
                    alt: it.title,
                    loading: "lazy",
                    className: "w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-heritage-950 via-heritage-950/30 to-transparent opacity-90" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "absolute bottom-0 left-0 right-0 p-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.4em] text-copper mb-2", children: "Heritage" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl text-parchment mb-1", children: it.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500", children: it.caption })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 right-4 w-8 h-8 rounded-full border border-gold/40 grid place-items-center text-gold text-[10px] tracking-widest", children: String(i + 1).padStart(2, "0") })
            ]
          },
          it.title
        )) })
      }
    )
  ] });
}
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedPage, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Galeri, {}) });
export {
  SplitComponent as component
};
