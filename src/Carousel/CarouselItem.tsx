import React, { useEffect, useRef } from "react";
import { useCarouselContext } from "./Carousel";

export interface CarouselItemProps {
  children?: React.ReactNode;
  name: string;
}

const CarouselItem = ({ name, children }: CarouselItemProps) => {
  const carouselItemWrapperRef = useRef<HTMLDivElement | null>(null);
  const { activeSlide } = useCarouselContext();

  useEffect(() => {
    if (activeSlide === name && carouselItemWrapperRef) {
      carouselItemWrapperRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [activeSlide, name]);

  return (
    <div
      style={{
        width: "100%",
        flex: "0 0 auto",
        height: 500,
        margin: 30,
        marginTop: 50,
        backgroundColor: "#999",
        border: "2px solid black",
      }}
      ref={carouselItemWrapperRef}
    >
      {children}
    </div>
  );
};

export default CarouselItem;
