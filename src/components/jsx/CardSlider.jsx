import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export const responsive = {
  JumboExtrasuperLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 6000, min: 4500 },
    items: 12
  },
  JumbosuperLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4500, min: 3500 },
    items: 11
  },
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 3500, min: 3000 },
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