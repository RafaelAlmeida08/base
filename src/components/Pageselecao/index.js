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
            planos: []
        };

        this.planos = this.planos.bind(this);
        this.getDataCidade = this.getDataCidade.bind(this);
        this.getDataEntidade = this.getDataEntidade.bind(this);
    }

    getDataCidade() {
        let cod_ibge = this.props.contato.cidade;
        let cidade = data.tbl_cidade.filter((cidade) => {
            if(cidade.codigo_ibge == cod_ibge) {
                return cidade;
            }
        });

        return cidade;
    }

    getDataEntidade() {
        let codigo_entidade = document.getElementById('select-entidade').value;
        let entidade = data.tbl_entidade.filter((entidade) => {
            if (entidade.codemp == codigo_entidade) {
                return entidade;
            }
        })

        return entidade;
    }

    planos() {

        let cidade = this.getDataCidade();
        let entidade = this.getDataEntidade();

        let planos = cidade[0].btxplanos.filter((plano) => {
            if(entidade[0].btxplanos.includes(plano)) {
                return plano;
            }
        });

        let dataPlanos = planos.map((codPlano) => {
            return data.tbl_plano.filter((plano) => {
                if (plano.btxplano == codPlano) {
                    return plano;
                }
            })
        })

        console.log(dataPlanos);
        this.setState({planos: dataPlanos});

    }
    

    render(){
        return(
            <div id="container">               
                <Sidebar contato={this.props.contato}/>
                <div id="PagSelecao">
                    <div id="pageselecao-header">
                        <h1>Saúde</h1>                     
                        <hr/>
                        <div id="search">                           
                            <select id="select-entidade" onChange={this.planos}>
                                <option selected disabled>Selecione uma entidade...</option>
                            {
                                data.tbl_entidade.length > 0 ? 
                                data.tbl_entidade.map((index) => 
                                    <option id={index.codemp} value={index.codemp}>
                                        {index.nome}                                      
                                    </option>
                                    ) : <option>Nenhuma entidade cadastrada</option>
                            }
                            </select>
                        </div>
                    </div>
                    <Card 
                        clickedPlan={this.state.clickedPlan} 
                        telefone={this.props.telefone} 
                        planos={this.state.planos} 
                        range={this.props.range}/>
                </div>
            </div>
        );
    }
}

export default Pageselecao;