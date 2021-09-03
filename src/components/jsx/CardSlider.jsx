import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6
  },
  desktop: {
    breakpoint: { max: 3000, min: 1524 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1524, min: 900 },
    items: 3
  },
  mobile1: {
    breakpoint: { max: 900, min: 600 },
    items: 2
  },
  mobile2: {
    breakpoint: { max: 600, min: 0 },
    items: 1
  }
};