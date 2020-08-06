import React, {Component} from 'react';
import Card from '../Card'
import Sidebar from '../Sidebar';
import './pagselecao.css';

class Pageselecao extends Component{

    constructor(props){
        super(props);
        this.state = {

        };
    }

    render(){
        return(
            <div id="container">
                <Sidebar />
                <div id="PagSelecao">
                    <Card/>
                </div>
            </div>
        );
    }
}

export default Pageselecao;