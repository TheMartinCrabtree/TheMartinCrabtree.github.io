import React from "react";
import { Carousel as BootstrapCarousel } from "react-bootstrap";
import CarouselItem from "./CarouselItem";
import { CarouselItemProps } from "./CarouselItem";
import styled from "styled-components";

export interface CarouselProps {
  carouselData: Array<CarouselItemProps>;
}

const Wrapper = styled.div`
  max-width: 1920px;
  max-height: 1080px;
`;

const ImageWrapper = styled.div`
  height: 400px;
  margin-bottom: 500px;
`;

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  overflow: hidden;
`;

const StyledVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const _renderCarousel = () => {
  return (
    <BootstrapCarousel>
      <BootstrapCarousel.Item>
        <ImageWrapper>
          <img
            className="d-block w-100"
            src={"./myverizon-screen.png"}
            alt={"my verizon app screenshot"}
          />
        </ImageWrapper>
        <BootstrapCarousel.Caption>
          <h3>{"MyVerizon App"}</h3>
          <p>
            {
              "Frontend React Developer: Created React components that are extensible and W3C accessibility compliant for web and mobile platforms."
            }
          </p>
        </BootstrapCarousel.Caption>
      </BootstrapCarousel.Item>
      <BootstrapCarousel.Item>
        <VideoWrapper>
          <StyledVideo controls>
            <source type="video/mp4" src="./chatbot-web.mp4" />
          </StyledVideo>
        </VideoWrapper>
        <BootstrapCarousel.Caption>
          <h3>{"OpenAI Chat Interaction"}</h3>
          <p>{""}</p>
        </BootstrapCarousel.Caption>
      </BootstrapCarousel.Item>
      <BootstrapCarousel.Item>
        <VideoWrapper>
          <StyledVideo controls>
            <source type="video/mp4" src="./nyc-graph-demo.mp4" />
          </StyledVideo>
        </VideoWrapper>
        <BootstrapCarousel.Caption>
          <h3>{"Data Visualization"}</h3>
          <p>{""}</p>
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

  // return (
  //   <BootstrapCarousel>
  //     {carouselData && _renderItems(carouselData)}
  //   </BootstrapCarousel>
  // );

  return <Wrapper>{_renderCarousel()}</Wrapper>;
};

export default Carousel;
