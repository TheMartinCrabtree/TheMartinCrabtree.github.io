import React from "react";
import { Carousel as BootstrapCarousel } from "react-bootstrap";

interface imageDataObj {
  src: string;
  altText?: string;
}

interface captionDataObj {
  headerText: string;
  supportingText?: string;
}

export interface CarouselItemProps {
  imageData?: imageDataObj;
  captionData: captionDataObj;
  linkData?: any;
  id: string;
}

const CarouselItem = ({
  imageData,
  captionData,
  linkData,
  id,
}: CarouselItemProps) => {
  const _renderImage = ({ src, altText }: imageDataObj) => {
    return <img className={"d-block w-100"} src={src} alt={altText} />;
  };
  const _renderCaption = ({ headerText, supportingText }: captionDataObj) => {
    return (
      <BootstrapCarousel.Caption>
        <h3>{headerText}</h3>
        <p>{supportingText}</p>
      </BootstrapCarousel.Caption>
    );
  };
  const _onClickHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
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
