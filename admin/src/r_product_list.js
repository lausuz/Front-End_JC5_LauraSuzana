import React, { Component } from 'react'; 
import { Link, Route } from 'react-router-dom'; 
import './adminHealthy.css';
 
import Header from './c_header'; 
import Footer from './c_footer'; 

class r_home extends Component { 
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
          <span className="tulisan3" style={{color: 'darkolivegreen', paddingTop: 15}}>DASHBOARD &gt; Product List</span>
        </div>            
        </div>            

        <div className="col-md-8">
          <div className="panel panel-default">
            <div className="panel-heading"><center>Product Detail</center></div>
            <div className="panel-body"><b><center> Healthy Meals Package </center></b></div><br />
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
              {/* Indicators */}
              <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to={0} className="active" />
                <li data-target="#myCarousel" data-slide-to={1} />
                <li data-target="#myCarousel" data-slide-to={2} />
              </ol>
              {/* Wrapper for slides */}
              <div className="carousel-inner">
                <div className="item active">
                  <center><img src={require("./images/hm1.png")} alt="Healthy Meal Example" /></center>
                </div>
                <div className="item">
                  <center><img src={require("./images/hm2.png")} alt="Healthy Meal Example" /></center>
                </div>
                <div className="item">
                  <center><img src={require("./images/hm3.png")} alt="Healthy Meal Example" /></center>
                </div>
              </div>
              {/* Left and right controls */}
              <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left" />
                <span className="sr-only">Previous</span>
              </a>
              <a className="right carousel-control" href="#myCarousel" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right" />
                <span className="sr-only">Next</span>
              </a>
            </div><br />
            <center><h4 style={{textAlign: 'justify', lineHeight: 1.5, paddingLeft: 30, paddingRight: 30}}>
                Adalah menu yang kami rancang untuk memenuhi gizi anda. Healthy Meals, tidak akan membuat berat badan anda turun, karena kami hanya mengganti menu harian anda dengan makanan yang memenuhi standar gizi sehari anda dan makanan yang lebih sehat bagi pencernaan dan seluruh tubuh. Disetiap sajian kami juga mengganti nasi putih dengan nasi merah yang lebih bergizi menurut para ahli.</h4></center><br />
            <p>Tersedia beberapa pilihan paket untuk menu ini dari kami :
            </p><br />
            <table className="table">
              <tbody><tr>
                  <td>
                    Healthy Meals Package for Student
                  </td>
                  <td>
                    Rp 15.000,00
                  </td>
                  <td>
                    <button type="button" className="btn btn-info">Change</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    Healthy Meals Package Regular
                  </td>
                  <td>
                    Rp 50.000,00
                  </td>
                  <td>
                    <button type="button" className="btn btn-info">Change</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Healthy Meals Package for 1 Week,</p> 
                    <p>3 times per day (7 days exclude Sunday)</p>
                  </td>
                  <td>
                    Rp 950.000,00
                  </td>
                  <td>
                    <button type="button" className="btn btn-info">Change</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Healthy Meals Package for 2 Weeks,</p> 
                    <p>3 times per day (14 days exclude Sunday)</p>
                  </td>
                  <td>
                    Rp 1.850.000,00
                  </td>
                  <td>
                    <button type="button" className="btn btn-info">Change</button>
                  </td>
                </tr>
              </tbody></table>
            <ul className="pager">
              <li><a href="#">Previous</a></li>
              <li><a href="#">Next</a></li>
            </ul>
            <br /><br /><br />
            <center>
              <p><a className="btn btn-primary btn-lg" href="#" role="button"> + ADD CATEGORY </a></p>
              <p><a className="btn btn-primary btn-lg" href="#" role="button"> + ADD PRODUCT </a></p>
            </center>
          </div></div></div>       
        
        
      <Footer/>
</div> 
); 
} 
} 
export default r_home;