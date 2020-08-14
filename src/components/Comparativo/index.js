import React, {Component} from 'react';
import CardPlano from '../CardPlano';
import Page3 from '../Page3';
import './comparativo.css';
import linkGenerator from './../../linkGenerator'
import PDFComparativo from '../PDFComparativo';
import { PDFDownloadLink } from '@react-pdf/renderer';

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
        this.compartilhar = this.compartilhar.bind(this);    
    }

    renderCardPlano() {
        console.log(this.props.planos)
        if(this.props.planos.length > 0) {
            console.log(this.props.planos.length)
            return this.props.planos.map(planoInfo => (
                <CardPlano plano={planoInfo} passapage3={this.maisinformacoes} range={this.props.range}/>
            )) 
        }
    }

    compartilharWpp() {

        console.log(this.props.planos)

       let numberFormated = this.props.telefone.toString().match(/\d/g)

        let number = `55${numberFormated.join("")}`

        let linkWpp = `https://wa.me/${number}?text=`
        
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

        document.getElementById('btn-1').style.display = '';

    }

    maisinformacoes(plano){       
       this.setState({data2: plano});
    }

    compartilhar() {
        var wrapperOpt = document.getElementById('wrapper-opt').style.display;
        
        if (wrapperOpt === 'none') {
            document.getElementById('wrapper-opt').style.display = 'flex';
        } else {
            document.getElementById('wrapper-opt').style.display = 'none';
        }
    }

    render() {
        return(
            <div id="comparativo">               
                <Page3
                    plano={this.state.data2}
                />
                <div id="header-comparativo">
                    <h1>Comparativo</h1>                
                    <div id="wrapper-opt">
                        <div className="opt">
                            <div className="opt-icon">
                                <img src={require('../images/pdf.svg')} alt="PDF" />
                            </div>
                            <div className="opt-text">
                                
                            </div>
                        </div>
                        <div 
                            className="opt" 
                            onClick={this.compartilharWpp}
                        >
                            <div className="opt-icon">
                                <img src={require('../images/whatsapp.svg')} alt="Whatsapp" />
                            </div>
                            <div className="opt-text">
                                Whatsapp
                            </div>
                        </div>
                    </div>
                    <span
                        id="btn-share" 
                        onClick={this.compartilhar}
                    >
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
                </div>
            </div>
        );
    }
}

export default Comparativo;