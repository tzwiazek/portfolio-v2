import styled from "styled-components";
import {
  FooterContactInterface,
  TitleH2spanInterface,
  GetInTouchContainerInterface,
  GetInTouchLinkInterface
} from "../../shared/interfaces/components/footer.interface";
import device from '../../shared/responsive/Device';

export const FooterContact = styled.div<FooterContactInterface>`
  margin:150px 0 20px 0;

  @media screen and ${device.tablet} {
    margin:150px 0;
  }
`;

export const TitleH2span = styled.span<TitleH2spanInterface>`
  background:linear-gradient(60deg, #64b3f4 0%, #c2e59c 100%);
  background-clip:text;
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;

  &::selection {
    -webkit-text-fill-color:white;
  }
`;

export const GetInTouchContainer = styled.div<GetInTouchContainerInterface>`
  width:100%;
  display:flex;
  justify-content:center;
`;

export const GetInTouchLink = styled.a<GetInTouchLinkInterface>`
  text-decoration:none;
  height:60px;
  width:240px;
  border:1px solid black;
  color:black;
  margin:auto;
  line-height:0px;
  border-radius:30px;
  position:relative;
  display:flex;
  justify-content:center;
  align-items:center;
  transition:0.7s;
  background:white;

  &:hover {
    background:black;
    color:white;
    transition:0.4s;
  }
`;