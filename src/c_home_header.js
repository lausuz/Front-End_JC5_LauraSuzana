import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './HealthyUKitchen.css';

import satu from './c_home_content2/#satu';
import dua from './c_home_content2/#dua';
import tiga from './c_home_footer/#tiga';

class c_home_header extends Component {
    render(){
        return (
 <div>

     <div style={{height:'70px'}} id="nol">
     <div style={{height:'86%'}}>
      <div className="atap">
          <img src={require("./images/vegies.png")} alt="icon" width="100px" height="50px" style={{float:'left'}}/>        
            Healthy U Kitchen <br/>
            <span id="slogan" > Order Food & Read Easy Healthy Food Recipes for You </span>
          </div>
        </div>  
      
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
            <div className="navbar-header">
              <Link className="navbar-brand" to="#">HU Kitchen</Link>
            </div>

            <ul className="nav navbar-nav">                
              <li className="active"><Link to="#nol">Home</Link></li>
              <li><Link to="#satu">About Us</Link></li>
              <li><Link to="#dua">Our Menu & Categories</Link></li>
              <li><Link to="#tiga">Contact Us</Link></li>
              <li><Link to="#">Login & Register</Link></li>
              <li style={{width:'100px'}}><Link to="#"><img src={require("./images/cart.png")} alt="cart" style={{width:'30%'}}/>&nbsp;&nbsp;Cart</Link></li>
            </ul>

            <form className="navbar-form navbar-left" action="/action_page.php">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search"/>
                <div className="input-group-btn">
                  <button className="btn btn-default" type="submit">
                      <img src={require("./images/search1.png")} alt="sc" style={{width:'15px',height:'15px'}}/>                  
                  </button>
                </div>
              </div>
            </form>
          </div>
        </nav>
      </div>
   </div>
    );
  }
}
export default c_home_header;