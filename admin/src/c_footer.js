import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './adminHealthy.css';

class c_footer extends Component {
    render(){
        return (
        <footer className="col-md-12" style={{backgroundColor: 'grey', height: 100}}>
            <center><p className="tulisan3">@2018 Healthy U Kitchen</p></center>
        </footer>
);
}
}

export default c_footer;