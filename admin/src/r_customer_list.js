import React, { Component } from 'react'; 
import { Link, Route } from 'react-router-dom'; 
 
import Header from './c_header'; 
import Footer from './c_footer'; 

class r_account extends Component { 
  render() { 
  return ( 
  <div>            
        <Header/>

        <div className="row">
        <div className="col-md-2" style={{float: 'left'}}>
          <div className="panel" style={{height: 30}}>                          
          </div>
        </div>
        <div className="row">                        
          <div className="col-md-8 col-sm-8 col-xs-8">
            <div className="info2">
              <span className="tulisan3" style={{color: 'darkolivegreen', paddingTop: 15}}>DASHBOARD &gt; Customer List</span>
            </div>            
          </div>
          <div className="row">                        
            <div className="col-md-11" style={{marginLeft: '4%'}}>
              <div className="panel panel-default">
                <div className="panel-heading"><center> <b> CUSTOMER'S DATA </b></center></div>
                <div className="panel-body">
                  <div className="container">                
                    <input className="form-control" id="myInput" type="text" placeholder="Search.." />
                    <br />
                    <table className="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <th>Number</th>
                          <th>Customer's ID</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>New Payment</th>
                          <th>Action</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody id="myTable">
                        <tr>
                          <td>1</td>
                          <td><a>CUST28031801</a></td>
                          <td>Doe</td>
                          <td>john@example.com</td>
                          <td>Rp1.800.000</td>
                          <td><button type="button"> x remove</button> &nbsp;&nbsp; <button type="button"> <img src={require("./images/cek2.png")} style={{width: 15, height: 15}} /></button> &nbsp;&nbsp; <button type="button"> change </button></td>
                          <td>Payment Not Complete</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td><a>CUST28031802</a></td>
                          <td>Dino</td>
                          <td>Dinon@example.com</td>
                          <td>Rp950.000</td>
                          <td><button type="button"> x remove</button> &nbsp;&nbsp; <button type="button"> <img src={require("./images/cek2.png")} style={{width: 15, height: 15}} /></button> &nbsp;&nbsp; <button type="button"> change </button></td>
                          <td>Payment Not Complete</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td><a>CUST29031801</a></td>
                          <td>Tono</td>
                          <td>Ton0@example.com</td>
                          <td>Rp950.000</td>
                          <td />
                          <td>Payment Approved</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td><a>CUST29031802</a></td>
                          <td>Tyas</td>
                          <td>Tyas@example.com</td>
                          <td>Rp1.800.000</td>
                          <td />
                          <td>Payment Approved</td>
                        </tr>
                      </tbody>
                    </table>               
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
        
        <Footer/>               
</div> 
); 
} 
} 
export default r_account;