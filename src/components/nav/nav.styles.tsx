import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import {
  NavContainerInterface,
  LogoLinkInterface,
  LogoInterface,
  MobileHamburgerMenuInterface,
  HamburgerMenuInputInterface,
  HamburgerMenuLineInterface,
  MenuInterface,
  MenuElementInterface,
  MenuElementLinkInterface
} from "../../shared/interfaces/components/nav.interface";
import device from "../../shared/responsive/Device";

export const NavContainer = styled.nav<NavContainerInterface>`
  background:black;
  height:60px;
  display:flex;
  width:100%;
  position:fixed;
  align-items:center;
  outline:1px solid black;
  justify-content:space-between;
  transition:0.4s;
  z-index:999;

  @media screen and ${device.tablet} {
    margin-top:20px;
    background:transparent;
    outline:none;
  }

  ${(props: NavContainerInterface) =>
    props.toggle === 'up' && `
      transform:translate(0, 0);
      transition:0.4s;
      outline:none;
      margin-top:0;

      @media screen and ${device.tablet} {
        margin-top:20px;
      }
    `}

  ${(props: NavContainerInterface) =>
    props.toggle === 'down' && `
      transform:translate(0, calc(-100% - 20px));
      transition:0.4s;
    `}

  ${(props: NavContainerInterface) =>
    props.toggle === 'down.hide-menu' && `
      transform:translate(0, -400%);
      transition:0.7s;
    `}
`;

export const LogoLink = styled((props: LogoLinkInterface) => <Link {...props} />)`
  text-decoration:none;
  color:black;
`;

export const Logo = styled.span<LogoInterface>`
  color:white;
  font-size:1.4rem;
  margin-left:12px;
  letter-spacing:0.5px;

  @media screen and ${device.tablet} {
    min-height:45px;
    min-width:45px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:2rem;
    margin-left:32px;
    letter-spacing:1px;
    color:black;
    margin-right:0;
  }
`;

export const MobileHamburgerMenu = styled.label<MobileHamburgerMenuInterface>`
  display:flex;
  flex-direction:column;
  width:20px;
  cursor:pointer;
  margin-right:12px;
  transform:rotateY(180deg);

  @media screen and ${device.tablet} {
    display:none;
  }
`;


export const HamburgerMenuInput = styled.input<HamburgerMenuInputInterface>`
  &[type="checkbox"] {
    display:none;

    &:checked ~ span:nth-of-type(1) {
      transform-origin:bottom;
      transform:rotatez(45deg) translate(4px, 0px);
    }

    &:checked ~ span:nth-of-type(2) {
      transform-origin:top;
      transform:rotatez(-45deg) translate(1px, 0px);
    }

    &:checked ~ span:nth-of-type(3) {
      transform-origin:bottom;
      width:50%;
      transform:rotatez(45deg) translate(2px, -11px);
    }
  }
`;


export const HamburgerMenuLine = styled.span<HamburgerMenuLineInterface>`
  background:white;
  border-radius:10px;
  height:2px;
  margin:3px 0;
  transition:.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);

  &:nth-of-type(1) {
    width:50%;
  }

  &:nth-of-type(2) {
    width:100%;
  }

  &:nth-of-type(3) {
    width:75%;
  }
`;


export const Menu = styled.ul<MenuInterface>`
  position:absolute;
  margin:0;
  padding:0;
  top:60px;
  width:100%;
  max-height:0;
  overflow:hidden;
  transition:0.4s;

  @media screen and ${device.tablet} {
    display:flex;
    padding-right:22px;
    max-height:none;
    position:relative;
    width:auto;
    top:0;
  }

  ${(props: any) =>
    props.toggle === 'is-active' && `
      max-height:300px;
      transition:0.7s;
    `}
`;

export const MenuElement = styled.li<MenuElementInterface>`
  list-style:none;
  width:100%;
  background:black;
  display:flex;
  align-items:center;
  outline:1px solid black;

  @media screen and ${device.tablet} {
    list-style:none;
    padding:8px 16px;
    display:flex;
    align-items:center;
    background:transparent;
    outline:none;
  }
`;

export const MenuElementLink = styled((props: MenuElementLinkInterface) => <Link {...props} />)`
color:white;
text-decoration:none;
padding:12px;

@media screen and ${device.tablet} {
  text-decoration:none;
  color:black;
  position:relative;
  transition:0.4s;
  padding:0;

  &:hover {

    &::before {
      opacity:1;
      -webkit-transform:scale(1);
      -ms-transform:scale(1);
      transform:scale(1);
    }
  }

  &::before {
    content:'';
    position:absolute;
    left:0;
    display:inline-block;
    width:100%;
    border-bottom:1px solid black;
    margin-top:23px;
    opacity:0;
    -webkit-transition:opacity 0.45s,-webkit-transform 0.45s;
    transition:opacity 0.45s,-webkit-transform 0.45s;
    -o-transition:opacity 0.45s,transform 0.45s;
    transition:opacity 0.45s,transform 0.45s,-webkit-transform 0.45s;
    -webkit-transform:scale(0,1);
    -ms-transform:scale(0,1);
    transform:scale(0,1);
  }
`;