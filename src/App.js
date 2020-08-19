import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Page1 from './components/Page1';
import Card from './components/Card';
import Pagecli from './components/PageCli';
import Pageselecao from './components/Pageselecao';
import './global.css';




class App extends Component{

  render(){
  
    return(      
      <BrowserRouter basename="/">
        <Switch>             
          <Route exact path="/" component={Page1}/>

          <Route path="/pagecli/:data" component={Pagecli}/>

          <Route path="*">
            <h2>Pagina não encontrada</h2>
          </Route>

        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
