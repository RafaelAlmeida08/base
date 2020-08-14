import React, {Component} from 'react';
import Card from '../Card'
import Sidebar from '../Sidebar';
import './pagselecao.css';

class Pageselecao extends Component{

    constructor(props){
        super(props);
        this.state = {
            clickedPlan: []
        };
    }

    render(){
        return(
            <div id="container">
                <Sidebar />
                <div id="PagSelecao">
                    <div id="pageselecao-header">
                        <h1>Saúde</h1>
                        <hr/>
                        <div id="search">
                            <span>
                                <img src={require('../images/search.svg')} alt="search"></img>
                            </span>
                            <input type="text" placeholder="Pesquisa..." aria-placeholder="Pesquisa"/>
                        </div>
                    </div>
                    <Card clickedPlan={this.state.clickedPlan} />
                </div>
            </div>
        );
    }
}

export default Pageselecao;