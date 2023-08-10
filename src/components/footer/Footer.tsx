import React, { ReactNode } from "react";
import styled from "styled-components";

type FooterItemProps = {
  title: string;
  link?: URL;
};

type FooterProps = {
  footerData?: FooterItemProps[];
};

const FooterWrapper = styled.div`
  width: 100%;
  background-color: #000018;
  color: white;
  text-align: center;
  min-height: 50px;

  align-self: flex-end;
`;

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  height: auto;
  width: 100%;
  text-align: center;
`;

const ItemContainer = styled.div`
  text-align: center;
`;

const Footer = ({ footerData }: FooterProps) => {
  console.log("footer props", footerData);
  return (
    <FooterWrapper>
      <LayoutWrapper>Footer</LayoutWrapper>
    </FooterWrapper>
  );
};

export { type FooterProps };
export default Footer;
