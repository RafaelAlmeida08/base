import React, {Component} from 'react';
import {BrowserRouter, Switch, Route, useLocation} from 'react-router-dom';
import PageInicial from './components/PageInicial';
import Pagecli from './components/PageCli';
import './global.css';

var params = window.location.search.substring(1).split('&');

  class App extends Component{
  
    render(){
      return(
          <BrowserRouter>
  
            <Switch> 
              
              {params[0] == "" &&
                <Route exact path="/" component={PageInicial}/>
              }
              {params[0] != "" &&
                <Route path="/">
                  <Pagecli data={params[0]} />
                </Route>
              }
  
            </Switch>
          </BrowserRouter>
  
        );
    }
  }



export default App;
