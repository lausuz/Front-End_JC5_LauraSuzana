import React, { Component } from 'react'; 
import { Link, Route } from 'react-router-dom'; 
import './adminHealthy.css';
 
import Header from './c_header'; 
import Footer from './c_footer'; 

class r_add_category extends Component { 
  render() { 
  return ( 
  <div>            
        <Header/>

        <div className="row">
        <div className="col-md-2 col-sm-2 col-xs-2">
          <div className="panel" style={{height: 500}}>                          
          </div>
        </div>
      

            <div className="col-md-8 col-sm-8 col-xs-8">            
              <div className="info2">
                <span className="tulisan3" style={{color: 'darkolivegreen'}}>DASHBOARD &gt; Product List &gt; Add Category</span>
              </div><br/>    
            
              <div className="panel panel-default">
                <div className="panel-heading"><center><b>NEW CATEGORY</b></center></div>
                <div className="panel-body">
                  <div className="form-group">
                    <label htmlFor="usr"> Add Category:</label>
                    <input type="text" className="form-control" id="usr" placeholder="Name of Category" /><br />
                    <label htmlFor="usr"> Picture of Category :</label>
                    <center><div className="panel" style={{width: 100, height: 100, border: '1px solid black'}}><center> Add Picture Category </center></div></center>
                    <input type="file" className="form-control" /><br />
                    <label htmlFor="usr"> Description :</label>
                    <textarea className="form-control" rows={5} id="comment" defaultValue={""} />
                  </div>
                  <button className="button">Add Category</button>
                </div>
              </div>
            </div>
            </div>           
                    
                
        <Footer/>               
        </div>
        
); 
} 
} 
export default r_add_category;