import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'; 
import './adminHealthy.css';

import Category from './r_add_category';
import Product from './r_add_product';
import CustInfo from './r_customer_info';
import CustList from './r_customer_list';
import Home from './r_home_admin';
import InvList from './r_invoice_list';
import Invoice from './r_invoice';
import Login from './r_login_admin';
import ProdList from './r_product_list';

class App extends Component {
  render() {
    return (
      <div> 
      <Route path="/" component={'Home'}/> 
      <Route path="/Add_Category" component={Category}/>       
      <Route path="/Add_Product" component={Product}/>       
      <Route path="/Customer_Info" component={CustInfo}/>       
      <Route path="/Customer_List" component={CustList}/>       
      <Route path="/Admin_Home" component={Home}/>       
      <Route path="/Invoice_List" component={InvList}/>       
      <Route path="/Invoice" component={Invoice}/>       
      <Route path="/Admin_Login" component={Login}/>       
      <Route path="/Product_List" component={ProdList}/>       
      </div> 
    );
  }
}

export default App;
