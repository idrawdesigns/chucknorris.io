import React from 'react'
import { SearchChuck } from './search.styles'

const SearchButton = () => {
  return (
    <div>
      <SearchChuck
        placeholder="input search text"
        onSearch={(value) => console.log(value)}
        style={{ width: 200 }}
      />
    </div>
  )
}

export default SearchButton
