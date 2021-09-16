module.exports = {
  siteMetadata: {
    title: "Tomasz Związek",
    description: "Front-end developer.",
    siteUrl: "https://eager-goldwasser-614770.netlify.app/",
    author: "Tomasz Związek",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets/images`,
      },
    },
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-robots-txt",
    `react-device-detect`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Portfolio - Tomasz Związek",
        short_name: "Portfolio",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "standalone",
        icon: `${__dirname}/src/assets/images/gatsby-icon.png`,
        icon_options: {
          purpose: `any maskable`,
        },
        crossOrigin: `use-credentials`
      },
    },
    "gatsby-plugin-offline",
  ],
};
