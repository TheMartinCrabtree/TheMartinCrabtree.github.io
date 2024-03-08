import React, { ReactNode } from "react";
// import { Carousel } from "../carousel";
import { Carousel as BootstrapCarousel } from "react-bootstrap";
import { CarouselItemProps } from "../carousel/CarouselItem";
import styled from "styled-components";

interface DataObj {
  body?: any;
  thumbnail?: string;
}

interface GridObj {
  heading?: string;
}

interface ListObj {
  leadingText?: string;
  text?: string;
  bullets?: boolean;
  src?: string;
}

interface ThumbObj {
  url: string;
  altText: string;
}

type SubSectionProps = {
  layout: "grid" | "textBlock" | "imageBlock" | "listBlock" | "carousel";
  heading?: string;
  thumbnail?: ThumbObj;
  data?: any;
};

const LayoutWrapper = styled.div`
  padding: 20px;
`;

const ContentWrapper = styled.div`
  width: 100%;
  color: white;
  text-align: center;
  min-height: 120px;
  padding: 10px 0px;
  border-radius: 8px;
  border: 2px solid #ffffff;

  align-self: flex-end;
  background-color: #302c2c;
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const ThumbnailContainer = styled.div``;
const TitleContainer = styled.div`
  justify-self: center;
`;
const TitleText = styled.h3`
  color: lightSteelBlue;
  margin: 0.25em 25px;
`;
const BodyContainer = styled.div`
  color: ghostwhite;
  margin: 0.5em 1em;
  text-align: justify;
`;
const GridContainer = styled.div`
  padding: 15px;
  display: flex;
  gap: 15px;
  flex-flow: row wrap;
  justify-content: space-evenly;
  flex-basis: 20%;
`;

const GridItem = styled.div`
  min-width: 8vw;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: cornflowerblue;
    transform: scale(1.1);
  }
`;

const StyledUl = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;
// li { list-style-image: url(img/image.png); }
const StyledLi = styled.li``;

const ImageComponent = styled.img`
  max-height: 20vh;
  max-width: 100%;
`;

const _renderGrid = (data: Array<GridObj>) => {
  const generatedKey = window && window.crypto && window.crypto.randomUUID();
  return (
    data &&
    data.map((gridObj: GridObj, index) => {
      return (
        <GridItem key={generatedKey + `${index}`}>
          {gridObj?.heading && gridObj.heading}
        </GridItem>
      );
    })
  );
};

// const _renderCarousel = (data: Array<CarouselItemProps>) => {
//   return <Carousel carouselData={data} />;
// };
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

const _renderListBlock = (data: Array<ListObj>) => {};

const _renderThumbnail = (thumbnailObj: ThumbObj) => {
  const { url, altText } = thumbnailObj;
  return <ImageComponent src={url} alt={altText} />;
};

const SubSection = ({ layout, data, heading, thumbnail }: SubSectionProps) => {
  return (
    <LayoutWrapper>
      <ContentWrapper>
        <TopContainer>
          {thumbnail && (
            <ThumbnailContainer>
              {_renderThumbnail(thumbnail)}
            </ThumbnailContainer>
          )}
          {heading && (
            <TitleContainer>
              <TitleText>{heading}</TitleText>
            </TitleContainer>
          )}
        </TopContainer>
        <BodyContainer>{data?.body}</BodyContainer>
        {data && layout === "grid" && (
          <GridContainer>{_renderGrid(data)}</GridContainer>
        )}
        {/* {data && layout === "carousel" && <div>{_renderCarousel(data)}</div>} */}
        {data && layout === "carousel" && <div>{_renderCarousel()}</div>}
      </ContentWrapper>
    </LayoutWrapper>
  );
};

export { type SubSectionProps };
export default SubSection;
