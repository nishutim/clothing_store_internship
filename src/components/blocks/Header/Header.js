import React from 'react'
import SearchBar from '../../forms/SearchForm/SearchBar'
import './Header.css'

export default function Header ({ onFilterTextChange, filterText }) {
  return (
    <header>
      <div className="header">
        <h1 className="header-heading">
          VICTIM
        </h1>
        <SearchBar onFilterTextChange={onFilterTextChange} filterText={filterText} />
      </div>
    </header>
  )
}
