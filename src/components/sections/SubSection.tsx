import React, { ReactNode } from "react";
import styled from "styled-components";

type SubSectionProps = {
  type?: "grid" | "textBlock" | "imageBlock";
  data?: any;
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
  background-color: red;
`;

const SubSection = ({}: SubSectionProps) => {
  return (
    <LayoutWrapper>
      <ContentWrapper>SubSection</ContentWrapper>
    </LayoutWrapper>
  );
};

export { type SubSectionProps };
export default SubSection;
