import React from 'react'
import {FaTrashAlt} from 'react-icons/fa';
const Newlistitem = ({item,handlecheck,deletecheck}) => {
  return (
    
    

      <li className="item" key={item.id}>
        <input
        type='checkbox'
        onChange={()=>handlecheck(item.id)}
        checked={item.checked}
        />
    <label
        style={(item.checked)? {textDecoration:"line-through"}:null} 
        onDoubleClick={()=>handlecheck(item.id)}>{item.item}
    </label>
    <FaTrashAlt 
        role='button'
        tabIndex="0"
        onClick={()=>deletecheck(item.id)}
    />

    </li>


   
    

  );
}

export default Newlistitem