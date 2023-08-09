import React, { ReactNode } from "react";
import styled from "styled-components";

type FooterProps = {};

// temp text align
const FooterWrapper = styled.div`
  width: 100%;
  background-color: #000018;
  color: white;
  text-align: center;
  min-height: 50px;

  align-self: flex-end;
`;

const Footer = ({}: FooterProps) => {
  return <FooterWrapper>Footer</FooterWrapper>;
};

export default Footer;
