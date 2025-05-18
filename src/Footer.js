import React from 'react'

const Footer = ({length}) => {
    // const year=new Date();
  return (
   <footer>
    <p>{length} List {length===1?"Item":"Items"}</p>
    </footer>
  
  );
}

export default Footer;