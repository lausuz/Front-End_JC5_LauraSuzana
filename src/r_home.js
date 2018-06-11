import React, { Component } from 'react'; 
import { Link, Route } from 'react-router-dom'; 
 
import Header from './c_home_header'; 
import Content1 from './c_home_content'; 
import Content2 from './c_home_content2'; 
import Footer from './c_home_footer'; 

class r_home extends Component { 
  render() { 
  return ( 
  <div>            
      <div>
        <Header/>         
        <Content1/>         
        <Content2/>         
        <Footer/>         
      </div> 
</div> 
); 
} 
} 
export default r_home;