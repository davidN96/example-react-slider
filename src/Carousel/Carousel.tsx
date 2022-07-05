import { useState, useContext, createContext } from "react";

export interface CarouselValues {
  activeSlide: String;
}

export enum SliderDirection {
  Right = "right",
  Left = "left",
}

export interface CarouselProps {
  children?: React.ReactElement[];
  slides: string[];
}

const CarouselContext = createContext<CarouselValues>({
  activeSlide: "",
});

const Carousel = ({ slides, children }: CarouselProps) => {
  const [activeSlide, setActiveSlide] = useState<string>(slides[0]);

  const changeSlide = (direction: SliderDirection) => {
    const activeSlideItem = slides.indexOf(activeSlide);
    const isActiveSlideLast = activeSlideItem === slides.length - 1;
    const isActiveSlideFirst = activeSlide === slides[0];

    if (direction === SliderDirection.Left) {
      if (isActiveSlideFirst) return setActiveSlide(slides[slides.length - 1]);
      return setActiveSlide(slides[activeSlideItem - 1]);
    }

    if (isActiveSlideLast) return setActiveSlide(slides[0]);
    return setActiveSlide(slides[activeSlideItem + 1]);
  };

  return (
    <CarouselContext.Provider
      value={{
        activeSlide,
      }}
    >
      <div style={{ width: "100%" }}>
        <h2>Active slide is: {activeSlide}</h2>
        <button onClick={() => changeSlide(SliderDirection.Left)}>
          Previous
        </button>
        <button onClick={() => changeSlide(SliderDirection.Right)}>Next</button>
        <div
          style={{
            overflowX: "scroll",
            flexWrap: "nowrap",
            marginRight: "5%",
            marginLeft: "5%",
            display: "flex",
            width: "90%",
          }}
        >
          {children}
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const useCarouselContext = () => useContext(CarouselContext);

export default Carousel;
