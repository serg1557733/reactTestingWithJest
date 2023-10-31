import React from 'react'

export default function List(props) {
    const {item = []} = props;


if(!item.length) return null;

  return (
    <ul className='outer' >
       {item.map(el =>  
       <li key={el}>
            {el}
       </li>)}
    </ul>
    
  )
}