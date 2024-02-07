import React, { ReactNode } from "react";
import styled from "styled-components";

type SectionSubHeadingProps = {
  text: string;
};

const StyledHeading = styled.h3``;

const SectionSubHeading = ({ text }: SectionSubHeadingProps) => {
  return <StyledHeading>{text}</StyledHeading>;
};

export { type SectionSubHeadingProps };
export default SectionSubHeading;
