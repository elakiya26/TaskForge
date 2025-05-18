import React from 'react'

const Footer = ({len}) => {
    // const year=new Date();
  return (
   <footer>
    {/* <p>Cpoyright &copy; {year.getFullYear()}</p> */}
    <p>{len} List {len===1?"Item":"Items"}</p>
    </footer>
  
  );
}

export default Footer;