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
            planos: [],
            entidades: []
        };

        this.planos = this.planos.bind(this);
        this.getDataCidade = this.getDataCidade.bind(this);
        this.getDataEntidade = this.getDataEntidade.bind(this);
        this.entidades = this.entidades.bind(this);
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
            if (entidade.cnpj === codigo_entidade) {
                return entidade;
            }
        })

        return entidade;
    }

    entidades(e) {
        var btx_profid_sel = parseInt(e.target.value);
        var entidades = data.tbl_profissao.filter((profissao) => {
            if(profissao.btx_profid === btx_profid_sel) {
                return profissao.cnpjentidades;
            }
        });

        let entidadesOptions = [];
        entidades[0].cnpjentidades.map((entidade) => {
            data.tbl_entidade.map((entidadeTbl) => {
                console.log(entidade);
                console.log(entidadeTbl.cnpj);
                if (entidade === entidadeTbl.cnpj) {
                    entidadesOptions.push(entidadeTbl);
                }
            });
        });

        
        let select_entidade = document.getElementById('select-entidade');
        select_entidade.innerHTML = '';
        var option = document.createElement('option');
        option.disabled = true;
        option.selected = true;
        var optionText = document.createTextNode("Entidade");
        option.appendChild(optionText);
        select_entidade.appendChild(option);

        entidadesOptions.map((index) => {
            let option = document.createElement('option');
            option.value = index.cnpj;
            option.id = index.codemp;
            var optionText = document.createTextNode(index.abreviacao + " - " + index.nome);
            option.appendChild(optionText);
            select_entidade.appendChild(option);
        })

        var wrapper = document.getElementById('entidadeWrapper');
        wrapper.style.display = 'unset';
    }

    planos() {

        let cidade = this.getDataCidade();
        let entidade = this.getDataEntidade();

        let planos = cidade[0].btxplanos.filter((plano) => {
            if(entidade[0].btxplanos.includes(plano)) {
                return plano;
            }
        });

        let cnpj = document.getElementById('select-entidade').value;
        let dataPlanos = planos.map((codPlano) => {
            return data.tbl_plano.filter((plano) => {
                if (plano.btxplano == codPlano) {
                    plano.cnpj_entidade = cnpj;
                    return plano;
                }
            })
        })

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
                        <label>Selecione uma profissão:</label>
                        <div className="search">
                            <select id="select-profissao" onChange={(e) => this.entidades(e)}> 
                                <option selected disabled>Profissão</option>
                                {
                                    data.tbl_profissao.length > 0 ? 
                                    data.tbl_profissao.map((profissao) => (
                                        <option id={profissao.btx_profid} value={profissao.btx_profid}>
                                            {profissao.nome}
                                        </option>
                                    )) : <option>Nenhuma profissão cadastrada</option>
                                }
                            </select>
                        </div>
                        <div id="entidadeWrapper">
                            <label for="select-entidade">Selecione uma entidade:</label>  
                            <div className="search">                         
                                <select id="select-entidade" onChange={this.planos}>
                                </select>
                            </div>
                        </div>
                    </div>
                    <Card 
                        clickedPlan={this.state.clickedPlan} 
                        telefone={this.props.telefone} 
                        planos={this.state.planos}                  
                        range={this.props.range}
                        contato={this.props.contato}
                        vidas={this.props.vidas}
                    />
                </div>
            </div>
        );
    }
}

export default Pageselecao;