import React from 'react'
import PropTypes from 'prop-types'
import SearchForm from '@/components/forms/SearchForm/SearchForm'
import { HeaderContainer } from '@/components/blocks/Header/styles'

export default function Header (
  {
    onFilterTextChange,
    filterText,
  }
) {
  return (
    <HeaderContainer className="header">
      <h1 className="header-heading">
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
