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
  padding-top: 1vh;
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
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

// typescript def //
// interface URL {
//   hash: string;
//   host: string;
//   hostname: string;
//   href: string;
//   readonly origin: string;
//   password: string;
//   pathname: string;
//   port: string;
//   protocol: string;
//   search: string;
//   username: string;
//   toString(): string;
// }
const StyledLink = styled.a`
  color: lightSteelBlue;
  &:hover {
    color: ghostwhite;
  }
`;

const _renderItems = ({ footerData }: FooterProps) => {
  return (
    footerData &&
    footerData.map(({ title, link }: FooterItemProps) => {
      const generatedKey =
        window && window.crypto && window.crypto.randomUUID();
      return (
        <ItemContainer key={generatedKey}>
          <StyledLink href="https://github.com/TheMartinCrabtree">
            {title}
          </StyledLink>
        </ItemContainer>
      );
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
