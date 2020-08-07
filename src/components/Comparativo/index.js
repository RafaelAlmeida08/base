import React, {Component} from 'react';
import CardPlano from '../CardPlano';
import './comparativo.css';

class Comparativo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    nome: 'Ameno',
                    logo: '../images/planium.png',
                    total: '200.00'
                },
                {
                    nome: 'HBS',
                    logo: '../images/Ameno-Saúde.png',
                    total: '300.00'
                },
                {
                    nome: 'São Paulo',
                    total: '500.00'
                }
            ]
        };
    }

    render() {
        return(
            <div id="comparativo">
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
                            <CardPlano plano={planoInfo}/>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default Comparativo;