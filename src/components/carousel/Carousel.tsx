import React from "react";
import { Carousel as BootstrapCarousel } from "react-bootstrap";
import CarouselItem from "./CarouselItem";
import { CarouselItemProps } from "./CarouselItem";

export interface CarouselProps {
  carouselData: Array<CarouselItemProps>;
}

const Carousel = ({ carouselData }: CarouselProps) => {
  const _renderItems = (carouselData: CarouselItemProps[]) => {
    return carouselData.map(
      ({ imageData, captionData, linkData, id }: CarouselItemProps) => {
        return (
          <CarouselItem
            imageData={imageData}
            captionData={captionData}
            linkData={linkData}
            id={id}
          />
        );
      }
    );
  };

  return (
    <BootstrapCarousel>
      {carouselData && _renderItems(carouselData)}
    </BootstrapCarousel>
  );
};

export default Carousel;
