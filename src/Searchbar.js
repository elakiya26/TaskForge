import React from 'react'


export const Searchbar = ({search,setSearch}) => {
  return (
    <form className='searchForm' onSubmit={(e)=>e.preventDefault()}>
    <label htmlFor='label'>Search</label>
        <input
        id='search'
        type='text'
        role='searchbox'
        placeholder='Search '
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        

        />
        
        
   
</form>
  )
}
