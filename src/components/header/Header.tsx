import React, { ReactNode } from "react";
import styled from "styled-components";

type HeaderProps = {
  title: string;
  children?: ReactNode;
};

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0px;
  padding: 2rem 0px 1rem 0px;
  background-color: #000018;
  color: white;
  position: sticky;
  top: 0;

  h1 {
    margin: 0px; !important
  }

  p {
    margin: 0px; !important
  }
`;

const Header = ({ title, children }: HeaderProps) => {
  return (
    <HeaderWrapper>
      <h1>{title}</h1>
      <p>{children}</p>
    </HeaderWrapper>
  );
};

export default Header;
