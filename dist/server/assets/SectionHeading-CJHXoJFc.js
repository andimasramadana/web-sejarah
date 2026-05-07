import { V as jsxRuntimeExports } from "./worker-entry-DM7bhe6K.js";
import { m as motion } from "./router-BrhbvmJi.js";
function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "left"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.8 },
      className: align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl",
      children: [
        eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs uppercase tracking-[0.5em] text-copper mb-4", children: [
          "— ",
          eyebrow
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl md:text-5xl lg:text-6xl leading-tight mb-5", children: [
          title,
          " ",
          highlight && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text-gold italic", children: highlight })
        ] }),
        description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base md:text-lg text-muted-foreground leading-relaxed", children: description }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `ornament-divider w-24 mt-6 ${align === "center" ? "mx-auto" : ""}` })
      ]
    }
  );
}
export {
  SectionHeading as S
};
