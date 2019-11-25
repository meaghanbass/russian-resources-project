import React from "react"
import { Algolia } from "styled-icons/fa-brands/Algolia"

export const PoweredBy = () => (
  <span css="font-size: 0.6em; text-align: end; padding: 0; opacity: 0.1; float: right; padding: 5px; padding-right: 15px;">
    Powered by{` `}
    <a href="https://algolia.com" css="color: gray; pointer-events: none;">
      <Algolia size="1em" /> Algolia
    </a>
  </span>
)