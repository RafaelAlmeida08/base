import React, {Component} from 'react';
import './page3.css';
import Email from '../Email';
import PDF from '../PDFInformações';
import { PDFDownloadLink } from '@react-pdf/renderer';
import rede from '../../redes.json';

class Page3 extends Component{
    constructor(props){
        super(props);
        this.state = {
            plano: {
                'nome' : 'teste',
                'imagem' : 'https://i.imgur.com/RDFaRz2.png'
            }
        };
        this.dadoshospitalares       = this.dadoshospitalares.bind(this); 
        this.dadosvalores            = this.dadosvalores.bind(this);
        this.optcompartilhar         = this.optcompartilhar.bind(this); 
        this.enviaremail             = this.enviaremail.bind(this);
        this.compartilhar            = this.compartilhar.bind(this);
        this.imprimir                = this.imprimir.bind(this);
        this.informacoes             = this.informacoes.bind(this);
        this.optcompartilharmobile   = this.optcompartilharmobile.bind(this);
        this.dadosContato            = this.dadosContato.bind(this);
        this.dadosPlanos             = this.dadosPlanos.bind(this);
        this.showRedes               = this.showRedes.bind(this);
        this.getRedesSP              = this.getRedesSP.bind(this);
        this.getRedesBA              = this.getRedesBA.bind(this);
        this.getRedesDF              = this.getRedesDF.bind(this); 
    }

    componentDidMount(){
        document.getElementById('opt').style.display        = 'none';
        document.getElementById('optmobile').style.display  = 'none';
       
       
    }

    dadoshospitalares(){
        var a = document.getElementById('dadoshospitalares');
        if(a.style.display === ''){
            document.getElementById('dadoshospitalares').style.display  = 'initial';
            document.getElementById('rightarrow1').style.display        = 'none';
            document.getElementById('downarrow1').style.display         = 'block'
        }else{
            document.getElementById('dadoshospitalares').style.display  = '';
            document.getElementById('rightarrow1').style.display        = 'block';
            document.getElementById('downarrow1').style.display         = 'none'
        }


    }
 
    dadosvalores(){
        var a = document.getElementById('dadosvalores');
        if(a.style.display===''){
            document.getElementById('dadosvalores').style.display   = 'initial';
            document.getElementById('rightarrow2').style.display    = 'none';
            document.getElementById('downarrow2').style.display     = 'block'
        }else{
            document.getElementById('dadosvalores').style.display   = '';
            document.getElementById('rightarrow2').style.display    = 'block';
            document.getElementById('downarrow2').style.display     = 'none'
        }
    }

    optcompartilhar(){
        var x = document.getElementById('opt').style.display;
        if (x === 'none'){
           document.getElementById('opt').style.display = 'initial';
        }else{
           document.getElementById('opt').style.display = 'none';
        }
    }

    optcompartilharmobile(){
        var x = document.getElementById('optmobile').style.display;
        if (x === 'none'){
           document.getElementById('optmobile').style.display='initial';
        }else{
           document.getElementById('optmobile').style.display='none';
        }
    }

    enviaremail(){       
        var modal = document.getElementById("Modalemail");
        modal.style.display = 'block';
        var span = document.getElementsByClassName("fecharmodal")[0];

        span.onclick = function() {
            modal.style.display = "none";
          }
    }

    compartilhar(){
        alert('Abre Compartilhar');
    }

    imprimir(){

    }

    informacoes(){
        document.getElementById('group-cardplano').style.display = '';
        document.getElementById('header-comparativo').style.display = '';
        document.getElementById('btn-voltar').style.display = '';        
        document.getElementById('page3').style.display='none';
    }

    dadosContato(dados){
        var obj = {
            nome: dados.nome,
            telefone: dados.telefone,
            cidade: dados.cidade,
            consultor: dados.consultor,
            telefone_consultor: dados.telefone_consultor,
            celular_consultor: dados.celular_consultor,
            email_consultor: dados.email_consultor,
            praca: dados.praca
        }
        
        return obj;
    }

    dadosPlanos(dados) {
        var obj = {
            produto: dados.produto,
            registroans: dados.registroans,
            segmentacao: dados.segmentacao,
            abrangencia: dados.abrangencia,
            coparticipacao: dados.coparticipacao,
            acomodacao: dados.acomodacao,
            valor: dados.preco
        }

        return obj;
    }

    
    showRedes(plano) {
        var redes = this.getPlanoData(plano);
        if (redes.length > 0) {
            return (
                <>
                    <div className="linha hospitalares">
                    <div className="titulo">
                        <label>Rede Credenciada</label>
                    </div>
                        <div className="dropdown" id="dropdown1">
                            <i id="rightarrow1" onClick={this.dadoshospitalares} className="arrow right"></i>
                            <i id="downarrow1" onClick={this.dadoshospitalares} className="arrow down"></i>
                        </div>
                    </div>
                    <div id="dadoshospitalares" >
                        {redes.map((rede) => {
                            return <p>{rede.hospital} | {rede.regiao} | {rede.municipio}</p>
                        })}
                    </div>
                </>
            );
        }
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
        var praca = this.props.contato.praca ? this.props.contato.praca : "SP" ;
        var planoNome = plano ? plano : "Estilo";

        if (praca.includes("SP")) {
            var hospitais = this.getRedesSP(planoNome);
            var hospital = hospitais[0].hospitais;
        } else if (praca.includes("DF")) {
            var hospitais = this.getRedesDF(planoNome);
            var hospital = hospitais[0].hospitais;
        } else if (praca.includes("BA")) {
            var hospitais = this.getRedesBA(planoNome);
            var hospital = hospitais[0].hospitais;
        }

        return hospital;

    }

