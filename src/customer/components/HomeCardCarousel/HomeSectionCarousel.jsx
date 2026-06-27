import React, { useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "./HomeSectionCard";
import { Button } from "@headlessui/react";
const CarouselComponent = AliceCarousel.default;
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { mens_kurta } from "../../../data/Men/men_kurta";

// console.log(typeof AliceCarousel.default);

const HomeSectionCarosoul = ({props,sectionName}) => {

  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    768: { items: 3 },
    1024: { items: 5 },
  };

  const items = mens_kurta
    .slice(0, 10)
    .map((item, index) => <HomeSectionCard props={item} key={index} sectionName={sectionName}/>);

const slidePrev = () => {
    carouselRef.current?.slidePrev();
  };

  const slideNext = () => {
    carouselRef.current?.slideNext();
  };

  return (
    <div className="relative px-4 lg:px-8">
      <div className="relative p-5">
        <h2 className="text-2xl text-black font-bold pb-2">{sectionName}</h2>
        <CarouselComponent
       
          ref={carouselRef}
          items={items}
          responsive={responsive}
          infinite
          disableButtonsControls
          disableDotsControls
          mouseTracking
        />

        {/* Left Button */}
        <button
          className="absolute left-[-16px] top-[50%]
         -translate-y-1/2 z-50 bg-white shadow-lg rounded-full p-2  active:bg-gray-200"
          onClick={slidePrev}
        >
          <KeyboardArrowLeftIcon />
        </button>

        {/* Right Button */}
        <button
          className="absolute right-1 top-[50%] -translate-y-1/2 z-50
         bg-white shadow-lg rounded-full p-2 active:bg-gray-200"
          onClick={slideNext}
        >
          <KeyboardArrowRightIcon />
        </button>
      </div>
    </div>
  );
};

export default HomeSectionCarosoul;
