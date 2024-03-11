import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
// temp carousel for testing
import styled from "styled-components";
import { Carousel as BootstrapCarousel } from "react-bootstrap";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const Wrapper = styled.div`
  max-width: 1920px;
  max-height: 1080px;
`;

const _renderCarousel = () => {
  return (
    <BootstrapCarousel>
      <BootstrapCarousel.Item>
        <img
          className="d-block w-100"
          src={"https://via.placeholder.com/800x400"}
          alt={"First Slide"}
        />
        <BootstrapCarousel.Caption>
          <h3>{"First slide label"}</h3>
          <p>{"Nulla vitae elit libero, a pharetra augue mollis interdum."}</p>
        </BootstrapCarousel.Caption>
      </BootstrapCarousel.Item>
      <BootstrapCarousel.Item>
        <img
          className="d-block w-100"
          src={"https://via.placeholder.com/800x400"}
          alt={"Second Slide"}
        />
        <BootstrapCarousel.Caption>
          <h3>{"Second slide label"}</h3>
          <p>
            {"Praesent commodo cursus magna, vel scelerisque nisl consectetur."}
          </p>
        </BootstrapCarousel.Caption>
      </BootstrapCarousel.Item>
      <BootstrapCarousel.Item>
        <img
          className="d-block w-100"
          src={"https://via.placeholder.com/800x400"}
          alt={"Third Slide"}
        />
        <BootstrapCarousel.Caption>
          <h3>{"Third slide label"}</h3>
          <p>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}</p>
        </BootstrapCarousel.Caption>
      </BootstrapCarousel.Item>
    </BootstrapCarousel>
  );
};
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Wrapper>{_renderCarousel()}</Wrapper>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
