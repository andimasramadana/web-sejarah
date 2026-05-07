import { V as jsxRuntimeExports } from "./worker-entry-DM7bhe6K.js";
import { m as motion } from "./router-BrhbvmJi.js";
function AnimatedPage({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 12 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -12 },
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
      children
    }
  );
}
export {
  AnimatedPage as A
};
