export const stairAnimation = {
  initial: { top: "0%" },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

export const reverseIndex = (index: number) => {
  const totalSteps = 6;

  // Reverse the index so that the first step has the highest delay and the last step has no delay
  return totalSteps - index - 1;
};
