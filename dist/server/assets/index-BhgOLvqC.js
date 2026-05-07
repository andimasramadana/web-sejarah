import { V as jsxRuntimeExports } from "./worker-entry-DM7bhe6K.js";
import { A as AnimatedPage } from "./AnimatedPage-NOVtC5KY.js";
import { m as motion, L as Link } from "./router-BrhbvmJi.js";
import { A as ArrowRight } from "./arrow-right-B44OBGh5.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const heroImg = "/assets/hero-bogor-DgCYQOSb.jpg";
function HeroSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-screen flex items-center overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { scale: 1.15, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        transition: { duration: 2.2, ease: [0.22, 1, 0.36, 1] },
        className: "absolute inset-0",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: heroImg,
              alt: "Pemandangan Kota Bogor di senja hari dengan gunung dan kabut tropis",
              className: "absolute inset-0 w-full h-full object-cover",
              width: 1920,
              height: 1280
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-heritage-950/70 via-heritage-950/55 to-heritage-950" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-heritage-950 via-heritage-950/30 to-transparent" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 container mx-auto px-6 pt-32 pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.4, duration: 0.8 },
          className: "text-xs uppercase tracking-[0.5em] text-copper mb-6",
          children: "— Warisan Tanah Sunda"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.h1,
        {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.55, duration: 1 },
          className: "font-display text-5xl md:text-7xl lg:text-8xl leading-[1.05] mb-6",
          children: [
            "Dua Tempat ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text-gold italic", children: "Bersejarah" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Berpengaruh di Bogor"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.8, duration: 0.9 },
          className: "text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl",
          children: "Menelusuri jejak Pajajaran lewat Prasasti Batu Tulis dan koleksi peta kuno di Museum Peta Bogor — dua saksi bisu dari perjalanan panjang Nusantara."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 1.05, duration: 0.8 },
          className: "flex flex-wrap gap-4",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/jelajahi",
              "data-tour": "explore-btn",
              className: "group inline-flex items-center gap-2 px-7 py-3.5 gradient-gold text-heritage-950 font-medium tracking-wide rounded-sm shadow-gold hover:shadow-deep transition-all",
              children: [
                "Jelajahi Tempat",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16, className: "group-hover:translate-x-1 transition" })
              ]
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { delay: 1.4, duration: 1 },
          className: "mt-16 grid grid-cols-3 gap-8 max-w-md",
          children: [
            { n: "2", l: "Tempat bersejarah" },
            { n: "3", l: "Developer" },
            { n: "Bogor", l: "Tanah Pajajaran" }
          ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl md:text-3xl gradient-text-gold", children: s.n }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground mt-1", children: s.l })
          ] }, s.l))
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { delay: 1.8 },
        className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-copper",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.4em]", children: "Scroll" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-px h-10 bg-gradient-to-b from-gold to-transparent animate-glow" })
        ]
      }
    )
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedPage, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSection, {}) });
}
export {
  Index as component
};
