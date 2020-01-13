import React from "react";
import Tree from './tree';
import {StaticQuery, graphql, Link} from "gatsby";
import styled from "react-emotion";
// import {ExternalLink} from "react-feather";
import '../styles.css';
import config from '../../../config';
import { Data } from "styled-icons/boxicons-regular";

const forcedNavOrder = config.sidebar.forcedNavOrder;

const ListItem = styled(({ className, active, level, ...props }) => {
    return (
      <li className={className}>
        <a href={props.to} {...props} />
      </li>
    );
})`
  list-style: none;

  a {
    // color: #5C6975;
    text-decoration: none;
    font-weight: ${({ level }) => (level === 0 ? 700 : 400)};
    padding: 0.45rem 0 0.45rem ${props => 2 + (props.level || 0) * 1}rem;
    display: block;
    position: relative;

    &:hover {
      color: #344abd !important;
    }

    ${props =>
      props.active &&
      `
      // color: #663399;
      border-color: rgb(230,236,241) !important;
      border-style: solid none solid solid;
      border-width: 1px 0px 1px 1px;
      background-color: #fff;
    `} // external link icon
    svg {
      float: right;
      margin-right: 1rem;
    }
  }
`;

const Sidebar = styled('aside')`
  background-color: #f2f1eb;
  // margin-top: 47px;
  @media (min-width: 767px) and (max-width:1023px)
  {
    // padding-left: 0;
  }
  @media only screen and (max-width: 1023px) {
  }
  @media only screen and (max-width: 767px) {
    height: 40vh;
  }
`;


const Divider = styled(props => (
  <li {...props}>
    <hr />
  </li>
))`
  list-style: none;
  padding: 0.5rem 0;

  hr {
    margin: 0;
    padding: 0;
    border: 0;
    border-bottom: 1px solid #76787C;
  }
`;


const SidebarLayout = ({location}) => (
  // <StaticQuery
  //   query={graphql`
  //     query {
  //       allMdx(sort: {order: ASC, fields: frontmatter___title}) {
  //         edges {
  //           node {
  //             fields {
  //               slug
  //               title
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `}
  //   render={({allMdx}) => {
  //     return (
  //       <Sidebar className="w-full h-auto overflow-auto sticky top-0 theme-text-color p-6 md:mt-8">
  //         <ul className={'sideBarUL'}>
  //           <Tree
  //             edges={allMdx.edges}
  //           />
  //         </ul>
  //       </Sidebar>
  //     );
  //   }}
  // />
  <StaticQuery
    query={graphql`
      query {
        dev: allMdx(sort: {order: ASC, fields: frontmatter___title}, filter: {frontmatter: {tags: {in: "dev"}}}) {
          edges {
            node {
              fields {
                slug
                title
              }
            }
          }
        }
        history: allMdx(sort: {order: ASC, fields: frontmatter___title}, filter: {frontmatter: {tags: {in: "history"}}}) {
          edges {
            node {
              fields {
                slug
                title
              }
            }
          }
        }
      }
    `}
    render={({dev, history}) => {
      return (
        <Sidebar className="w-full h-auto overflow-auto sticky top-0 theme-text-color p-6 md:mt-8 md:mb-8">
          {/* <h4>List One</h4>
          <ul className={'sideBarUL'}>
            {dev.edges.map(({ node }) => (
              <li>
                <span></span>
                <Link className="hover:font-bold hover:text-gray-900" to='#'>
                  {node.fields.title}
                </Link>
              </li>
            ))}
          </ul> */}
          {/* <h4>Russia</h4> */}
          <ul className={'sideBarUL'}>
            {history.edges.map(({ node }) => (
              <li>
                <span></span>
                <Link className="hover:font-bold hover:text-gray-900" to={node.fields.slug}>
                  {node.fields.title}
                </Link>
              </li>
            ))}
          </ul>
        </Sidebar>
      );
    }}
  />
  // <StaticQuery
  //   query={graphql`
  //     query {
  //       dev: allMdx(sort: {order: ASC, fields: frontmatter___title}, filter: {frontmatter: {tags: {in: "dev"}}}) {
  //         edges {
  //           node {
  //             fields {
  //               slug
  //               title
  //             }
  //           }
  //         }
  //       }
  //       history: allMdx(sort: {order: ASC, fields: frontmatter___title}, filter: {frontmatter: {tags: {in: "history"}}}) {
  //         edges {
  //           node {
  //             fields {
  //               slug
  //               title
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `}
  //   render={({allMdx, data}) => {
  //     return (
  //       <Sidebar className="w-full h-auto overflow-auto sticky top-0 theme-text-color p-6 md:mt-8">
  //         <ul className={'sideBarUL'}>
  //           {data.dev.edges.map(({node}) => (
  //             <li>
  //               <span></span>
  //               <Link to={node.fields.slug}> {node.frontmatter.title} </Link>
  //             </li>
  //           ))}
  //         </ul>
  //       </Sidebar>
  //     );
  //   }}
  // />
);

export default SidebarLayout;
