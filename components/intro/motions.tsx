export const motionPicture = {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1 },
    transition: {
      type: "tween",
      duration: 0.2,
    },
  };

  export const motionEmoji = {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1 },
    transition: {
      type: "spring",
      stiffness: 125,
      delay: 0.1,
      duration: 0.7,
    },
  };