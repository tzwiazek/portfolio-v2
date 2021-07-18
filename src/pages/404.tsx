import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Section, TitleH1, TitleH2 } from "../assets/styles/globalStyle.styles";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { NotFoundInterface, NotFoundLinkInterface } from "../shared/interfaces/components/404.interface";

const NotFound = styled.div<NotFoundInterface>`
  left:50%;
  top:50%;
  transform:translate(-50%, -50%);
  position:absolute;
  padding-top:0;
  text-align:center;
`;

const NotFoundLink = styled((props: NotFoundLinkInterface) => <Link {...props} />)`
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

export default function NotFoundPage(): JSX.Element {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <Section>
        <NotFound>
          <TitleH1>404</TitleH1>
          <TitleH2>Page Not Found</TitleH2>
          <NotFoundLink to="/">go home</NotFoundLink>
        </NotFound>
      </Section>
    </Layout>
  )
}