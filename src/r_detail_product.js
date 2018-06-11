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

        <center>
        <div className="panel panel-default" style={{width: '70%', marginTop:'70px'}}>
          <div className="panel-heading"><center>Product Detail</center></div>
          <div className="panel-body"><b> Healthy Meals Package</b></div><br />
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
                <img src={require("./images/hm1.png")} alt="Healthy Meal Example" />
              </div>
              <div className="item">
                <img src={require("./images/hm2.png")} alt="Healthy Meal Example" />
              </div>
              <div className="item">
                <img src={require("./images/hm3.png")} alt="Healthy Meal Example" />
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
          <center><h4 style={{textAlign: 'justify', lineHeight: 2, paddingLeft: 30, paddingRight: 30}}>
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
                  <button type="button" className="btn btn-info">Add to Cart</button>
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
                  <button type="button" className="btn btn-info">Add to Cart</button>
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
                  <button type="button" className="btn btn-info">Add to Cart</button>
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
                  <button type="button" className="btn btn-info">Add to Cart</button>
                </td>
              </tr>
            </tbody></table>
        </div>
      </center>
               
        <Footer/>         
      </div> 
</div> 
); 
} 
} 
export default r_detail_product;