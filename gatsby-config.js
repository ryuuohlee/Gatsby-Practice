/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata:{
    author: '@jeffreylee',
    title: 'Simply Recipes',
    description: "Nice and clean recipes site",
    person: { name:"jeff", age: 32 },
    simpleData: ['item1', 'item2'],
    complexData: [
      { name: "jeff", age: 32 },
      { name: "john", age: 33 }
    ]
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
