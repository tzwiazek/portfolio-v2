import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import {
  HeaderInterface,
  HeaderTextInterface,
  TitleH1spanInterface,
  TypeInterface,
  TypeTextInterface,
  BlinkingCursorInterface,
  ArrowBounceInterface,
  ScrollInterface,
  ScrollButtonLinkInterface
} from '../../../shared/interfaces/components/sections/hero.interface';
import device from '../../../shared/responsive/Device';

export const Header = styled.div<HeaderInterface>`
  margin: auto;
  width: 80%;
  text-align: center;
  position: relative;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  padding-top: 60px;

  @media screen and ${device.tablet} {
    width: 650px;
    left: 50%;
    top: 48%;
    transform: translate(-50%, -50%);
    position: absolute;
    padding-top: 0;
  }
`;

export const HeaderText = styled.span<HeaderTextInterface>`
  letter-spacing: 2px;
  color: rgb(25 26 30 / 73%);
  display: block;
`;

export const TitleH1span = styled.span<TitleH1spanInterface>`
  &::after {
    content: 'HQ';
    display: inline;
    font-size: 1rem;
    margin-top: 4px;
    background: linear-gradient(60deg, #64b3f4 0%, #c2e59c 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: absolute;
  }
`;

export const Type = styled.div<TypeInterface>`
  display: flex;
  justify-content: center;
  margin: 30px 0;
`;

export const TypeText = styled.div<TypeTextInterface>``;

export const BlinkingCursor = styled.div<BlinkingCursorInterface>`
  user-select: none;
  animation: blink 1s steps(2, start) infinite;
  color: black;

  @keyframes blink {
    to {
      visibility: hidden;
    }
  }
`;

export const Scroll = styled.div<ScrollInterface>`
  text-align: center;
  width: 30px;
  height: 60px;
  background: white;
  border-radius: 48px;
  margin: 0 auto;
  margin-right: -15px;
  padding-top: 0px;
  cursor: pointer;
  right: 50%;
  -webkit-transition: -webkit-transform 0.6s ease;
  -moz-transition: -moz-transform 0.6s ease;
  transition: transform 0.6s ease;
  border: 1px solid black;
  margin: auto;
`;

export const ScrollButtonLink = styled((props: ScrollButtonLinkInterface) => <Link {...props} />)`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 100%;
`;

export const ArrowBounce = styled.span<ArrowBounceInterface>`
  -webkit-animation: arrow 2s infinite;
  -moz-animation: arrow 2s infinite;
  -o-animation: arrow 2s infinite;
  animation: arrow 2s infinite;
  animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);

  @keyframes arrow {
    0% {
      margin-bottom: 0px;
    }
    50% {
      margin-bottom: 10px;
    }
    100% {
      margin-bottom: 0px;
    }
  }
`;
