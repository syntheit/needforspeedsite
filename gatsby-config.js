module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-no-sourcemaps`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: "static/favicon.png",
      },
    },
  ],
  siteMetadata: {
    title: "",
    titleTemplate: "",
    description:
      "We are Need For Speed, the FTC robotics team from Lake Forest, Illinois",
    url: "https://www.needforspeedrobotics.org",
    image: "static/favicon.png",
    twitterUsername: "team9113",
  },
}
