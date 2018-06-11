import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './HealthyUKitchen.css';


class c_home_content extends Component {
    
    render(){
        return (
            <div>

            <div style={{height:'auto'}}>
                    <div class="row gambar-slide" id="satu" style={{paddingTop:'100px',paddingBottom:'200px'}}>

                        <div class="col-md-6 col-xs-6 col-sm-6">
                            <center><img class="carousel-control" src={require("./images/risoles.JPG")} alt="food" style={{width:'80%',padding:'20px',marginLeft:'60px'}}/></center>
                        </div>

                        <div class="col-md-6 col-xs-6 col-sm-6">
                            <h1 class="about">About Catering..</h1><br/>
                            <h5 class="about1">We are open since 2018</h5>
                            <p class="about1" style={{textAlign:'justify',paddingRight:'20px'}}>We made it with heart and we understand your healthy needs. Best price for students, because we understand that Indonesian student usually don't get good enough nutritions in their daily life. We only use seasonal ingredients.</p>
                            <p class="about1">Enjoy & follow our healthy recipes also in our instagram, just for you, and you can try it by yourself.</p>
                        </div>

                        </div>
                    </div>


                    <div style={{height:'auto'}}>
                    <div  class="row gambar-slide" id="dua" style={{paddingTop:'200px',paddingBottom:'200px'}}>

                        <h4 class="about"><center>Please check, what do you need here ? </center></h4><br/>
                        <div class="col-md-6">
                            <center>
                        <img src={require("./images/healthy.jpg")} alt="health" style={{width:'200px',height:'200px'}}/><br/>
                        <label class="checkbox-inline"><input type="checkbox" value=""/>I want to be Healthy</label>
                            </center>
                        </div>
            
                        <div class="col-md-6">
                            <center>
                        <img src={require("./images/diet5.jpg")} alt="true" style={{width:'200px',height:'200px'}}/><br/>
                            <label class="checkbox-inline"><input type="checkbox" value=""/>I want to Diet !! </label><br/><br/><br/>
                        </center>
                        </div>
            
                        <center><button type="button" class="btn btn-info">Please follow me</button></center>        
                    </div>
                    </div>

            </div>

            );
        }
    }
export default c_home_content;