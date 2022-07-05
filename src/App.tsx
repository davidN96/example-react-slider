import CarouselItem from "./Carousel/CarouselItem";
import Carousel from "./Carousel/Carousel";

const App = () => {
  return (
    <Carousel slides={["first", "second", "third"]}>
      <CarouselItem name="first">First</CarouselItem>
      <CarouselItem name="second">Second</CarouselItem>
      <CarouselItem name="third">Third</CarouselItem>
    </Carousel>
  );
};

export default App;
