import React, { useState, useEffect, createRef } from "react";
import {
  InstantSearch,
  Index,
  Hits,
  Configure,
  Pagination,
  connectStateResults,
} from "react-instantsearch-dom";
import algoliasearch from "algoliasearch/lite";
import config from "../../../config.js";

import styled, { css } from 'styled-components';
import { PoweredBy } from "./styles"
import { Search } from "styled-icons/fa-solid/Search"
import Input from "./input"
import * as hitComps from "./hitComps"
import '../styles.css';

const SearchIcon = styled(Search)`
  width: 1em;
  pointer-events: none;
`

const HitsWrapper = styled.div`
  // width: 500px;
`

const Root = styled.div`
`

const focus = css`
  background: white;
  color: ${props => props.theme.darkBlue};
  cursor: text;
  width: 5em;
  + ${SearchIcon} {
    color: ${props => props.theme.darkBlue};
    margin: 0.3em;
  }
`

const Results = connectStateResults(
  ({ searchState: state, searchResults: res, children }) =>
    res && res.query && res.nbHits > 0 ? children : `No results for '${state.query}'`
)

const Stats = connectStateResults(
  ({ searchResults: res }) =>
    res && res.query && res.nbHits > 0 && `${res.nbHits} result${res.nbHits > 1 ? `s` : ``}`
)

const useClickOutside = (ref, handler, events) => {
  if (!events) events = [`mousedown`, `touchstart`]
  const detectClickOutside = event =>
    !ref.current.contains(event.target) && handler()
  useEffect(() => {
    for (const event of events)
      document.addEventListener(event, detectClickOutside)
    return () => {
      for (const event of events)
        document.removeEventListener(event, detectClickOutside)
    }
  })
}

export default function SearchComponent({ indices, collapse, hitsAsGrid }) {
  const ref = createRef()
  const [query, setQuery] = useState(``)
  const [focus, setFocus] = useState(false)
  const searchClient = algoliasearch(
    config.header.search.algoliaAppId,
    config.header.search.algoliaSearchKey
  )
  useClickOutside(ref, () => setFocus(false))
  const displayResult = (query.length > 0 && focus) ? 'showResults' : 'hideResults';
  return (
    <InstantSearch className="instantSearch"
      searchClient={searchClient}
      indexName='pages'
      onSearchStateChange={({ query }) => setQuery(query)}
      root={{ Root, props: { ref } }}
    >
      <Input onFocus={() => setFocus(true)} {...{ collapse, focus }} />
      <HitsWrapper className={'hitWrapper bg-white absolute h-auto overflow-scroll left-0 w-full ' + displayResult} show={query.length > 0 && focus} asGrid={hitsAsGrid}>
        {indices.map(({ name, title, hitComp }) => {
          return (
            <Index key={name} indexName='pages'>
              <Results>
                <Hits hitComponent={hitComps[hitComp](() => setFocus(false))} />
              </Results>
            </Index>
          )})}
        <PoweredBy />
      </HitsWrapper>
      <Configure hitsPerPage={5} />
    </InstantSearch>
  )
}