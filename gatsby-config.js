module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
          stylesProvider: {
          injectFirst: true,
        },
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
      apiURL: `https://tfs-strapi.herokuapp.com`,
      queryLimit: 1000,
      collectionTypes: [
        `post`,
        `work`,
        `press`,
        `production`,
        `collaborator`,
        `review`
      ],
      }
    },
      `gatsby-plugin-styled-components`,
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-mdx`
  ],
siteMetadata: {
  title: 'Thirty Five Square',
  description: 'Thirty Five Square is a Sydney-based theatre company inspired by cities and the people who live in them.',
  author: 'Tabitha Woo',
  siteUrl: 'https://www.thirtyfivesquare.com'
}
};
