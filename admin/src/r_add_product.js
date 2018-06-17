import React, { Component } from 'react'; 
import { Link, Route } from 'react-router-dom'; 
import './adminHealthy.css';
 
import Header from './c_header'; 
import Footer from './c_footer'; 

class r_add_product extends Component { 
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
                <div className="panel-heading"><center><b>NEW PRODUCT</b></center></div>
                  <div className="panel-body">
                      <label htmlFor="usr"> Choose Categories :</label><br />

                  <div className="checkbox">
                        <label><input type="checkbox" defaultValue />Diet Meals</label>
                  </div>
                  <div className="checkbox">
                    <label><input type="checkbox" defaultValue />Healthy Meals</label>
                  </div>

                  <div className="checkbox disabled">
                  </div><br />

                  <label htmlFor="usr"> Add Product:</label>
                  <input type="text" className="form-control" id="usr" placeholder="Name of Product" /><br />
                  <label htmlFor="usr"> Add Price:</label>
                  <input type="text" className="form-control" id="usr" placeholder="Price of product" /><br />
                  <label htmlFor="usr"> Picture of Product :</label>
                  <center><div className="panel" style={{width: 100, height: 100, border: '1px solid black'}}><center> Add Picture Product </center></div></center>
                  <input type="file" className="form-control" /><br />
                  <center><button className="button" style={{marginBottom: 20}}>Add Product</button></center>
                </div>
              </div>
            </div>           
            </div>           
                    
                
        <Footer/>               
        </div>
        
); 
} 
} 
export default r_add_product;