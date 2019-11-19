const config = require("../../config.js");

// QUERY TYPE ONE
// const pageQuery = `{
//   allMdx{
//     edges {
//       node {
//         objectID: id
//         frontmatter {
//           title
//           tags
//           metaDescription
//         }
//         fields {
//           slug
//         }
//         rawBody
//       }
//     }
//   }
// }`

// const flatten = arr =>
//   arr.map(({ node: { frontmatter, fields, ...rest } }) => ({
//     ...frontmatter,
//     ...fields,
//     ...rest,
//   }))
// const settings = { attributesToSnippet: [`excerpt:20`] }

// const indexName = config.header.search ? config.header.search.indexName : '';

// const queries = [
//   {
//     query: pageQuery,
//     transformer: ({ data }) => flatten(data.pageQuery.edges),
//     indexName: `${indexName}`,
//     settings,
//   },
// ]



// // QUERY TYPE TWO
// const pageQuery = `{
//   pages: allMdx{
//     edges {
//       node {
//         objectID: id
//         frontmatter {
//           title
//         }
//         excerpt(pruneLength: 5000)
//         fields {
//           slug
//         }
//       }
//     }
//   }
// }`
// const postQuery = `{
//   posts: allMdx{
//     edges {
//       node {
//         objectID: id
//         frontmatter {
//           title
//           tags
//         }
//         excerpt(pruneLength: 5000)
//         fields {
//           slug
//         }
//       }
//     }
//   }
// }`
// const flatten = arr =>
//   arr.map(({ node: { frontmatter, ...rest } }) => ({
//     ...frontmatter,
//     ...rest,
//   }))
// const settings = { attributesToSnippet: [`excerpt:20`] }
// const queries = [
//   {
//     query: pageQuery,
//     transformer: ({ data }) => flatten(data.pages.edges),
//     indexName: `pages`,
//     settings,
//   },
//   {
//     query: postQuery,
//     transformer: ({ data }) => flatten(data.posts.edges),
//     indexName: `posts`,
//     settings,
//   },
// ]



// QUERY TYPE THREE
const pageQuery = `{
  pages: allMdx {
    edges {
      node {
        objectID: id
        fields {
          slug
        }
        frontmatter {
          title
          metaDescription 
          tags
        }
        rawBody
      }
    }
  }
}`

const flatten = arr =>
  arr.map(({ node: { frontmatter, fields, ...rest } }) => ({
    ...frontmatter,
    ...fields,
    ...rest,
  }))
const settings = { attributesToSnippet: [`excerpt:20`] }

const indexName = config.header.search ? config.header.search.indexName : '';

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => flatten(data.pages.edges),
    indexName: `pages`,
    settings,
  },
]

module.exports = queries