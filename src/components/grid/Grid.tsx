import React, { ReactNode } from "react";
import styled from "styled-components";

type GridProps = {
  title?: string;
  data?: any;
};

const GridWrapper = styled.div`
  padding: 20px;
`;

const Grid = ({}: GridProps) => {
  return <GridWrapper>grid</GridWrapper>;
};

export { type GridProps };
export default Grid;
