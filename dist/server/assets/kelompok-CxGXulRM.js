import { V as jsxRuntimeExports } from "./worker-entry-DM7bhe6K.js";
import { A as AnimatedPage } from "./AnimatedPage-NOVtC5KY.js";
import { S as SectionHeading } from "./SectionHeading-CJHXoJFc.js";
import { m as motion } from "./router-BrhbvmJi.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const dimas = "/assets/andimas-wuMBIH-i.jpg";
const richou = "/assets/richou-ByABYwTp.jpg";
const sam = "/assets/samuel-Dd90bLlt.jpg";
const members = [
  {
    name: "Andimas Ramadana",
    initial: "DIMS",
    photo: dimas,
    rayon: "Rayon Pajajaran",
    role: "Full Stack Developer",
    motto: "Belajar tanpa henti, berkarya tanpa batas."
  },
  {
    name: "Richou Alberto Ghani",
    initial: "RG",
    photo: richou,
    rayon: "Rayon Siliwangi",
    role: "Front End Developer",
    motto: "Desain yang baik adalah jembatan antara ide dan pengguna."
  },
  {
    name: "Samuel Sayogo",
    initial: "SS",
    photo: sam,
    rayon: "Rayon Galuh",
    role: "Back End Developer",
    motto: "Kode yang rapi hari ini, ketenangan di masa depan."
  }
];
function Kelompok() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 md:py-32 pt-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeading,
      {
        align: "center",
        eyebrow: "Tim Kami",
        title: "Anggota",
        highlight: "Kelompok",
        description: "Proyek heritage ini dikerjakan bersama-sama oleh tiga anggota kelompok dengan peran masing-masing."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto", children: members.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-60px" },
        transition: { delay: i * 0.12, duration: 0.7 },
        whileHover: { y: -6 },
        className: "group relative glass-heritage p-8 rounded-sm border-t-2 border-gold/40 overflow-hidden text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-20 -right-20 w-40 h-40 rounded-full gradient-gold opacity-10 blur-3xl group-hover:opacity-25 transition duration-700" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto w-32 h-32 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-1 rounded-full gradient-gold opacity-90 group-hover:opacity-100 transition" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-full bg-heritage-900 overflow-hidden border-2 border-heritage-950", children: m.photo ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: m.photo,
                alt: `Foto ${m.name}`,
                className: "w-full h-full object-cover",
                loading: "lazy",
                width: 256,
                height: 256
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-4xl gradient-text-gold", children: m.initial }) }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl text-parchment mb-1 leading-tight", children: m.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.3em] text-copper mb-4", children: m.rayon }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ornament-divider w-16 mx-auto" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.3em] text-copper mb-1", children: "Role" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-base text-gold", children: m.role })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.3em] text-copper mb-1", children: "Motto Hidup" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground italic leading-relaxed", children: [
                '"',
                m.motto,
                '"'
              ] })
            ] })
          ] })
        ]
      },
      m.name
    )) })
  ] }) });
}
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedPage, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Kelompok, {}) });
export {
  SplitComponent as component
};
