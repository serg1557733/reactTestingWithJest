import React from 'react'
const Search = props => {

    const {value, onChange, children = 'Search ...', placeholder = 'search...'} = props;

  return (
    <label>
        {children}
        <input 
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
         />
    </label>
  )
}

export default  Search;