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

const _renderItems = ({ footerData }: FooterProps) => {
  return (
    footerData &&
    footerData.map(({ title, link }: FooterItemProps) => {
      return <ItemContainer key={crypto.randomUUID()}>{title}</ItemContainer>;
    })
  );
};

const Footer = ({ footerData }: FooterProps) => {
  return (
    <FooterWrapper>
      <LayoutWrapper>
        {footerData && _renderItems({ footerData })}
      </LayoutWrapper>
    </FooterWrapper>
  );
};

export { type FooterProps };
export default Footer;
