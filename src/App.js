import React, { Component } from 'react'; 
import { Link, Route } from 'react-router-dom'; 
 
import Home from './r_home'; 

class App extends Component { 
  render() { 
  return ( 
  <div>            
      <div>
        <Route path="/" component={Home}/>         
      </div> 
</div> 
); 
} 
} 
export default App;
