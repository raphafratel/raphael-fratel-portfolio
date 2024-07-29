import { delay } from "framer-motion";

export const picture = {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1 },
    transition: {
      type: "tween",
      duration: 0.2,
    },
  };

  export const emoji = {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1 },
    transition: {
      type: "spring",
      stiffness: 125,
      delay: 0.1,
      duration: 0.7,
    },
  };

  export const paragraph = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0},
  };

  export const buttons = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0},
    transition: { delay: 0.1 },
  };
