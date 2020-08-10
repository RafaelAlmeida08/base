import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Page1 from './components/Page1';
import Card from './components/Card';
import Pagecli from './components/PageCli';
import Pageselecao from './components/Pageselecao';
import linkGenerator from './linkGenerator';
import './global.css';

class App extends Component{

  render(){
    return(
      <BrowserRouter>
        <Switch>         
          <Route exact path="/" component={Pageselecao}/>

          <Route path="/pagecli/:data">
            <Pagecli/>
          </Route>

        </Switch>      
      </BrowserRouter>
    );
  }
}

export default App;
