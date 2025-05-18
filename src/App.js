import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";
import "./index.css";
import Add from "./Add";
import { Searchbar } from "./Searchbar";


function App(){
   const [items,setitems]= useState(JSON.parse(localStorage.getItem('todo_list')));
   const [search,setSearch]=useState('')
          const [newItem,setNewItem]=useState('')
          
          
          const addnewItems=(item)=>{
            const id=items.length ? items[items.length-1].id+1:1;
            const addnewitems={id,checked:false,item}
            const listitems=[...items,addnewitems]
            setitems(listitems)
            localStorage.setItem("todo_list",JSON.stringify(listitems))
          }
          const handlecheck = (id) =>{
              const listitems=items.map(item=>item.id===id?{...item,checked:!item.checked}:item)
              setitems(listitems)
              localStorage.setItem("todo_list",JSON.stringify(listitems))
            
  
          }
          const deletecheck=(id)=>{
              const listitems=items.filter((item)=>(item.id!==id))
              setitems(listitems)
              localStorage.setItem("todo_list",JSON.stringify(listitems))

          }
          const handleSubmit=(e)=>{
            e.preventDefault()
           if(!newItem) return;
            console.log(newItem)
            addnewItems(newItem)
            setNewItem('')
          }
 
  return(
    <div className="App">
    <Header/>
    
    <Add
      newItem={newItem}
      setNewItem={setNewItem}
      handleSubmit={handleSubmit}
    />
    <Searchbar
      search={search}
      setSearch={setSearch}
      />
    <Content
      items={items}
      handlecheck={handlecheck}
      deletecheck={deletecheck}

    />
    <Footer
      len={items.length}
    />
    </div>
  
  );

}

export default App;