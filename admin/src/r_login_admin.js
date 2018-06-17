import React, { Component } from 'react'; 
import { Link, Route } from 'react-router-dom'; 
import './adminHealthy.css';
 
import Header from './c_header'; 
import Footer from './c_footer'; 

class r_login_admin extends Component { 
  render() { 
  return ( 
<div>
<div className="row">
  <div className="col-md-12" />
</div>
<div className="row">
  <div className="col-md-4" />
  <div className="col-md-4">
    <center>
      <div className="panel panel-default" style={{marginTop: 50}}>
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
    </center>
  </div>
  <div className="col-md-4" />
</div>
</div>
);
}
}
export default r_login_admin;