import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Comparativo from './components/Comparativo';
import Pageselecao from './components/Pageselecao';
import './global.css'

class App extends Component{


  render(){
    return(
      <BrowserRouter>        
        <Switch>         
          <Route exact path="/" component={Comparativo}/>
        </Switch>      
      </BrowserRouter>
    );
  }
}

export default App;
