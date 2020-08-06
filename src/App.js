import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Page2 from './components/Page2';
import Pageselecao from './components/Pageselecao';
import './global.css'

class App extends Component{


  render(){
    return(
      <BrowserRouter>        
        <Switch>
          <Route exact path="/" component={Pageselecao}/>
        </Switch>      
      </BrowserRouter>
    );
  }
}

export default App;
