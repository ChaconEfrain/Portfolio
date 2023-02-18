import { useState } from "react";
import { TTestimonial } from "../types";

const useCarousel = (testimonials: TTestimonial[]) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const translateToRight = () => {
    if (currentSlide === testimonials.length - 1) setCurrentSlide(0);
    else setCurrentSlide((prev) => ++prev);
  };

  const translateToLeft = () => {
    if (currentSlide === 0) setCurrentSlide(testimonials.length - 1);
    else setCurrentSlide((prev) => --prev);
  };

  const translateWithDot = (index: number) => setCurrentSlide(index);

  return { currentSlide, translateToLeft, translateToRight, translateWithDot };
};

export default useCarousel;
