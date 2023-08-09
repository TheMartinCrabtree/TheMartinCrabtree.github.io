import React, { ReactNode } from "react";
import styled from "styled-components";

export interface HeroProps {
  textblock?: any;
  imageblock?: any;
}

const HeroContainer = styled.div`
  color: black;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  height: auto;
  width: 100%;
  text-align: center;
`;

const TextContainer = styled.div`
  width: 50%;
  background-color: lightgrey;
`;

// background-image: url(headshot.jpg);
const ImageContainer = styled.div`
  width: auto;

  background-color: lightslategrey;
`;

const BodyContainer = styled.div`
  font-size: 10px;
`;

const ImageComponent = styled.img`
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
        <ImageComponent src="./headshot.jpg" alt="image" />
      </ImageContainer>
    </HeroContainer>
  );
};

export default Hero;
