import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './HealthyUKitchen.css';


class c_home_content extends Component {
    

    render(){
        return (
        <div>

        <div style={{height:'auto'}}>
                <div className="gambar-slide"> 
            
              <div className="carousel slide" id="iniCarousel" data-ride="carousel" data-interval={10000}> 
                <ol className="carousel-indicators"> 
                    <li data-target="#iniCarousel" data-slide-to="0" className="active"></li> 
              
                    <li data-target="#iniCarousel" data-slide-to="1"></li> 
              
                    <li data-target="#iniCarousel" data-slide-to="2"></li> 
                </ol> 
                  <div className="carousel-inner" style={{width:'100%',height:'50%'}}> 

                     <div className="item active" > 
                        <img src={require("./images/menusehat.jpg")} alt="true"/> 
                     </div> 

                     <div className="item"> 
                        <center><img src={require("./images/drink.jpg")} alt="true"/></center>
                     </div> 

                     <div className="item"> 
                        <img src={require("./images/menusehat3.jpg")} alt="true"/> 
                     </div> 
                  </div>
              </div>
        </div>
        </div>
        </div>
        
            );
        }
    }
export default c_home_content;