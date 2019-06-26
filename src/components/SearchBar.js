import React from 'react'

const SearchBar = ({searchField, searchChange}) => {
 
    return (
      <div>
        <input 
        type="search" 
        placeholder="search location"
        onChange={searchChange}
         />
      </div>
    )
  }

export default SearchBar;