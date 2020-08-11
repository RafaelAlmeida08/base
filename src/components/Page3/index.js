import React, {Component} from 'react';
import './page3.css';
import Email from '../Email';
import PDF from '../PDF';
import { PDFDownloadLink } from '@react-pdf/renderer';


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
        this.dados                   = this.dados.bind(this);
    }

    componentDidMount(){
        document.getElementById('opt').style.display        = 'none';
        document.getElementById('optmobile').style.display  = 'none';
       
       
    }

    dadoshospitalares(){
        var a = document.getElementById('dadoshospitalares');
        if(a.style.display===''){
            document.getElementById('dadoshospitalares').style.display  = 'initial';
            document.getElementById('rightarrow1').style.display        = 'none';
            document.getElementById('downarrow1').style.display         = 'block'
            document.getElementById('dropdown2').style.top              = '178%';
        }else{
            document.getElementById('dadoshospitalares').style.display  = '';
            document.getElementById('rightarrow1').style.display        = 'block';
            document.getElementById('downarrow1').style.display         = 'none'
            document.getElementById('dropdown2').style.top              = '154%';
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

    dados(dados){

    }

    render(){
        return(
            <div id="TerceiroConteudo">
                <div id="page3">
                    <div className="page3-header">
                        <img src={this.props.plano.logo} alt="logo"/>
                    </div>
                    <div className="meio">
                        <div className="linha geral">
                            <div className="titulo">
                                <label>Geral</label>
                            </div>
                            <div className="conteudo conteudo-duplo">
                                <div className="conteudo1">
                                <span>{this.props.plano.nome}</span>
                                </div>
                                <div className="conteudo2">
                                    <h3></h3>
                                </div>                                    
                            </div>
                        </div>
                        <div className="linha modalidade">
                            <div className="titulo">
                                <label>Modalidade</label>
                            </div>
                            <div className="conteudo">
                                <span>{this.props.plano.modalidade}</span>
                            </div>
                        </div>
                        <div className="linha acomodacao">
                            <div className="titulo">
                                <label>Acomodação</label>
                            </div>
                            <div className="conteudo">
                                <span>Apartamento</span>
                            </div>
                        </div>
                        <div className="linha coparticipacao">
                            <div className="titulo">
                                <label>Coparticipação</label>
                            </div>
                            <div className="conteudo">
                                <span>Não</span>
                            </div>
                        </div>
                        <div className="linha hospitalares">
                            <div className="titulo">
                                <label>Hospitalares</label>
                            </div>
                            <div className="conteudo conteudo-duplos">
                                <div className="conteudo1">
                                    <span>144 hospitais</span>
                                </div>
                                <div className="conteudo2">
                                    <span>28 Laboratórios</span>
                                </div>
                            </div>
                                <div className="dropdown" id="dropdown1">
                                    <i id="rightarrow1" onClick={this.dadoshospitalares} className="arrow right"></i>
                                    <i id="downarrow1" onClick={this.dadoshospitalares} className="arrow down"></i>
                                </div>
                        </div>
                            <div id="dadoshospitalares" className="linha hospitalares">
                                <h1>Algo aqui</h1>
                            </div>
                        <div className="linha valores">
                            <div className="titulo">
                                <label>Valores</label>
                            </div>
                            <div className="conteudo">
                                <span>Algo aqui</span>
                            </div>
                            <div className="dropdown" id="dropdown2">
                                <i id="rightarrow2" onClick={this.dadosvalores} className="arrow right"></i>
                                <i id="downarrow2" onClick={this.dadosvalores} className="arrow down"></i>
                            </div>
                        </div>
                            <div id="dadosvalores" className="linha valores">
                                <h1>algo</h1>
                            </div>
                    </div>
                    <div className="footer">
                        <div className="conteudo-valor">
                            <div className="total">
                                <span>Total</span>
                            </div>
                            <div className="valor">
                                <h2>R$ {this.props.plano.total}</h2>
                            </div>
                         </div>
                        <div className="dados" id="desktop">
                            <div id="opt">
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
                                        {this.props.plano.logo
                                            ? <PDFDownloadLink document={<PDF data={this.props.plano}/>} fileName="plano.pdf">
                                                {({ blob, url, loading, error }) => (loading ? 'Carregando documento...' : 'PDF')}
                                            </PDFDownloadLink> 
                                        : "" }
                                        <span onClick={this.imprimir}>Imprimir</span>
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