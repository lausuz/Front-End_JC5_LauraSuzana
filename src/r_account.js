import React, { Component } from 'react'; 
import { Link, Route } from 'react-router-dom'; 
 
import Header from './c_home_header'; 
import Footer from './c_home_footer'; 

class r_detail_product extends Component { 
  render() { 
  return ( 
  <div>            
        <Header/>

        <div className="row">

            <div className="col-md-2">
              
            </div>

            <div classNameName="col-md-8">

                <div className="panel panel-default">

                  <div className="panel-body">

                      <center><a><img src={require("./images/nanas.png")} className="img-rounded" alt="Pic Profile" style={{border:'1px solid #ddd',width:'30%'}}/></a><br/>
                      <td> <button className="btn-success" type="button"> change your picture </button> </td>
                      </center><br/><br/>

                      <table className="table">

                        <tr>
                          <td> Your Full Name </td>
                          <td> Juwi Vera Irawan </td>
                          <td> <button className="btn-success" type="button"> change </button> </td>
                        </tr>

                        <tr>
                          <td> Username </td>
                          <td> juwiVer4 </td>
                          <td></td>                          
                        </tr>

                        <tr>
                          <td> Password </td>
                          <td> ********* </td>
                          <td> <button className="btn-success" type="button"> change </button> </td>
                        </tr>

                        <tr>
                          <td> Email </td>
                          <td> juwi_vera92@gmail.com </td>
                          <td> <button className="btn-success" type="button"> change </button> </td>
                        </tr>

                        <tr>
                          <td> Address </td>
                          <td> Komplek TNI AL Jatibening, JL. Seram blok C 44 </td>
                          <td> <button className="btn-success" type="button"> change </button> </td>
                        </tr>

                        <tr>
                          <td> Telephone Number </td>
                          <td> +6289608007650 </td>
                          <td> <button className="btn-success" type="button"> change </button> </td>
                        </tr>

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
export default r_detail_product;