import React, { Component } from 'react'; 
import { Link, Route } from 'react-router-dom'; 
import './adminHealthy.css';
 
import Header from './c_header'; 
import Footer from './c_footer'; 

class r_home_admin extends Component { 
  render() { 
  return ( 
  <div>            
        <Header/>

        <div className="row">
        <div className="col-md-2 col-sm-2 col-xs-2">
          <div style={{height: 500}}>                          
          </div>
        </div>
        
        <div className="col-md-8 col-sm-8 col-xs-8">
          <div className="info2">
            <span className="tulisan3" style={{color: 'darkolivegreen'}}>DASHBOARD</span>
          </div>            
        </div>

        <div className="col-md-2 col-sm-2 col-xs-2">
          <div style={{height: 30}}>                          
          </div>
        </div>
  

        <center>                
          <div className="col-md-2">
            <div className="info1" style={{paddingTop: 15}}>                                          
              <span className="tulisan1">Total Sales</span><br />            
              <span className="tulisan2"> 12.837</span> <br />  
              <span className="tulisan1"> this month</span><br />  
              <a className="tulisan1" style={{color: 'brown'}}><span className="caret" />TRANSACTIONS</a>
            </div>
          </div>

                
          <div className="col-md-2">
            <div className="info1" style={{paddingTop: 15}}>                                          
              <span className="tulisan1">Total Customers</span><br />            
              <span className="tulisan2"> 152</span> <br />  
              <span className="tulisan1"> accounts </span><br />  
              <a className="tulisan1" style={{color: 'brown'}}><span className="caret" />CUSTOMERS</a>
            </div>
          </div>                  
                                  
          <div className="col-md-2">
            <div className="info1" style={{paddingTop: 15}}>                                          
              <span className="tulisan1">Total Products</span><br />            
              <span className="tulisan2"> 8 </span> <br />  
              <span className="tulisan1"> products </span><br />  
              <a className="tulisan1" style={{color: 'brown'}}><span className="caret" />PRODUCTS</a>
            </div>
          </div>                
          
         
          <div className="col-md-2">
            <div className="info1" style={{paddingTop: 15}}>                                          
              <span className="tulisan1">Total View</span><br />            
              <span className="tulisan2"> 1.908 </span> <br />  
              <span className="tulisan1"> visitors </span><br />  
              {/* <a class="tulisan1" style="color:brown"><span class="caret"></span></a> */}
            </div>
          </div>                                                                            
          </center>

          <div className="col-md-2 col-sm-2 col-xs-2">
          <div style={{height: 150}}>                          
          </div>
        </div>                       
            
        <div className="col-md-2 col-sm-4 col-xs-4">            
          <span className="tulisan3"><b> Recent User</b></span>
          <div className="list-group">
            <a href="#" className="list-group-item"><img src={require("./images/user2.png")} alt="true" style={{width: '30%', height: '30%'}} /><span className="tulisan3">&nbsp;&nbsp; Udin</span> </a>
            <a href="#" className="list-group-item"><img src={require("./images/user2.png")} alt="true" style={{width: '30%', height: '30%'}} /><span className="tulisan3">&nbsp;&nbsp; Tono</span> </a>
            <a href="#" className="list-group-item"><img src={require("./images/user2.png")} alt="true" style={{width: '30%', height: '30%'}} /><span className="tulisan3">&nbsp;&nbsp; Meri</span> </a>                
          </div>
        </div> 
        
        <div className="col-md-6 col-sm-8 col-xs-8">            
          <span className="tulisan3"><b> Information </b></span>
          <div className="panel panel-default">
            <div className="panel-body">
              <input className="form-control" id="myInput" type="text" placeholder="Search.." />
              <br />
              <table className="table">
                <thead>
                  <tr>
                    <th> Item</th>
                    <th> Value </th>
                    <th> Period </th>
                    <th> Last Update </th>
                  </tr>
                </thead>
                <tbody id="myTable">
                  <tr>
                    <td> Revenue </td>
                    <td> Rp12.000.000,00 </td>
                    <td> November 2018 </td>
                    <td> 12-June-2018 </td>
                  </tr>
                  <tr>
                    <td> Profit </td>
                    <td> Rp5.000.000,00 </td>
                    <td> November 2018 </td>
                    <td> 12-June-2018 </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        </div>
        
        
        
        
        <Footer/>               
        </div> 
); 
} 
} 
export default r_home_admin;