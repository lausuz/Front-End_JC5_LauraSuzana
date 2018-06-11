import React, { Component } from 'react'; 
import { Link, Route } from 'react-router-dom'; 
 
import Home from './r_home'; 
import Cart from './r_cart'; 
import Account from './r_account'; 
import Checkout from './r_checkout'; 
import DetailHM from './r_detail_product'; 
import DetailDM from './r_detail_product_dm'; 
import Login from './r_login'; 

class App extends Component { 
  render() { 
  return ( 
  <div>            
      <div>
        <Route path="/Home" component={Home}/>         
        <Route path="/Cart" component={Cart}/>         
        <Route path="/Account" component={Account}/>         
        <Route path="/Check_Out" component={Checkout}/>         
        <Route path="/Detail_Healthy_Meals" component={DetailHM}/>         
        <Route path="/Detail_Diet_Meals" component={DetailDM}/>         
        <Route path="/Login" component={Login}/>         
      </div> 
</div> 
); 
} 
} 
export default App;
