import styled, { createGlobalStyle } from "styled-components";
import { SectionInterface, TitleH1Interface, TitleH2Interface } from "../../shared/interfaces/globalStyles.interface";
import device from "../../shared/responsive/Device";

export const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior:smooth;
  }

  body {
    font-family:'Open Sans', sans-serif;
    margin:0;
  }

  ::selection {
    color:white;
    background:black;
  }

  :focus {
    -webkit-tap-highlight-color:transparent;
  }
`;

export const Section = styled.section<SectionInterface>`
  width:100%;

  ${(props: SectionInterface) =>
    props.id === 'hero' && `
      height:100vh;
    `}

  ${(props: SectionInterface) =>
    props.id === 'portfolio' && `
      margin-top:150px;
    `}
`;

export const TitleH1 = styled.h1<TitleH1Interface>`
  margin-top:10px;
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  font-size:2rem;

  @media screen and ${device.tablet} {
    font-size:2.5rem;
  }
`;

export const TitleH2 = styled.h2<TitleH2Interface>`
  width:80%;
  font-weight:500;
  text-align:center;
  font-size:1.6rem;;
  margin:20px auto;

  @media screen and ${device.tablet} {
    font-size:2rem;
    width:100%;
  }
`;

