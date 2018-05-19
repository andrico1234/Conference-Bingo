module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: ['gatsby-plugin-react-helmet', {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: `m55ewa4cp1s9`,
      accessToken: `0ffb36d3162aae9e53db9aaa70b14817996ea207f78a4c83cbce5d328ca8913d`,
    },
  }]
}
