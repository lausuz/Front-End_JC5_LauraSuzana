import React, { Component } from 'react'; 
import { Link, Route } from 'react-router-dom'; 
 
import Header from './c_header'; 
import Footer from './c_footer'; 

class r_customer_info extends Component { 
  render() { 
  return ( 
  <div>            
        <Header/>

        <div className="row">
        <div className="col-md-2 col-sm-2 col-xs-2">
        </div>
        <div className="col-md-8 col-sm-8 col-xs-8">
              <div className="info2">
                  <span className="tulisan3" style={{color:'darkolivegreen'}}>DASHBOARD > Customer List > Customer Info</span>
              </div><br/><br/>

              <div className="panel panel-default">
              <div className="panel-heading"><center><b>ID : CUST28031801</b></center></div>
              <div className="panel-body">
                <center><a><img src={require("./images/nanas.png")} className="img-rounded" alt="Pic Profile" style={{border: '1px solid #ddd', width: '30%'}} /></a><br />                  
                </center><br /><br />
                <table className="table">
                  <tbody><tr>
                      <td> Your Full Name </td>
                      <td> Juwi Vera Irawan </td>                      
                    </tr>
                    <tr>
                      <td> Username </td>
                      <td> juwiVer4 </td>                      
                    </tr>
                    <tr>
                      <td> Password </td>
                      <td> ********* </td>                      
                    </tr>
                    <tr>
                      <td> Email </td>
                      <td> juwi_vera92@gmail.com </td>                      
                    </tr>
                    <tr>
                      <td> Address </td>
                      <td> Komplek TNI AL Jatibening, JL. Seram blok C 44 </td>                      
                    </tr>
                    <tr>
                      <td> Telephone Number </td>
                      <td> +6289608007650 </td>                      
                    </tr>
                  </tbody></table>
              </div>
            </div>
        </div>
      </div>
        
        <Footer/>               
</div> 
); 
} 
} 
export default r_customer_info;