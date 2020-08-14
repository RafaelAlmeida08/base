import React, {Component} from 'react';
import Card from '../Card'
import Sidebar from '../Sidebar';
import './pagselecao.css';
import data from '../../jsonformatter.json';

class Pageselecao extends Component{

    constructor(props){
        super(props);
        this.state = {
            clickedPlan: [],
               
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
                            <select>
                            {
                                data.tbl_entidade.length > 0 ? 
                                data.tbl_entidade.map((index) => 
                                    <option value={index.codigo_codemp}>
                                        {index.nome}
                                    </option>
                                    ) : <option>Nenhuma cidade cadastrada</option>
                            }
                            </select>
                        </div>
                    </div>
                    <Card clickedPlan={this.state.clickedPlan} telefone={this.props.telefone} />
                </div>
            </div>
        );
    }
}

export default Pageselecao;