import * as React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/sections/hero/hero";
import About from "../components/sections/about/about";
import Portfolio from "../components/sections/portfolio/portfolio";
import { GlobalStyle } from "../assets/styles/globalStyle.styles"

export default function IndexPage(): JSX.Element {
  return (
    <Layout>
      <SEO title="Portfolio" />
      <Hero />
      <About />
      <Portfolio />
      <GlobalStyle />
    </Layout>
  )
}
