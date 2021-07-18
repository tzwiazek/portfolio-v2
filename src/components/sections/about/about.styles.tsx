import React from "react";
import styled from "styled-components";
import {
  AboutContainerInterface,
  AboutDescriptionInterface,
  AboutWrapperInterface,
  CompanyInterface,
  ExperienceBottomContainerInterface,
  ExperienceBoxInterface,
  ExperienceBoxTextInterface,
  ExperienceContainerInterface,
  ExperienceTitleInterface,
  ParagraphInterface
} from "../../../shared/interfaces/components/sections/about.interface";
import device from "../../../shared/responsive/Device";

export const AboutWrapper = styled.div<AboutWrapperInterface>`
  display:flex;
  margin:auto;
  align-items:center;
  flex-wrap:wrap;

  @media screen and ${device.tablet} {
    width:60%;
    height:100vh;
  }
`;

export const AboutContainer = styled.div<AboutContainerInterface>`
  width:100%;
  height:70%;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
  background:white;

  @media screen and ${device.tablet} {
    width:50%;
  }
`;

export const ExperienceContainer = styled.div<ExperienceContainerInterface>`
  display:flex;
  flex-wrap:wrap;
  width:40%;
  border-top:1px solid black;
  border-left:1px solid black;
  border-bottom:1px solid black;
  padding:60px;

  @media screen and ${device.tablet} {
    height:55%;
  }
`;

export const ExperienceTitle = styled.div<ExperienceTitleInterface>`
  display:flex;
  align-items:center;
  justify-content:center;
  width:100%;
  font-size:8rem;

  @media screen and ${device.tablet} {
    font-size:11rem;
  }
`;

export const ExperienceBottomContainer = styled.div<ExperienceBottomContainerInterface>`
  display:flex;
  width:100%;
  justify-content:center;
`;

export const ExperienceBox = styled.div<ExperienceBoxInterface>`
  width:inherit;
  display:flex;
  width:min-content;
`;

export const ExperienceBoxText = styled.span<ExperienceBoxTextInterface>`
  font-size:1.5rem;

  @media screen and ${device.tablet} {
    font-size:1.8rem;
  }
`;

export const AboutDescription = styled.div<AboutDescriptionInterface>`
  width:75%;

  @media screen and ${device.tablet} {
    width:100%;
  }
`;

export const Paragraph = styled.p<ParagraphInterface>``;

export const Company = styled.a<CompanyInterface>`
  text-decoration:none;
  position:relative;
  z-index:0;
  display:inline-block;
  padding:5px 2px;
  overflow:hidden;
  color:black;
  vertical-align:bottom;
  transition:color .3s ease-out;
  line-height:1;

  &::before {
    content:"";
    position:absolute;
    z-index:-1;
    top:0;
    left:0;
    transform:translateY(calc(100% - 2px));
    width:100%;
    height:100%;
    background:linear-gradient(60deg, #64b3f4 0%, #c2e59c 100%);
    transition:transform .25s ease-out;
  }

  &:hover {
    color:white;

    &::before {
      transform:translateY(0);
      transition:transform .25s ease-out;
    }
  }
`;