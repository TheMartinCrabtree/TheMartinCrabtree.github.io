import React, { ReactNode } from "react";
import styled from "styled-components";

type GridItemProps = {
  title?: string;
  data?: any;
};

const LayoutWrapper = styled.div`
  padding: 20px;
`;

const GridItem = ({}: GridItemProps) => {
  return <LayoutWrapper>GridItem</LayoutWrapper>;
};

export { type GridItemProps };
export default GridItem;
