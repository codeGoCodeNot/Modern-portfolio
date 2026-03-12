"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

type WorkSliderButtonsProps = {
  containerStyles: string;
  btnStyles: string;
  iconsStyles: string;
};

const WorkSliderButtons = ({
  containerStyles,
  btnStyles,
  iconsStyles,
}: WorkSliderButtonsProps) => {
  const swiper = useSwiper();

  return (
    <div className={containerStyles}>
      <button
        onClick={() => swiper.slidePrev()}
        className={btnStyles}
        disabled={swiper.isBeginning}
      >
        <PiCaretLeftBold className={iconsStyles} />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className={btnStyles}
        disabled={swiper.isEnd}
      >
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  );
};

export default WorkSliderButtons;
