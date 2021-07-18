import styled from "styled-components";
import { SocialContainerInterface, SocialLinkInterface } from "../../shared/interfaces/components/social.interface";

export const SocialContainer = styled.div<SocialContainerInterface>`
  position:fixed;
  bottom:20px;
  display:block;

  ${(props: SocialContainerInterface) =>
    props.type === 'bottom' && `
      position:relative;
      display:flex;
      bottom:0;
      width:100%;
      justify-content:center;
      align-items:center;
      margin-top:20px;
    `}

  ${(props: SocialContainerInterface) =>
    props.type === 'right' && `
      right:20px;
    `}
`;

export const SocialLink = styled.a<SocialLinkInterface>`
  padding:15px;
  display:flex;
  justify-content:center;
  align-items:center;
  font-weight:800;
  text-decoration:none;
  color:black;
  line-height:1.15;
  font-size:18px;
`;