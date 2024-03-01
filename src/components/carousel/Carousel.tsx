import React from "react";
import { Carousel as BootstrapCarousel } from "react-bootstrap";
import CarouselItem from "./CarouselItem";

const Carousel = (props) => {
  const { carouselData } = props;

  const _renderItems = (dataArr) => {
    return dataArr.map((cardData) => {
      const { imgData, textData, linkData, id } = cardData;
      return (
        <CarouselItem
          imgData={imgData}
          textData={textData}
          linkData={linkData}
          id={id}
        />
      );
    });
  };

  return (
    <BootstrapCarousel>
      {carouselData && _renderItems(carouselData)}
    </BootstrapCarousel>
  );
};

export default Carousel;
