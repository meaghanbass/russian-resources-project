
// const BlogQuery = '{
//     allMdx(sort: {order: ASC, fields: frontmatter___title}) {
//       edges {
//         node {
//           fields {
//             title
//           }
//           frontmatter {
//             tags
//             metaDescription
//           }
//           rawBody
//         }
//       }
//     }
//   }';

const queries = require("./src/utils/algolia");
require("dotenv").config();

const config = require("./config");

const plugins = [
  'gatsby-plugin-sitemap',
  'gatsby-plugin-sharp',
  {
    resolve: `gatsby-plugin-layout`,
    options: {
        component: require.resolve(`./src/templates/docs.js`)
    }
  },
  `gatsby-plugin-postcss`,
  'gatsby-plugin-styled-components',
  {
    resolve: 'gatsby-plugin-mdx',
    options: {
      gatsbyRemarkPlugins: [
        {
          resolve: "gatsby-remark-images",
          options: {
            maxWidth: 1035,
            sizeByPixelDensity: true
          }
        },
        {
          resolve: 'gatsby-remark-copy-linked-files'
        }
      ],
      extensions: [".mdx", ".md"]
    }
  },
  'gatsby-plugin-emotion',
  'gatsby-plugin-remove-trailing-slashes',
  'gatsby-plugin-react-helmet',
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "docs",
      path: `${__dirname}/content/`
    }
  },
  {
    resolve: `gatsby-plugin-gtag`,
    options: {
      // your google analytics tracking id
      trackingId: config.gatsby.gaTrackingId,
      // Puts tracking script in the head instead of the body
      head: true,
      // enable ip anonymization
      anonymize: false,
    },
  },
  {
    resolve: `gatsby-plugin-algolia`,
    options: {
      appId: process.env.GATSBY_ALGOLIA_APP_ID,
      apiKey: process.env.ALGOLIA_ADMIN_KEY,
      queries,
      chunkSize: 10000, // default: 1000
    },
  }
];
// if (config.header.search && config.header.search.enabled && config.header.search.algoliaAppId && config.header.search.algoliaAdminKey) {
//   plugins.push({
//     resolve: `gatsby-plugin-algolia`,
//     options: {
//       appId: config.header.search.algoliaAppId, // algolia application id
//       apiKey: config.header.search.algoliaAdminKey, // algolia admin key to index
//       // appId: process.env.ALGOLIA_APP_ID,
//       // apiKey: process.env.ALGOLIA_API_KEY,
//       // indexName: process.env.ALGOLIA_INDEX_NAME,
//       queries,
//       chunkSize: 1000, // default: 1000
//     }}
//   )
// }
module.exports = {
  pathPrefix: config.gatsby.pathPrefix,
  siteMetadata: {
    title: config.siteMetadata.title,
    description: config.siteMetadata.description,
    docsLocation: config.siteMetadata.docsLocation,
    ogImage: config.siteMetadata.ogImage,
    favicon: config.siteMetadata.favicon,
    logo: { link: config.header.logoLink ? config.header.logoLink : '/', image: config.header.logo }, // backwards compatible
    headerTitle: config.header.title,
    githubUrl: config.header.githubUrl,
    helpUrl: config.header.helpUrl,
    tweetText: config.header.tweetText,
    headerLinks: config.header.links,
    siteUrl: config.gatsby.siteUrl,
  },
  plugins: plugins
};
