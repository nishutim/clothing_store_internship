import React, { Component } from 'react'
import './SearchBar.css'

export default class SearchBar extends Component {
  constructor(props){
    super(props)
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value)
  }

  render() {
    return (
      <form onSubmit={e => e.preventDefault()} className="header-searchbar">
        <input 
          className="header-searchbar-searchinput" 
          type="text" 
          placeholder="Search"  
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
        />
      </form>
    )
  }
}


