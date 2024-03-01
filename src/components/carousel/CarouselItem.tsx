import React from "react";
import { Carousel as BootstrapCarousel } from "react-bootstrap";

const CarouselItem = (props) => {
  const { imageData, captionData } = props;

  const _renderImage = (imageData) => {
    const { className, src, altText } = imageData;
    return <img className={className} src={src} alt={altText} />;
  };
  const _renderCaption = (captionData) => {
    const { headerText, supportingText } = captionData;
    return (
      <BootstrapCarousel.Caption>
        <h3>{headerText}</h3>
        <p>{supportingText}</p>
      </BootstrapCarousel.Caption>
    );
  };

  return (
    <BootstrapCarousel.Item>
      {imageData && imageData.src && _renderImage(imageData)}
      {captionData && captionData.headerText && _renderCaption(captionData)}
    </BootstrapCarousel.Item>
  );
};

export default CarouselItem;
