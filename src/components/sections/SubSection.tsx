import React, { ReactNode } from "react";
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

type SubSectionProps = {
  layout: "grid" | "textBlock" | "imageBlock" | "listBlock";
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

const TopContainer = styled.div``;

const ThumbnailContainer = styled.div``;
const TitleContainer = styled.h3`
  color: lightSteelBlue;
  margin: 0.25em 25px;
`;
const BodyContainer = styled.div`
  color: ghostwhite;
  margin: 0.25em 0.5em;
`;
const GridContainer = styled.div`
  padding: 15px;
  display: flex;
  gap: 15px;
  flex-flow: row wrap;
  flex-basis: 20%;
`;

const GridItem = styled.div`
  min-width: 8vw;
`;

const StyledUl = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;
// li { list-style-image: url(img/image.png); }
const StyledLi = styled.li``;

const _renderGrid = (data: Array<GridObj>) => {
  return (
    data &&
    data.map((gridObj: GridObj) => {
      return <GridItem>{gridObj?.heading && gridObj.heading}</GridItem>;
    })
  );
};

const _renderListBlock = (data: Array<ListObj>) => {};

const SubSection = ({ layout, data }: SubSectionProps) => {
  return (
    <LayoutWrapper>
      <ContentWrapper>
        {data && layout === "grid" && (
          <GridContainer>{_renderGrid(data)}</GridContainer>
        )}
        <TopContainer>
          <TitleContainer>{data?.heading}</TitleContainer>
          <ThumbnailContainer>{data?.thumbnail}</ThumbnailContainer>
        </TopContainer>
        <BodyContainer>{data?.body}</BodyContainer>
      </ContentWrapper>
    </LayoutWrapper>
  );
};

export { type SubSectionProps };
export default SubSection;