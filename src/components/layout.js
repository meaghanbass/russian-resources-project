import React from "react";
import styled from "react-emotion";
import { MDXProvider } from "@mdx-js/react";
import ThemeProvider from "./themeProvider";
import mdxComponents from "./mdxComponents";
import Sidebar from "./sidebar";
import RightSidebar from "./rightSidebar";

const Wrapper = styled('div')`
  @media only screen and (max-width: 767px) {
    display: block;
  }
`;

const Content = styled('main')`
  margin: 0px 88px;
  margin-top: 3rem;
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
`;

const RightSideBarWidth = styled('div')`
`;

const Layout = ({ children, location }) => (
  <ThemeProvider location={location}>
    <MDXProvider components={mdxComponents}>
      <Wrapper className="flex justify-between">
        <LeftSideBarWidth className={'hidden-xs sm:w-1/3 lg:w-1/6'}>
          <Sidebar location={location} />
        </LeftSideBarWidth>
        <Content className="shadow flex flex-grow p-3 md:p-8 rounded-lg max-h-full bg-white">
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
