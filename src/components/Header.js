import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import GitHubButton from 'react-github-btn'
import Link from './link';
import './styles.css';
import config from '../../config.js';


// import Search from './search/index';
import Search from "./search"
const help = require('./images/help.svg');
const isSearchEnabled = config.header.search && config.header.search.enabled ? true : false;

let searchIndices = [];
if(isSearchEnabled && config.header.search.indexName) {
  searchIndices.push(
    { name: `${config.header.search.indexName}`, title: `Results`, hitComp: `PageHit` },
  );
}


import Sidebar from "./sidebar";

const Header = ({location}) => (
  <StaticQuery
    query={
      graphql`
        query headerTitleQuery {
          site {
            siteMetadata {
              headerTitle
              githubUrl
              helpUrl
              tweetText
              logo {
                link
                image
              }
              headerLinks {
                link
                text
              }
            }
          }
        }
        `}
    render={(data) => {
      const logoImg = require('./images/logo.svg');
      const twitter = require('./images/twitter.svg');
      const {
        site: {
          siteMetadata: {
            headerTitle,
            githubUrl,
            helpUrl,
            tweetText,
            logo,
            headerLinks,
          }
        }
      } = data;
      const finalLogoLink = logo.link !== '' ? logo.link : '/';
      return (
        <div className={'navBarWrapper'}>
          <nav className={'navbar navBarDefault rounded-none border-0 flex items-center mb-0 border-t-0 p-4'}>
            <div className={'navbar-header navBarHeader w-full md:w-1/3 xl:w-1/6'}>
              <Link to="/" className={'navbar-brand navBarBrand h-auto font-medium p-0 flex items-center leading-normal'}>
                <div className={"headerTitle text-gray-800"} dangerouslySetInnerHTML={{__html: headerTitle}} />
              </Link>
              <button type="button" className={'navbar-toggle collapsed navBarToggle border-gray-800'} data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className={'sr-only'}>Toggle navigation</span>
                <span className={'icon-bar bg-gray-800'}></span>
                <span className={'icon-bar bg-gray-800'}></span>
                <span className={'icon-bar bg-gray-800'}></span>
              </button>
            </div>
            {isSearchEnabled ? (
              <div className={'searchWrapper hidden-xs navBarUL p-0 relative m-auto w-full lg:w-6/12'}>
                <Search collapse indices={searchIndices} />
              </div>
              ): null}
            <div id="navbar" className={'collapse navBarCollapse overflow-hidden sm:hidden lg:block lg:w-1/6'}>
              <div className={'flex flex-col md:hidden'}>
                <Sidebar location={location} />
                <hr/>
                {isSearchEnabled ? (
                  <div className={'searchWrapper navBarUL p-0 relative m-auto w-full lg:w-6/12 order-first md:order-none'}>
                    <Search collapse indices={searchIndices} />
                  </div>
                  ): null}
              </div>
              <ul className={'nav navbar-nav navBarUL navBarNav navbar-right navBarULRight'}>
                {headerLinks.map((link, key) => {
                  if(link.link !== '' && link.text !== '') {
                    return(
                      <li key={key}>
                        <a href={link.link} target="_blank" dangerouslySetInnerHTML={{__html: link.text}} />
                      </li>
                    );
                  }
                })}
                {helpUrl !== '' ?
                  (<li><a href={helpUrl}><img src={help} alt={'Help icon'}/></a></li>) : null
                }
                {(tweetText !== '' || githubUrl !== '') ?
                  (<li className="divider hidden-xs"></li>): null
                }
                {tweetText !== '' ?
                  (<li>
                    <a href={'https://twitter.com/intent/tweet?&text=' + tweetText} target="_blank">
                      <img className={'shareIcon'} src={twitter} alt={'Twitter'} />
                    </a>
                    </li>) : null
                }
              </ul>
            </div>
          </nav>
        </div>
      );
    }}
  />
);

export default Header;