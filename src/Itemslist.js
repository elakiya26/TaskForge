import React from 'react'

import Newlistitem from './Newlistitem';

const Itemslist = ({items,handlecheck,deletecheck}) => {
    return (
      <ul>
    {items.map((item)=>( 
      
     <Newlistitem
      item={item}
      handlecheck={handlecheck}
      deletecheck={deletecheck}
     />
     ))}
     </ul>
  )
}

export default Itemslist