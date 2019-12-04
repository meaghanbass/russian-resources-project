import React from "react";
import styled from "react-emotion";
import { MDXProvider } from "@mdx-js/react";
import ThemeProvider from "./themeProvider";
import mdxComponents from "./mdxComponents";
import Sidebar from "./sidebar";
import RightSidebar from "./rightSidebar";

const Wrapper = styled('div')`
  // margin-top: 60px !important;
  // height: calc(100vh - 60px);
  overflow: hidden;
  width: 1170px;
  max-width: 1218px;
  @media screen and (max-width: 1170px) {
    width: 100vw;
  }
  @media only screen and (max-width: 767px) {
    display: block;
  }
`;

const Content = styled('main')`
  // margin: 0px 88px;
  // margin-top: 3rem;
  margin-bottom: 3rem;
  height: max-content;

  @media only screen and (max-width: 1023px) {
    margin: 0 10px;
    // margin-top: 3rem;
    margin-top: 0;
    margin-bottom: 3rem;
  }
`;

const MaxWidth = styled('div')`
`;

const LeftSideBarWidth = styled('div')`
  width: 275px !important;
`;

const RightSideBarWidth = styled('div')`
`;

const Layout = ({ children, location }) => (
  <ThemeProvider location={location}>
    <MDXProvider components={mdxComponents}>
      <Wrapper className="flex px-6 m-auto">
        <LeftSideBarWidth className={'hidden-xs w-1/4'}>
          <Sidebar location={location} />
        </LeftSideBarWidth>
        <Content className="flex flex-grow w-full md:w-3/4 max-h-full bg-white overflow-scroll min-h-screen">
          <MaxWidth className="w-full">{children}</MaxWidth>
        </Content>
        {/* <RightSideBarWidth className={'hidden-xs hidden-sm hidden-md w-1/6'}>
          <RightSidebar location={location} />
        </RightSideBarWidth> */}
      </Wrapper>
    </MDXProvider>
  </ThemeProvider>
);

export default Layout;
