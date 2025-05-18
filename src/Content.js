
import  React from 'react';
import Itemslist from './Itemslist';


const Content = ({items,handlecheck,deletecheck}) => {
   return (
        <main>
        {(items.length)?(
          <Itemslist
            items={items}
            handlecheck={handlecheck}
            deletecheck={deletecheck}
          />):(<p>YOUR LIST IS EMPTY</p>)}
         
            
        </main>
    );
}

export default Content
