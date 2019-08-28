import React from 'react'

import PropTypes from 'prop-types'

import SearchForm from '@/components/forms/SearchForm/component'
import { HeaderContainer } from './styles'

export default function Header ({ onFilterTextChange, filterText }) {
  return (
    <HeaderContainer>
      <h1>
          VICTIM
      </h1>
      <SearchForm
        onFilterTextChange={onFilterTextChange}
        filterText={filterText} />
    </HeaderContainer>
  )
}

Header.propTypes = {
  onFilterTextChange: PropTypes.func.isRequired,
  filterText: PropTypes.string.isRequired,
}
