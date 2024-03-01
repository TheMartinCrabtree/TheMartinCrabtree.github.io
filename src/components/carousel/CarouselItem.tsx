import React from "react";
import { Carousel as BootstrapCarousel } from "react-bootstrap";

const CarouselItem = (props) => {
  const { imageData, captionData, linkData, id } = props;

  const _renderImage = (imageData) => {
    const { src, altText } = imageData;
    return <img className={"d-block w-100"} src={src} alt={altText} />;
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
  const _onClickHandler = (event) => {
    event.preventDefault();
    console.log("clicked - now do something");
  };

  return (
    <BootstrapCarousel.Item onClick={_onClickHandler} key={id}>
      {imageData && imageData.src && _renderImage(imageData)}
      {captionData && captionData.headerText && _renderCaption(captionData)}
    </BootstrapCarousel.Item>
  );
};

export default CarouselItem;
