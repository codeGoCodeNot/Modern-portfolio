"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { Button } from "@/components/ui/button";

type WorkSliderButtonsProps = {
  containerStyles: string;
  iconsStyles: string;
};

const WorkSliderButtons = ({
  containerStyles,

  iconsStyles,
}: WorkSliderButtonsProps) => {
  const swiper = useSwiper();

  return (
    <div className={containerStyles}>
      <Button onClick={() => swiper.slidePrev()} variant="outline">
        <PiCaretLeftBold className={iconsStyles} />
      </Button>
      <Button onClick={() => swiper.slideNext()} variant="outline">
        <PiCaretRightBold className={iconsStyles} />
      </Button>
    </div>
  );
};

export default WorkSliderButtons;
