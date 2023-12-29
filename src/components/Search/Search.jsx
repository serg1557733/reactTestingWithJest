import React from 'react'
import classes from './Search.module.css';
import cn from 'classnames';


const Search = props => {

  const {value, onChange, children = 'Search ...', placeholder = 'search...'} = props;
  const inputClass = cn({
  [classes.input]: true,
        [classes.filled] : value.length
    })
    
  return (
    <label className={classes.label}>
        {children}
        <div> new div ...</div>
        <input 
        className={inputClass}
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
         />
         <p> Some text on page Search</p>
         <p> Some new text on page Search on master newBranch</p>

    </label>
  )
}

export default  Search;