import React from "react";
import { Carousel as BootstrapCarousel } from "react-bootstrap";
import CarouselItem from "./CarouselItem";

const Carousel = (props) => {
  const { carouselData } = props;

  const _renderItems = (dataArr) => {
    return dataArr.map((cardData) => {
      const { imgData, textData, linkData, id } = cardData;
      return (
        <BootstrapCarousel.Item>
          {imgData && imgData.srcData && (
            <img
              className="d-block w-100"
              src={imgData.srcData}
              alt={imgData.altData}
            />
          )}
          <BootstrapCarousel.Caption>
            <h3>{textData.headingText}</h3>
            <p>{textData.bodyText}</p>
          </BootstrapCarousel.Caption>
        </BootstrapCarousel.Item>
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
