import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './HealthyUKitchen.css';

class c_home_footer extends Component {
    render(){
        return (
            <div>

            <footer className="container-fluid" id="tiga" style={{backgroundColor: 'grey', width: '100%', height: 150, border: '2px solid grey'}}>
                    <span style={{marginTop: '200'}} className="about2"><center>@2018 Healthy U Kitchen</center></span><br />
                    <center>
                    <p className="about2">You should contact us at :</p>
                    <a><img src={require("./images/instagram.png")} alt="true" style={{height: 30, width: 30}} /> <span className="about2">Our Instagram : @HealthyUKitchen</span></a>
                    :&nbsp;:&nbsp; OR :&nbsp;:&nbsp;
                    <a><img src={require("./images/youtube2.png")} alt="true" style={{height: 30, width: 30}} /> <span className="about2">Our Youtube : HealthyUKitchen</span> </a>
                    </center>
            </footer>

            </div>
            );
        }
      }
      export default c_home_footer;