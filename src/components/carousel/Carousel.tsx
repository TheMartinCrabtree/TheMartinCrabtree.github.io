import React from "react";
import { Carousel as BootstrapCarousel } from "react-bootstrap";
import CarouselItem from "./CarouselItem";
import { CarouselItemProps } from "./CarouselItem";

export interface CarouselProps {
  carouselData: Array<CarouselItemProps>;
}

const _renderCarousel = () => {
  return (
    <BootstrapCarousel>
      <BootstrapCarousel.Item>
        <img
          className="d-block w-100"
          src={"https://via.placeholder.com/800x400"}
          alt={"First Slide"}
        />
        <BootstrapCarousel.Caption>
          <h3>{"First slide label"}</h3>
          <p>{"Nulla vitae elit libero, a pharetra augue mollis interdum."}</p>
        </BootstrapCarousel.Caption>
      </BootstrapCarousel.Item>
      <BootstrapCarousel.Item>
        <img
          className="d-block w-100"
          src={"https://via.placeholder.com/800x400"}
          alt={"Second Slide"}
        />
        <BootstrapCarousel.Caption>
          <h3>{"Second slide label"}</h3>
          <p>
            {"Praesent commodo cursus magna, vel scelerisque nisl consectetur."}
          </p>
        </BootstrapCarousel.Caption>
      </BootstrapCarousel.Item>
      <BootstrapCarousel.Item>
        <img
          className="d-block w-100"
          src={"https://via.placeholder.com/800x400"}
          alt={"Third Slide"}
        />
        <BootstrapCarousel.Caption>
          <h3>{"Third slide label"}</h3>
          <p>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}</p>
        </BootstrapCarousel.Caption>
      </BootstrapCarousel.Item>
    </BootstrapCarousel>
  );
};

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
