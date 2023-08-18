import React from "react";
import styled from "styled-components";
import { breakpoints } from "./components/utilities";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero";
import { MainSection } from "./components/sections";
// temp test data
import data from "./data";
// import "./App.css";

// for testing scrolling etc
const Background = styled.div`
  background-image: url(background.jpg);
  background-size: 100%;
`;

// height: 100vh;
const TempBody = styled.div`
  background-color: black;
  opacity: 0.9;

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
      <TempBody>
        <LayoutWrapper>
          <Header {...header} />
          <Hero {...hero} />
          <MainSection {...sections} />
          <Spacer />
          <Footer {...footer} />
        </LayoutWrapper>
      </TempBody>
    </Background>
  );
}

export default App;
