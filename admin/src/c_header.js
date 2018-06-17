import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './adminHealthy.css';

class c_header extends Component {
    render(){
        return (
      <div>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" /> 
            </button>
            <img src={require("./images/stlobeli.png")} width="35px" height="35px" style={{float: 'left', marginLeft: 5, marginTop: 10}} />        
            <a className="navbar-brand" href="#">
              <span style={{marginLeft: 5}}>Healthy U Kitchen </span><br />                
            </a>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li><a href="#">Dashboard</a></li>
              <li>                
                <a className="dropdown-toggle" data-toggle="dropdown">Menu
                  <span className="caret" /></a>
                <ul className="dropdown-menu">
                  <li className="dropdown-header"> Customer </li>
                  <li><a href="#"> Our Customers </a></li>
                  <li className="dropdown-header"> Product </li>
                  <li><a href="#">Our Products </a></li>
                  <li><a href="#">Add Category</a></li>
                  <li><a href="#">Add Product</a></li>
                  <li className="dropdown-header">Invoice</li>
                  <li><a href="#"> Customer's Invoice </a></li>
                </ul>
              </li>               
            </ul>
          </div>
        </div>
      </nav>
      </div>
      );
      }
      }
export default c_header;