import styled from "styled-components";
import { BackgroundInterface, BackgroundLineInterface } from "../../shared/interfaces/components/background.interface";
import device from "../../shared/responsive/Device";

export const Background = styled.div<BackgroundInterface>`
  display:none;

  @media screen and ${device.tablet} {
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100vh;
    font-size:0;
    pointer-events:none;
    display:flex;
    justify-content:center;
    z-index:-1;
  }
`;

export const BackgroundLine = styled.div<BackgroundLineInterface>`
  @media screen and ${device.tablet} {
    position:relative;
    display:inline-block;
    vertical-align:top;
    width:17%;
    height:100vh;
    border-right:1px solid #E8E8E8;

    &:first-child {
      border-left:1px solid #E8E8E8;
    }
  }
`;