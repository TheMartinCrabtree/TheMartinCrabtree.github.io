import React from "react";
import styled from "styled-components";
import { breakpoints } from "./components/utilities";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero";
import { MainSection } from "./components/sections";
import { Carousel } from "./components/carousel";
// temp test data
import data from "./data";
// import "./App.css";

const tempCData = [
  {
    id: "carosel-card-001",
    imageData: {
      src: "https://via.placeholder.com/800x400",
      altText: "First Slide",
    },
    captionData: {
      headerText: "First slide label",
      supportingText:
        "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    linkData: {},
  },
  {
    id: "carosel-card-002",
    imageData: {
      src: "https://via.placeholder.com/800x400",
      altText: "Second Slide",
    },
    captionData: {
      headerText: "Second slide label",
      supportingText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    linkData: {},
  },
  {
    id: "carosel-card-003",
    imageData: {
      src: "https://via.placeholder.com/800x400",
      altText: "Third Slide",
    },
    captionData: {
      headerText: "Third slide label",
      supportingText:
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    },
    linkData: {},
  },
];

// for testing scrolling etc
const Background = styled.div`
  background-image: url(background.jpg);
  background-size: 100%;
`;

const MainWrapper = styled.div`
  background-color: black;
  opacity: 0.95;
  min-width: 340px;

  @media screen and (min-width: ${breakpoints.desktop}) {
    max-width: 1280px;
    margin: auto;
  }
`;

const LayoutWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Spacer = styled.div`
  flex: 1;
`;

function App() {
  const { header, footer, hero, sections } = data;

  return (
    <Background>
      <MainWrapper>
        <LayoutWrapper>
          <Header {...header} />
          <Hero {...hero} />
          <MainSection {...sections} />
          <Spacer />
          <Footer {...footer} />
        </LayoutWrapper>
      </MainWrapper>
    </Background>
  );
}

export default App;
