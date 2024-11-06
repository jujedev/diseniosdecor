import { Carousel } from "@material-tailwind/react";
 
export function CarouselDefault() {
  return (
    <Carousel className="rounded-xl">
      <img
        src="../public/images/cocina_1.jpg"
        alt="image 1"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}
