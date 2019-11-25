import React from "react";
import styled from "react-emotion";
import { MDXProvider } from "@mdx-js/react";
import ThemeProvider from "./themeProvider";
import mdxComponents from "./mdxComponents";
import Sidebar from "./sidebar";
import RightSidebar from "./rightSidebar";

const Wrapper = styled('div')`
  // display: flex;
  // justify-content: space-between;
  // background-color: #F5F7FB;

  @media only screen and (max-width: 767px) {
    display: block;
  }
`;

const Content = styled('main')`
  // display: flex;
  // flex-grow: 1;
  margin: 0px 88px;
  margin-top: 3rem;
  margin-bottom: 3rem;
  // background-color: #1F1F1F;
  // background-color: white;
  height: max-content;

  @media only screen and (max-width: 1023px) {
    // padding-left: 0;
    margin: 0 10px;
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
`;

const MaxWidth = styled('div')`
  // @media only screen and (max-width: 50rem) {
  //   width: 100%;
  //   position: relative;
  // }
`;
const LeftSideBarWidth = styled('div')`
  // width: 298px;
`;
const RightSideBarWidth = styled('div')`
  // width: 298px;
`;
const Layout = ({ children, location }) => (
  <ThemeProvider location={location}>
    <MDXProvider components={mdxComponents}>
      <Wrapper className="flex justify-between bg-gray-100">
        <LeftSideBarWidth className={'hidden-xs sm:w-1/3 lg:w-1/6'}>
          <Sidebar location={location} />
        </LeftSideBarWidth>
        <Content className="flex flex-grow p-8 rounded-lg max-h-full bg-white">
          <MaxWidth className="w-full">{children}</MaxWidth>
        </Content>
        <RightSideBarWidth className={'hidden-xs hidden-sm hidden-md w-1/6'}>
          <RightSidebar location={location} />
        </RightSideBarWidth>
      </Wrapper>
    </MDXProvider>
  </ThemeProvider>
);

export default Layout;
