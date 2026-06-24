import AliceCarouselModule from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import {mainCarouselData} from "./MainCarouselDetails";
const AliceCarousel = AliceCarouselModule.default;


const items = mainCarouselData.map((item) => (
  <img
    key={item.id}
    src={item.image}
    alt={`Banner ${item.id}`}
    className="w-full h-125 object-cover"
  />
));

// console.log(typeof AliceCarousel);
// console.log(AliceCarousel);

const MainCarousel = () => (
  <AliceCarousel
    items={items}
    autoPlay
    autoPlayInterval={3000}
    infinite
    disableButtonsControls
    
  />
);

export default MainCarousel;
