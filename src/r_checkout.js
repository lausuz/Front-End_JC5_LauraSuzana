import React, { Component } from 'react'; 
import { Link, Route } from 'react-router-dom'; 
 
import Header from './c_header'; 
import Footer from './c_home_footer'; 

class r_checkout extends Component { 
  render() { 
  return ( 
  <div>            
      <div>
        <Header/>         
        <div style={{marginTop:'70px'}}>
          <div className="row">
          <div className="col-md-3">
            <ul className="list-group">
              <li className="list-group-item"><a>Address &amp; Product in Cart </a></li><a>
              </a><li className="list-group-item" style={{backgroundColor: 'aqua'}}><a /><a> Payment &amp; Checkout</a> <span className="badge">2</span></li> 
            </ul>
          </div>
          <div className="col-md-8">
            <div className="panel panel-default">
              <div className="panel-body">
                <h1> How to Pay ?</h1>
                <h3> Your item : </h3>
                <table className="table table-bordered">
                  <tbody><tr>
                      <td> 
                        <img src={require("./images/hm2.png")} style={{width: 70, height: 50, float: 'left'}} />
                        <center> Healthy meals 1 week package</center> 
                      </td>                
                      <td><center> Rp 950.000,00 </center></td>
                      <td><center> 1 </center></td>
                      <td><center> Rp 950.000 </center></td>
                    </tr>
                    <tr>
                      <td> 
                        <img src={require("./images/dm2.png")} style={{width: 70, height: 50, float: 'left'}} />
                        <center> Diet meals 1 week package</center> 
                      </td>                
                      <td><center> Rp 950.000,00 </center></td>
                      <td><center> 1 </center></td>
                      <td><center> Rp 950.000,00 </center></td>                    
                    </tr>
                    <tr>
                      <th colSpan={3}><center> Grand Total </center></th>
                      <th><center> Rp 1.900.000,00 </center></th>
                    </tr>
                  </tbody></table>
                <h3> Your Detail : </h3>
                <table className="table table-bordered">
                  <tbody><tr>
                      <td> Your full name :</td>
                      <td> Juwita Vera </td>
                    </tr>
                    <tr>
                      <td> Address : </td>
                      <td> Komplek TNI AL Jatibening, Jl. Seram Blok C 44 </td>
                    </tr>
                    <tr>
                      <td> Kota :</td>
                      <td> Bekasi </td>
                    </tr>
                    <tr>
                      <td> Kode Pos : </td>
                      <td> 17412 </td>
                    </tr>
                    <tr>
                      <td> Telepon : </td>
                      <td> +6289608007650 </td>
                    </tr>
                  </tbody></table>
                <h5>Please kindly check your detail to help us arrange the shipment to your place. </h5>
                <h5><b>The shipment's fee is already included by this order. </b></h5>
                <h5>If you ready to make a payment please transfer to us : </h5><br /><br />
                <h3>BCA cbg. Bogor</h3>
                <h3>No. Rekening : 198203958 </h3>
                <h3>A/N : PT. Kais Kitchen </h3><br />
                <h5>Have you paid the order?&nbsp;&nbsp; <button className="btn-info"> I Have Checked Out &amp; Paid! </button> &nbsp;&nbsp;or&nbsp;&nbsp;<button className="btn-info"> Back to Cart </button> </h5><br /><br />
              </div>
            </div>
          </div>
        </div>
      </div>  
        <Footer/>         
      </div> 
</div> 
); 
} 
} 
export default r_checkout;