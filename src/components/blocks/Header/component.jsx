import React from 'react'

import SearchBar from '@/components/forms/SearchBar'
import { HeaderWrapper } from './styles'

export default function Header () {
  return (
    <HeaderWrapper>
      <h1>
        VICTIM
      </h1>
      <SearchBar />
    </HeaderWrapper>
  )
}
