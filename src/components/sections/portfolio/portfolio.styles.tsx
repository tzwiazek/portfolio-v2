import React from "react";
import styled from "styled-components";
import {
  PortfolioElementInterface,
  ArrowInterface,
  ProjectsWrapperInterface,
  ArrowRoundCtaInterface,
  ArrowRoundInterface,
  ProjectArrowInterface,
  ProjectBoxInterface,
  ProjectDescriptionInterface,
  ProjectImageInterface,
  ProjectLinkInterface,
  ProjectsContainerInterface,
  ProjectTitleInterface
} from "../../../shared/interfaces/components/sections/portfolio.interface";
import device from "../../../shared/responsive/Device";

export const PortfolioElement = styled.div<PortfolioElementInterface>`
  display:flex;
  margin:auto;
  align-items:center;
  flex-wrap:wrap;

  @media screen and ${device.tablet} {
    width:calc((4 * 17%) + 5px);
    height:100vh;
  }
`;

export const ProjectsWrapper = styled.div<ProjectsWrapperInterface>`
  overflow:hidden;
  display:flex;
  position:relative;

  @media screen and ${device.tablet} {
    width:100%;
    flex-wrap:wrap;
    overflow:visible
  }
`;

export const ProjectsContainer = styled.div<ProjectsContainerInterface>`
  display:flex;
  width:10000px;
  transition:0.7s;

  @media screen and ${device.tablet} {
    width:inherit;
  }
`;

export const ProjectBox = styled.div<ProjectBoxInterface>`
  max-height:600px;
  height:100%;
  width:100vw;
  display:flex;
  cursor:pointer;
  position:relative;
  transition:0.7s;
  top:0;

  @media screen and ${device.tablet} {
    width:25%;

    &:hover {
      top:-3.1vw;
      transition:0.4s;
    }
  }
`;

export const ProjectLink = styled.a<ProjectLinkInterface>`
  overflow:hidden;
`;

export const ProjectImage = styled.div<ProjectImageInterface>`
  height:100%;
  width:100%;
  display:flex;
  justify-content:center;
  position:relative;
  overflow:hidden;

  &::after {
    content:'';
    position:absolute;
    z-index:1;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,.75);
    transition:0.7s;
  }
`;

export const ProjectDescription = styled.div<ProjectDescriptionInterface>`
  position:absolute;
  color:white;
  width:70%;
  top:50%;
  left:15%;
  transform:translateY(-50%);
  font-size:18px;
  font-style:italic;
  letter-spacing:0.5px;
  line-height:1.4;
  z-index:1;
  transition:0.7s;
  display:flex;
  flex-wrap:wrap;

  @media screen and ${device.tablet} {
    opacity:0.25;

    ${ProjectLink}:hover & {
      opacity:1;
      transition:0.4s;
    }
  }
`;

export const ProjectTitle = styled.div<ProjectTitleInterface>`
  width:100%;
  margin-bottom:30px;
  font-weight:800;
  font-size:1.4rem;
  font-style:normal;
`;

export const ProjectArrow = styled.div<ProjectArrowInterface>`
  margin-top:30px;
`;

export const Arrow = styled.div<ArrowInterface>`
  display:flex;
  position:absolute;
  height:44px;
  width:44px;
  align-items:center;
  justify-content:center;
  bottom:00%;
  transform:translateY(-50%);
  z-index:9999;

  @media screen and ${device.tablet} {
    display:none;
  }

  ${(props: ArrowInterface) =>
    props.direction === 'previous' && `
      left:20px;

      svg {
        transform:rotate(180deg);
      }
    `}

  ${(props: ArrowInterface) =>
    props.direction === 'next' && `
      right:20px;
    `}
`;

export const ArrowRound = styled.div<ArrowRoundInterface>`
  position:absolute;
  border:2px solid white;
  width:40px;
  height:40px;
  border-radius:100%;
`;

export const ArrowRoundCta = styled.div<ArrowRoundCtaInterface>`
  cursor:pointer;
  display:flex;
  justify-content:center;
  align-items:center;
  width:100%;
  height:100%;

  svg {
    width:18px;
    height:18px;
  }
`;