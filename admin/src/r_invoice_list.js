import React, { Component } from 'react'; 
import { Link, Route } from 'react-router-dom'; 
import './adminHealthy.css';
 
import Header from './c_header'; 
import Footer from './c_footer'; 

class r_invoice_list extends Component { 
  render() { 
  return ( 
  <div>            
        <Header/>

        <div className="row">        
        <div className="col-md-12 col-sm-12 col-xs-12">
          <div className="info2">
            <span className="tulisan3" style={{color: 'darkolivegreen', paddingTop: 15}}>DASHBOARD &gt; Invoice List</span>
          </div>            
        </div>
        <div className="row">                        
          <div className="col-md-11" style={{marginLeft: '4%'}}>
            <div className="panel panel-default">
              <div className="panel-heading"><center> <b> INVOICE </b></center></div>
              <div className="panel-body">
                <div className="container">                                    
                  <table className="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th>Number</th>
                        <th>Invoice Number</th>
                        <th> Name of Customer </th>
                        <th> Date of Invoice </th>                          
                        <th> Total Value </th>                          
                        <th>Action</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody id="myTable">
                      <tr>
                        <td />
                        <td><input className="form-control" id="myInput" type="text" placeholder="Search.." /></td>
                        <td><input className="form-control" id="myInput" type="text" placeholder="Search.." /></td>
                        <td><input className="form-control" id="myInput" type="text" placeholder="Search.." /></td>
                        <td><input className="form-control" id="myInput" type="text" placeholder="Search.." /></td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>1</td>
                        <td><a>INV2803201801</a></td>
                        <td>Doe</td>
                        <td>28 March 2018</td>
                        <td>Rp1.800.000</td>
                        <td><button type="button"> x remove</button> &nbsp;&nbsp; <button type="button"> change </button></td>
                        <td>Customer has received</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td><a>INV2803201802</a></td>
                        <td>Doe</td>
                        <td>28 March 2018</td>
                        <td>Rp1.800.000</td>
                        <td><button type="button"> x remove</button> &nbsp;&nbsp; <button type="button"> change </button></td>
                        <td>Customer has received</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td><a>INV2803201803</a></td>
                        <td>Mike</td>
                        <td>28 March 2018</td>
                        <td>Rp1.800.000</td>
                        <td><button type="button"> x remove</button> &nbsp;&nbsp; <button type="button"> change </button></td>
                        <td>Customer has received</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td><a>INV2803201804</a></td>
                        <td>Meri</td>
                        <td>28 March 2018</td>
                        <td>Rp1.800.000</td>
                        <td><button type="button"> x remove</button> &nbsp;&nbsp; <button type="button"> change </button></td>
                        <td>Customer has received</td>
                      </tr>
                    </tbody>
                  </table>               
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
export default r_invoice_list;