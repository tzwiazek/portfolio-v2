import * as React from "react";
import { Section, TitleH1, TitleH2 } from "../assets/styles/globalStyle.styles";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { NotFound, NotFoundLink } from "./404.styles";

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