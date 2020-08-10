import React, {Component} from 'react';
import CardPlano from '../CardPlano';
import Page3 from '../Page3';
import './comparativo.css';

class Comparativo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    nome: 'Ameno',
                    logo: '../images/planos/1.png',
                    total: '200.00',
                    modalidade: 'Saúde Adesão',
                    id : 1
                },
                {
                    nome: 'HBS',
                    logo: '../images/Ameno-Saúde.png',
                    total: '300.00',
                    modalidade: '-',
                    id : 2
                },
                {
                    nome: 'São Paulo',
                    total: '500.00',
                    modalidade: '-',
                    id : 3
                }
            ],

            data2: [
                {
                    nome:'',
                    total: '',
                    logo: '',
                    modalidade: '',
                    logo:'',
                    id: ''
                }
            ]
        };
        this.maisinformacoes = this.maisinformacoes.bind(this);       
    }

    maisinformacoes(plano){       
       this.setState({data2: plano});
    }

    render() {
        return(
            <div id="comparativo">               
                <Page3 nome={this.state.data2['nome']} total={this.state.data2['total']} 
                       modalidade={this.state.data2['modalidade']} logo={this.state.data2['logo']}/>
                <div id="header-comparativo">
                    <h1>Comparativo</h1>
                    <span>
                        <img src={require('../images/mais.svg')} alt="Mais" />
                    </span>
                </div>
                <hr />
                <div id="group-cardplano">
                    {
                        this.state.data.map(planoInfo => (
                            <CardPlano plano={planoInfo} passapage3={this.maisinformacoes}/>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default Comparativo;