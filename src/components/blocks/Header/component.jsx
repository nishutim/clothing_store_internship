import React from 'react'

import SearchFormContainer from '@/components/forms/SearchForm'
import { HeaderContainer } from './styles'

export default function Header () {
  return (
    <HeaderContainer>
      <h1>
          VICTIM
      </h1>
      <SearchFormContainer />
    </HeaderContainer>
  )
}
