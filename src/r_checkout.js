import React, { Component } from 'react'; 
import { Link, Route } from 'react-router-dom'; 
 
import Header from './c_home_header'; 
import Footer from './c_home_footer'; 

class r_detail_product extends Component { 
  render() { 
  return ( 
  <div>            
      <div>
        <Header/>         
               
        <Footer/>         
      </div> 
</div> 
); 
} 
} 
export default r_detail_product;