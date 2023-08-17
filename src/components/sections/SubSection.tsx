import React, { ReactNode } from "react";
import styled from "styled-components";

interface DataObj {
  heading?: string;
  body?: any;
}

type SubSectionProps = {
  layout: "grid" | "textBlock" | "imageBlock";
  data?: DataObj;
};

const LayoutWrapper = styled.div`
  padding: 20px;
`;

// temp text align
const ContentWrapper = styled.div`
  width: 100%;
  color: white;
  text-align: center;
  min-height: 120px;
  border-radius: 8px;
  border: 2px solid #ffffff;

  align-self: flex-end;
  background-color: #302c2c;
`;

const TitleContainer = styled.div``;
const BodyContainer = styled.div``;

const SubSection = ({ layout, data }: SubSectionProps) => {
  return (
    <LayoutWrapper>
      <ContentWrapper>
        <TitleContainer>{data?.heading}</TitleContainer>
        <BodyContainer>{data?.body}</BodyContainer>
      </ContentWrapper>
    </LayoutWrapper>
  );
};

export { type SubSectionProps };
export default SubSection;
