import React, { Component } from 'react'; 
import { Link, Route } from 'react-router-dom'; 
 
import Header from './c_header'; 
import Footer from './c_home_footer'; 

class r_cart extends Component { 
  render() { 
  return ( 
  <div>            
      <div>
        <Header/>  

        <div style={{marginTop:'60px'}}>
        <div className="row">
          <div className="col-md-3">
            <ul className="list-group">
              <li className="list-group-item" style={{backgroundColor: 'aqua'}}><a>Address &amp; Product in Cart </a><span className="badge">2</span></li>
              <li className="list-group-item"><a> Payment &amp; Checkout </a> <span className="badge">2</span></li> 
            </ul>
          </div>
          <div className="col-md-8">
            <div className="panel panel-default">
              <div className="panel-body">
                <table className="table table-bordered">
                  <tbody><tr>
                      <td> Your full name</td>
                      <td> <input type="text" className="form-control" id="usr" /> </td>
                    </tr>
                    <tr>
                      <td> Address </td>
                      <td> <textarea className="form-control" rows={5} id="comment" defaultValue={""} /> </td>
                    </tr>
                    <tr>
                      <td> Kota </td>
                      <td> <input type="text" className="form-control" id="usr" /> </td>
                    </tr>
                    <tr>
                      <td> Kode Pos </td>
                      <td> <input type="text" className="form-control" id="usr" /> </td>
                    </tr>
                    <tr>
                      <td> Telepon </td>
                      <td> <input type="text" className="form-control" id="usr" /> </td>
                    </tr>
                  </tbody></table>
                <div className="checkbox">
                  <label><input type="checkbox" defaultValue />Alamat sesuai dengan pemesan / User </label>
                </div><br /><br />
                <table className="table">
                  <tbody><tr>
                      <th><center> Product </center></th>
                      <th><center> Price </center></th>
                      <th><center> Quantity </center></th>
                      <th><center> Total </center></th>
                      <th><center> Action </center></th>
                    </tr>
                    <tr>
                      <td> 
                        <img src={require("./images/hm2.png")} style={{width: 70, height: 50, float: 'left'}} />
                        <center> Healthy meals 1 week package</center> 
                      </td>                
                      <td><center> Rp 950.000,00 </center></td>
                      <td><center> <input type="number" style={{width: 30}} /> </center></td>
                      <td><center> Rp 950.000,00 </center></td>
                      <td><center> <button className="btn-danger"> x Remove </button> </center></td>
                    </tr>
                    <tr>
                      <td> 
                        <img src={require("./images/dm2.png")} style={{width: 70, height: 50, float: 'left'}} />
                        <center> Diet meals 1 week package</center> 
                      </td>                
                      <td><center> Rp 950.000,00 </center></td>
                      <td><center> <input type="number" style={{width: 30}} /> </center></td>
                      <td><center> Rp 950.000,00 </center></td>
                      <td><center> <button className="btn-danger"> x Remove </button> </center></td>
                    </tr>
                    <tr>
                      <th colSpan={3}><center> Grand Total </center></th>
                      <th><center> Rp 1.900.000,00 </center></th>
                    </tr>
                  </tbody></table>
              </div>
            </div>
          </div>
        </div>
        <center><button className="btn-info"> Make a Payment </button></center><br /><br /><br />
      </div>       
               
        <Footer/>         
      </div> 
</div> 
); 
} 
} 
export default r_cart;