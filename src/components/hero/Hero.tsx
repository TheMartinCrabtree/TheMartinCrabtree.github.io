import React, { ReactNode } from "react";
import styled from "styled-components";

interface TextBlock {
  title?: string;
  subtitle?: string;
  body?: string;
}

export interface HeroProps {
  textblock?: TextBlock;
  imageblock?: any;
}

const HeroContainer = styled.div`
  color: lightgrey;
  background-color: rgb(60 72 113);
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  height: auto;
  width: 100%;
`;

const TextContainer = styled.div`
  padding: 20px;
  width: 100%;
`;

const ImageContainer = styled.div`
  width: auto;
  padding: 20px 20px;
`;

const BodyContainer = styled.div`
  margin: 1vw 0px;
  font-size: 15px;
`;

const ImageComponent = styled.img`
  max-height: 20vh;
  max-width: 100%;
`;

// need to set fonts
const Hero = ({ textblock, imageblock }: HeroProps) => {
  return (
    <HeroContainer>
      <TextContainer>
        {textblock && textblock.title && <div>{textblock.title}</div>}
        {textblock && textblock.subtitle && <div>{textblock.subtitle}</div>}
        {textblock && textblock.body && (
          <BodyContainer>{textblock.body}</BodyContainer>
        )}
      </TextContainer>
      <ImageContainer>
        <ImageComponent src={imageblock.url} alt={imageblock.altText} />
      </ImageContainer>
    </HeroContainer>
  );
};

export default Hero;
