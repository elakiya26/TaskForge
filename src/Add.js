import React from 'react'
import { LuCalendarPlus } from "react-icons/lu";

const Add = ({newItem,setNewItem,handleSubmit}) => {
  return (
  
    <form className='addForm' onSubmit={handleSubmit}>
    <label htmlFor='addnewItems'>add item</label>
        <input
            autoFocus
            id='additem'
            type='text'
            placeholder='Add today List...'
            required
            value={newItem}
            onChange={(e)=>setNewItem(e.target.value)}
            

        />
         <button
    type='submit'
    aria-label='add your new list'><LuCalendarPlus /></button>
    </form>
    
  )
}

export default Add