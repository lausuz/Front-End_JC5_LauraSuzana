import React, { Component } from 'react'; 
import { Link, Route } from 'react-router-dom'; 
 
import Header from './c_header'; 
import Footer from './c_home_footer'; 

class r_detail_product extends Component { 
  render() { 
  return ( 
  <div>            
      <div>
        <Header/>         

        <div>
        <div className="row">
          <div className="col-md-4" />
          <div className="col-md-4"> 
            <h2 className="text-center">Pengunjung terdaftar? Silahkan Login disini. </h2>
            <div className="panel panel-default">
              <div className="panel-heading"><center>Please Login here</center></div>
              <div className="panel-body">
                <center>
                  <table className="table">
                    <tbody><tr>
                        <td> Username : </td>
                        <td> <input type="text" /> </td>
                      </tr>
                      <tr>
                        <td> Password : </td>
                        <td> <input type="password" /> </td>
                      </tr>
                    </tbody></table>
                  <a className />
                  <label className="checkbox-inline"><input type="checkbox" defaultValue />Please remember me</label><br /><br /><br />
                  <button type="button" className="btn">Sign me in</button>
                </center>
              </div>
            </div>
          </div>
          <div className="col-md-4" />
        </div>
        <center><p className="bg-info" style={{color: 'salmon'}}> If you never make an account before, you could register here </p></center><br /><br />      
        <h2 className="text-center">Belum punya akun? Ayo daftar disini! </h2>
        <div className="row">
          <div className="col-md-2 col-xs-2 col-sm-2" /> 
          <div className="col-md-8 col-xs-8 col-sm-8"> 
            <center>
              <div className="panel panel-default" style={{maxWidth: 500}}>
                <div className="panel-heading"><center>Please Register here</center></div>
                <div className="panel-body">
                  <center>
                    <table className="table" style={{maxWidth: 500}}>
                      <tbody><tr>
                          <td> Your Full Name : </td>
                          <td> <input type="text" /> </td>
                        </tr>
                        <tr>
                          <td> Username : </td>
                          <td> <input type="text" /> </td>
                        </tr>
                        <tr>
                          <td> Password : </td>
                          <td> <input type="password" /> </td>
                        </tr>
                        <tr>
                          <td> Re-Password : </td>
                          <td> <input type="password" /> </td>
                        </tr>
                        <tr>
                          <td> Telephone Number : </td>
                          <td> <input type="text" /> </td>
                        </tr>
                        <tr>
                          <td> Give us some address to send your package : </td>
                          <td> <textarea className="form-control" rows={5} id="comment" defaultValue={""} /> </td>
                        </tr>
                      </tbody></table>
                    <button type="button" className="btn">Register</button>
                  </center>
                </div>
              </div>
            </center></div>
        </div> 
        <div className="col-md-2 col-xs-2 col-sm-2"></div> 
      </div>   

        <Footer/>         
      </div> 
</div> 
); 
} 
} 
export default r_detail_product;