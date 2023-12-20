import React, { ReactNode } from "react";
import styled from "styled-components";

type SectionHeadingProps = {
  text: string;
};

const StyledHeading = styled.h2``;

const SectionHeading = ({ text }: SectionHeadingProps) => {
  return <StyledHeading>{text}</StyledHeading>;
};

export { type SectionHeadingProps };
export default SectionHeading;