    render(){
        return(
            <div id="TerceiroConteudo">
                <div id="page3">
                    <div className="meio">
                        <div className="linha geral">
                            <div className="titulo">
                                <label>Geral</label>
                            </div>
                            <div className="conteudo conteudo-duplo">
                                <div className="conteudo1">
                                <span>{this.props.plano.produto}</span>
                                </div>
                                <div className="conteudo2">
                                </div>                                    
                            </div>
                        </div>
                        <div className="linha modalidade">
                            <div className="titulo">
                                <label>Segmentação</label>
                            </div>
                            <div className="conteudo">
                                <span>{this.props.plano.segmentacao}</span>
                            </div>
                        </div>
                        <div className="linha acomodacao">
                            <div className="titulo">
                                <label>Acomodação</label>
                            </div>
                            <div className="conteudo">
                                <span>{this.props.plano.acomodacao}</span>
                            </div>
                        </div>
                        <div className="linha coparticipacao">
                            <div className="titulo">
                                <label>Coparticipação</label>
                            </div>
                            <div className="conteudo">
                                <span>{this.props.plano.coparticipacao}</span>
                            </div>
                        </div>
                        {this.showRedes(this.props.plano.produto)}
                    </div>
                    <div className="footer">
                        <div className="conteudo-valor">
                            <div className="total">
                                <span>Total</span>
                            </div>
                            <div className="valor">
                                <h2>R$ {this.props.plano.preco}</h2>
                            </div>
                         </div>
                        <div className="dados" id="desktop">
                            <div id="opt">
                                {/*
                                <div className="opt1">
                                    <div className="icon">
                                        <img src={require('../images/email.svg')} alt="email"/>
                                    </div>
                                    <div className="name">
                                        <span onClick={this.enviaremail}>Enviar por e-mail</span>
                                    </div>
                                </div> 
                                <div className="opt1">
                                    <div className="icon">
                                        <img src={require('../images/compartilhar.svg')} alt="compartilhar"/>
                                    </div>
                                    <div className="name">
                                        <span onClick={this.compartilhar} >Compartilhar</span>
                                    </div>
                                </div>
                                <div className="opt1">
                                    <div className="icon">
                                        <img src={require('../images/imprimir.svg')} alt="imprimir"/>
                                    </div>
                                    <div className="name">
                                        <span onClick={this.imprimir}>Imprimir</span>
                                    </div>
                                </div>*/}
                                <div className="opt1">
                                    <div className="icon-info">
                                        <span className="icon opt-pdf"></span>
                                    </div>
                                    <div className="name">
                                        <span>
                                            {this.props.plano.preco != 0 ?
                                                 <PDFDownloadLink 
                                                        document={
                                                            <PDF 
                                                                plano={this.dadosPlanos(this.props.plano)}
                                                                dados={this.dadosContato(this.props.contato)} 
                                                                vidas={this.props.vidas}
                                                                hospitais={this.getPlanoData(this.props.plano.produto)}
                                                            />
                                                            } 
                                                        fileName="plano.pdf"
                                                    >
                                                    {({ blob, url, loading, error }) => (loading ? 'Carregando documento...' : 'PDF')}
                                                </PDFDownloadLink>
                                            : "" }
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="bullets" onClick={this.optcompartilhar}>
                                <img src={require('../images/share.png')} alt="bullets"/>
                            </div>
                            <div className="info">
                                <button onClick={this.informacoes} >Voltar</button>
                            </div>
                        </div>
                        <div className="dados" id="mobile"> 
                            <div className="info">
                                <button onClick={this.informacoes} >Voltar</button>
                            </div>                           
                            <div className="bullets" onClick={this.optcompartilharmobile}>
                                <img src={require('../images/share.png')} alt="bullets"/>
                            </div>                            
                            <div id="optmobile">
                            <div className="opt1">
                                <div className="icon-info">
                                        <span className="icon opt-pdf"></span>
                                </div>
                                <div className="name">
                                    <span>
                                        {this.props.plano.preco != 0 ?
                                            <PDFDownloadLink 
                                                document={
                                                    <PDF 
                                                        plano={this.dadosPlanos(this.props.plano)}
                                                        dados={this.dadosContato(this.props.contato)} 
                                                        vidas={this.props.vidas}
                                                        hospitais={this.getPlanoData(this.props.plano.produto)}
                                                    />
                                                } 
                                                fileName="plano.pdf"
                                            >
                                                {({ blob, url, loading, error }) => (loading ? 'Carregando documento...' : 'PDF')}
                                            </PDFDownloadLink>
                                            : "" }
                                    </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Email/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Page3;