import React, {Component} from 'react';
import CardPlano from '../CardPlano';
import Page3 from '../Page3';
import './comparativo.css';
import linkGenerator from './../../linkGenerator'
import PDFComparativo from '../PDFComparativo';
import { PDFDownloadLink } from '@react-pdf/renderer';
import data from '../../jsonformatter.json';
import rede from '../../redes.json';

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
                    id: ''
                }
            ],
            planos: []
        };

        this.renderCardPlano = this.renderCardPlano.bind(this);
        this.pageselecao     = this.pageselecao.bind(this);
        this.maisinformacoes = this.maisinformacoes.bind(this);      
        this.compartilharWpp = this.compartilharWpp.bind(this);
        this.compartilhar    = this.compartilhar.bind(this);
        this.getTotal        = this.getTotal.bind(this);
        this.getPlanoData    = this.getPlanoData.bind(this);
        this.getRedesSP      = this.getRedesSP.bind(this);
        this.getRedesBA      = this.getRedesBA.bind(this);
        this.getRedesDF      = this.getRedesDF.bind(this);
    }

    getRedesSP(produto) {
        if (produto.includes("Estilo")) {
            return rede.SP.filter((rede) => {
                if (rede.nome == "Estilo") {
                    return rede.hospitais;
                }
            })
        } else if (produto.includes("Absoluto")) {
            return rede.SP.filter((rede) => {
                if (rede.nome == "Absoluto") {
                    return rede.hospitais;
                }
            })
        } else if (produto.includes("Superior")) {
            return rede.SP.filter((rede) => {
               if (rede.nome == "Superior") {
                    return rede.hospitais;
               } 
            })
        } else if (produto.includes("Exclusivo")) {
            return rede.SP.filter((rede) => {
                if (rede.nome == "Exclusivo") {
                    return rede.hospitais;
                }
            })
        } else {
            return []
        }
    }

    getRedesBA(produto) {
        if (produto.includes("Clássico Reconcavo")) {
            return rede.BA.filter((rede) => {
                if (rede.nome == "Clássico Reconcavo") {
                    return rede.hospitais;
                }
            })
        } else if (produto.includes("Clássico Baixo Sul")) {
            return rede.BA.filter((rede) => {
                if (rede.nome == "Clássico Baixo Sul") {
                    return rede.hospitais;
                }
            })
        } else if (produto.includes("Clássico Salvador")) {
            return rede.BA.filter((rede) => {
                if (rede.nome == "Clássico Salvador") {
                    return rede.hospitais;
                }
            })
        } else if (produto.includes("Estilo")) {
            return rede.BA.filter((rede) => {
                if (rede.nome == "Estilo") {
                    return rede.hospitais;
                }
            })
        } else if (produto.includes("Absoluto")) {
            return rede.BA.filter((rede) => {
                if (rede.nome == "Absoluto") {
                    return rede.hospitais;
                }
            });
        } else if (produto.includes("Superior")) {
            return rede.BA.filter((rede) => {
                if (rede.nome == "Superior") { 
                    return rede.hospitais;
                }    
            });
        } else if (produto.includes("Exclusivo")) {
            return rede.BA.filter((rede) => {
                if (rede.nome == "Exclusivo") { 
                    return rede.hospitais;
                }
            })
        } else {
            return []
        }
    }

    getRedesDF(produto) {
        if (produto.includes("Clássico")) {
            return rede.DF.filter((rede) => {
                if (rede.nome == "Clássico") {
                    return rede.hospitais;
                }
            })
        } else if (produto.includes("Estilo")) {
            return rede.DF.filter((rede) => {
                if (rede.nome == "Estilo") {
                    return rede.hospitais;
                }
            })
        } else if (produto.includes("Absoluto")) {
            return rede.DF.filter((rede) => {
                if (rede.nome == "Absoluto") {
                    return rede.hospitais;
                }
            })
        } else if (produto.includes("Superior")) {
            return rede.DF.filter((rede) => {
               if (rede.nome == "Superior") {
                    return rede.hospitais;
               } 
            })
        } else {
            return []
        }
    }

    getPlanoData(plano) {
        var praca = this.props.contato.praca;
        var planos = plano;

        planos.map((index) => {
            if (praca.includes("SP")) {
                var hospitais = this.getRedesSP(index.produto);
                if (hospitais.length > 0) {                    
                    index.hospitais = hospitais[0].hospitais;
                } else {
                    index.hospitais = hospitais;
                }
            } else if (praca.includes("DF")) {
                var hospitais = this.getRedesDF(index.produto);
                if (hospitais.length > 0) {
                    index.hospitais = hospitais[0].hospitais;
                } else {
                    index.hospitais = hospitais;
                }
                
            } else if (praca.includes("BA")) {
                var hospitais = this.getRedesBA(index.produto);
                if (hospitais.length > 0) {
                    index.hospitais = hospitais[0].hospitais;
                } else {
                    index.hospitais = hospitais;
                }
            }

        })
        console.log(planos);
        return planos;

    }

    getPlanos() {
        if(this.props.planos.length > 0) {
            let planos = this.props.planos;
            let total = 0;

            planos.map((index) => {
                total = this.getTotal(index.btxplano);
                index.preco = (total).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
            })
        }
    }

    renderCardPlano() {
        if(this.props.planos.length > 0) {
            let planos = this.props.planos;
            let total = 0;

            return planos.map((index) => {
                total = this.getTotal(index.btxplano);
                index.preco = (total).toLocaleString('pt-BR', { minimumFractionDigits: 2 });

                return <CardPlano 
                    plano={index} 
                    passapage3={this.maisinformacoes} 
                    range={this.props.range}
                    vidas={this.props.vidas}
                />
            })

        }
    }

    getTotal(plano) {
        let dataPlano = data.tbl_preco.filter((index) => {
            return index.btxplano == plano;
        });

        let total = 0;
        for (var [key, value] of Object.entries(this.props.range)) {
            switch (key) {
                case "00 a 18":
                    if (value > 0) {
                        total += dataPlano[0].preco[0] * value;
                    }
                    break;
                case "19 a 23":
                    if (value > 0) {
                        total += dataPlano[0].preco[1] * value;
                    }
                    break;
                case "24 a 28":
                    if (value > 0) {
                        total += dataPlano[0].preco[2] * value;
                    }
                    break;
                case "29 a 33":
                    if (value > 0) {
                        total += dataPlano[0].preco[3] * value;
                    }
                    break;
                case "34 a 38":
                    if (value > 0) {
                        total += dataPlano[0].preco[4] * value;
                    }
                    break;
                case "39 a 43": 
                    if (value > 0) {
                        total += dataPlano[0].preco[5] * value;
                    }
                    break;
                case "44 a 48":
                    if (value > 0) {
                        total += dataPlano[0].preco[6] * value;
                    }
                    break;
                case "49 a 53": 
                    if (value > 0) {
                        total += dataPlano[0].preco[7] * value;
                    }
                case "54 a 58":
                    if (value > 0) {
                        total += dataPlano[0].preco[8] * value;
                    }
                    break;
                case "59 ou +":
                    if (value > 0) {
                        total += dataPlano[0].preco[9] * value;
                    }
                default:
                    break;
            }
        }
        return total;
    }

    compartilharWpp() {

       let numberFormated = this.props.telefone.toString().match(/\d/g)

        let number = `55${numberFormated.join("")}`

        let linkWpp = `https://wa.me/${number}?text=`
        
        var data = {
            planos: this.props.planos,
            contato: {
                nome: this.props.contato.nome,
                praca: this.props.contato.praca,
                consultor: this.props.contato.consultor,
                telefone_consultor: this.props.contato.telefone_consultor,
                celular_consultor: this.props.contato.celular_consultor,
                email_consultor: this.props.contato.email_consultor
            },
            vidas: this.props.vidas
        };

        linkGenerator(data).then(r => {
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
                    contato={this.props.contato}
                    vidas={this.props.vidas}
                />
                <div id="header-comparativo">
                    <h1>Comparativo</h1>               
                    <div id="wrapper-opt">
                        <div 
                            className="opt" 
                            onClick={this.compartilharWpp}
                        >
                            <div className="opt-icon">
                                <span className="icon icon-wpp"></span>
                            </div>
                            <div className="opt-text">
                                Whatsapp
                            </div>
                        </div>
                        <div className="opt">
                            <div className="opt-icon">
                                <span className="icon icon-pdf"></span>
                            </div>
                            <div className="opt-text">
                            {this.props.planos.length > 0 && this.props.range
                                    ?   <PDFDownloadLink 
                                            document=
                                            {
                                                <PDFComparativo 
                                                    data={this.getPlanoData(this.props.planos)} 
                                                    range={this.props.range}
                                                    contato={this.props.contato}
                                                    vidas={this.props.vidas}
                                                />
                                            } 
                                            fileName="proposta.pdf" >
                                            {({ blob, url, loading, error }) => (loading ? 'Carregando documento...' : 'PDF')}
                                        </PDFDownloadLink> 
                                    : "" }
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