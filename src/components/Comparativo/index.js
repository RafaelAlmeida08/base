import React, {Component} from 'react';
import CardPlano from '../CardPlano';
import Page3 from '../Page3';
import './comparativo.css';
import linkGenerator from './../../linkGenerator'


class Comparativo extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
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

        this.renderCardPlano = this.renderCardPlano.bind(this);
        this.pageselecao = this.pageselecao.bind(this);
        this.maisinformacoes = this.maisinformacoes.bind(this);      
        this.compartilharWpp = this.compartilharWpp.bind(this);      
    }

    renderCardPlano() {
        console.log(this.props.planos)
        if(this.props.planos.length > 0) {
            console.log(this.props.planos.length)
            return this.props.planos.map(planoInfo => (
                <CardPlano plano={planoInfo} passapage3={this.maisinformacoes}/>
            )) 
        }
    }

    compartilharWpp() {

        let linkWpp = `https://wa.me/5521973049219?text=`
        
        linkGenerator(this.props.planos).then(r => {
            let msg = escape(`Para visualizar seu comparativo, por favor acesse: ${r}`)
            window.open(`${linkWpp}${msg}`);
        })
    }

    pageselecao() {
        var wrapperCards = document.getElementById('wrapper-cards');
        wrapperCards.style.display = 'initial';

        var sidebar = document.getElementById('sidebar');
        sidebar.style.display = 'flex';

        var header = document.getElementById('pageselecao-header');
        header.style.display = 'initial';

        var pageselecao = document.getElementById('PagSelecao');
        pageselecao.style.width = '85%';
        pageselecao.style.padding = '50px';
        
        var wrapperComparativo = document.getElementById('wrapper-comparativo');
        wrapperComparativo.style.display = 'none'

    }

    maisinformacoes(plano){       
       this.setState({data2: plano});
    }

    render() {
        return(
            <div id="comparativo">               
                <Page3 nome={this.state.data2['nome']} total={this.state.data2['total']} 
                       modalidade={this.state.data2['modalidade']}/>
                <div id="header-comparativo">
                    <h1>Comparativo</h1>
                    <span>
                        <img src={require('../images/mais.svg')} alt="Mais" />
                    </span>
                </div>
                <hr />
                <div id="group-cardplano">
                    {
                        this.renderCardPlano()
                    }
                </div>
                <div id="footer-comparativo">
                    <button 
                        className="btn-voltar" 
                        id="btn-voltar" 
                        onClick={this.pageselecao}
                    >
                        Voltar
                    </button>
                    <button 
                        className="btn-voltar" 
                        onClick={this.compartilharWpp}
                    >
                        Compartilhar wpp
                    </button>
                </div>
            </div>
        );
    }
}

export default Comparativo;