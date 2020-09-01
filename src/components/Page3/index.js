import React, {Component} from 'react';
import './page3.css';
import Email from '../Email';
import PDF from '../PDFInformações';
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
        this.dadosContato            = this.dadosContato.bind(this);
        this.dadosPlanos             = this.dadosPlanos.bind(this);
        this.redesSP                 = this.redesSP.bind(this); 
        this.redesBA                 = this.redesBA.bind(this); 
        this.redesDF                 = this.redesDF.bind(this); 
        this.showRedes               = this.showRedes.bind(this); 
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
    
    redesSP(plano) {
        var redes = [];
        if(plano.includes("Estilo")) {
            redes.push.apply(redes, [
                {
                    hospital: "Hosp. Beneficência Portuguesa | São Joaquim",
                    regiao: "Sul",
                    municipio: "São Paulo"
                },
                {
                    hospital: "Hosp. LeForte",
                    regiao: "Oeste",
                    municipio: "São Paulo" 
                }
            ]);
        } else if(plano.includes("Absoluto")) {
            redes.push.apply(redes, [
                {
                    hospital: "Hosp. Beneficência Portuguesa | São Joaquim",
                    regiao: "Sul",
                    municipio: "São Paulo"
                },
                {
                    hospital: "Hosp. LeForte",
                    regiao: "Oeste",
                    municipio: "São Paulo" 
                },
                {
                    hospital: "Hosp. e Mat. Santa Joana",
                    regiao: "Sul",
                    municipio: "São Paulo"
                },
                {
                    hospital: "Hosp. São Camilo | Ipiranga",
                    regiao: "Sul",
                    municipio: "São Paulo"
                },
                {
                    hospital: "Hosp. São Camilo | Santana",
                    regiao: "Norte",
                    municipio: "São Paulo"
                }
            ]);
        } else if (plano.includes("Superior")) {
            redes.push.apply(redes, [
                {
                    hospital: "Hosp. Beneficência Portuguesa | São Joaquim",
                    regiao: "Sul",
                    municipio: "São Paulo"
                },
                {
                    hospital: "Hosp. LeForte",
                    regiao: "Oeste",
                    municipio: "São Paulo" 
                },
                {
                    hospital: "Hosp. e Mat. Santa Joana",
                    regiao: "Sul",
                    municipio: "São Paulo"
                },
                {
                    hospital: "Hosp. São Camilo | Ipiranga",
                    regiao: "Sul",
                    municipio: "São Paulo"
                },
                {
                    hospital: "Hosp. São Camilo | Santana",
                    regiao: "Norte",
                    municipio: "São Paulo"
                },
                {
                    hospital: "Hosp. Infantil Sabará",
                    regiao: "Oeste",
                    municipio: "São Paulo"
                },
                {
                    hospital: "Hosp. Santa Catarina",
                    regiao: "Centro",
                    municipio: "São Paulo"
                },
                {
                    hospital: "Hosp. Camilo Pompéia",
                    regiao: "Oeste",
                    municipio: "São Paulo"
                }
            ]);
        } else if (plano.includes("Executivo")) {
            redes.push.apply(redes, [
                {
                    hospital: "Hosp. Beneficência Portuguesa | São Joaquim",
                    regiao: "Sul",
                    municipio: "São Paulo"
                },
                {
                    hospital: "Hosp. LeForte",
                    regiao: "Oeste",
                    municipio: "São Paulo" 
                },
                {
                    hospital: "Hosp. e Mat. Santa Joana",
                    regiao: "Sul",
                    municipio: "São Paulo"
                },
                {
                    hospital: "Hosp. São Camilo | Ipiranga",
                    regiao: "Sul",
                    municipio: "São Paulo"
                },
                {
                    hospital: "Hosp. São Camilo | Santana",
                    regiao: "Norte",
                    municipio: "São Paulo"
                },
                {
                    hospital: "Hosp. Infantil Sabará",
                    regiao: "Oeste",
                    municipio: "São Paulo"
                },
                {
                    hospital: "Hosp. Santa Catarina",
                    regiao: "Centro",
                    municipio: "São Paulo"
                },
                {
                    hospital: "Hosp. Camilo Pompéia",
                    regiao: "Oeste",
                    municipio: "São Paulo"
                },
                {
                    hospital: "Hosp. Israelita Albert Einstein | Unidade Morumbi",
                    regiao: "Sul",
                    municipio: "São Paulo"
                },
                {
                    hospital: "Hosp. Sirio-Libanês",
                    regiao: "Sul",
                    municipio: "São Paulo"
                }
            ]);
        }

        return this.showRedes(redes);
    }

    redesBA(plano) {
        var redes = [];
        if (plano.includes("Classico Reconcavo") || plano.includes("Clássico Reconcavo")) {
            redes.push.apply(redes, [
                {
                    hospital: "Hosp. Unimed de Feira de Santana",
                    regiao: "Caseb",
                    municipio: "Feira de Santana"
                },
                {
                    hospital: "Hospital Incar",
                    regiao: "Centro",
                    municipio: "Santo Antonio de Jesus"
                }
            ]);
        } else if (plano.includes("Clássico Baixo Sul") || plano.includes("Classico Baixo Sul")) {
            redes.push.apply(redes, [
                {
                    hospital: "Sta. Casa de Misericórdia de Ilhéus",
                    regiao: "Centro",
                    municipio: "Ilhéus"
                }, 
                {
                    hospital: "Hosp. Calixto Midjei Filho",
                    regiao: "Pontalzinho",
                    municipio: "Itabuna"
                }
            ]);
        } else if (plano.includes("Classico Salvador")) {
            redes.push.apply(redes, [
                {
                    hospital: "Hosp. da Sagrada Familia",
                    regiao: "Bonfim",
                    municipio: "Salvador"
                }, 
                {
                    hospital: "Hosp. da Cidade",
                    regiao: "Caixa D'Agua",
                    municipio: "Salvador"
                }
            ])
        } else if (plano.includes("Estilo")) {
            redes.push.apply(redes, [
                {
                    hospital: "Hosp. Unimed de Feira de Santana",
                    regiao: "Caseb",
                    municipio: "Feira de Santana"
                },
                {
                    hospital: "Hospital Incar",
                    regiao: "Centro",
                    municipio: "Santo Antonio de Jesus"
                },
                {
                    hospital: "Sta. Casa de Misericórdia de Ilhéus",
                    regiao: "Centro",
                    municipio: "Ilhéus"
                }, 
                {
                    hospital: "Hosp. Calixto Midjei Filho",
                    regiao: "Pontalzinho",
                    municipio: "Itabuna"
                },
                {
                    hospital: "Hosp. da Sagrada Familia",
                    regiao: "Bonfim",
                    municipio: "Salvador"
                }, 
                {
                    hospital: "Hosp. da Cidade",
                    regiao: "Caixa D'Agua",
                    municipio: "Salvador"
                },
                {
                    hospital: "Hosp. da Bahia",
                    regiao: "Pituba",
                    municipio: "Salvador"
                },
                {
                    hospital: "Hosp. Jorge Valente",
                    regiao: "Federação",
                    municipio: "Salvador"
                },
                {
                    hospital: "Hosp. Santa Izabel",
                    regiao: "Nazare",
                    municipio: "Salvador"
                }
            ])
        } else if (plano.includes("Absoluto")) {
            redes.push.apply(redes, [
                {
                    hospital: "Hosp. Unimed de Feira de Santana",
                    regiao: "Caseb",
                    municipio: "Feira de Santana"
                },
                {
                    hospital: "Hospital Incar",
                    regiao: "Centro",
                    municipio: "Santo Antonio de Jesus"
                },
                {
                    hospital: "Sta. Casa de Misericórdia de Ilhéus",
                    regiao: "Centro",
                    municipio: "Ilhéus"
                }, 
                {
                    hospital: "Hosp. Calixto Midjei Filho",
                    regiao: "Pontalzinho",
                    municipio: "Itabuna"
                },
                {
                    hospital: "Hosp. da Sagrada Familia",
                    regiao: "Bonfim",
                    municipio: "Salvador"
                }, 
                {
                    hospital: "Hosp. da Cidade",
                    regiao: "Caixa D'Agua",
                    municipio: "Salvador"
                },
                {
                    hospital: "Hosp. da Bahia",
                    regiao: "Pituba",
                    municipio: "Salvador"
                },
                {
                    hospital: "Hosp. Jorge Valente",
                    regiao: "Federação",
                    municipio: "Salvador"
                },
                {
                    hospital: "Hosp. Santa Izabel",
                    regiao: "Nazare",
                    municipio: "Salvador"
                },
                {
                    hospital: "Hosp. São Rafael",
                    regiao: "Pau de Lima",
                    municipio: "Salvador"
                },
                {
                    hospital: "Hosp. Clima",
                    regiao: "Candeias",
                    municipio: "Candeias"
                }
            ])
        } else if (plano.includes("Superior")) {
            redes.push.apply(redes, [
                {
                    hospital: "Hosp. Unimed de Feira de Santana",
                    regiao: "Caseb",
                    municipio: "Feira de Santana"
                },
                {
                    hospital: "Hospital Incar",
                    regiao: "Centro",
                    municipio: "Santo Antonio de Jesus"
                },
                {
                    hospital: "Sta. Casa de Misericórdia de Ilhéus",
                    regiao: "Centro",
                    municipio: "Ilhéus"
                }, 
                {
                    hospital: "Hosp. Calixto Midjei Filho",
                    regiao: "Pontalzinho",
                    municipio: "Itabuna"
                },
                {
                    hospital: "Hosp. da Sagrada Familia",
                    regiao: "Bonfim",
                    municipio: "Salvador"
                }, 
                {
                    hospital: "Hosp. da Cidade",
                    regiao: "Caixa D'Agua",
                    municipio: "Salvador"
                },
                {
                    hospital: "Hosp. da Bahia",
                    regiao: "Pituba",
                    municipio: "Salvador"
                },
                {
                    hospital: "Hosp. Jorge Valente",
                    regiao: "Federação",
                    municipio: "Salvador"
                },
                {
                    hospital: "Hosp. Santa Izabel",
                    regiao: "Nazare",
                    municipio: "Salvador"
                },
                {
                    hospital: "Hosp. São Rafael",
                    regiao: "Pau de Lima",
                    municipio: "Salvador"
                },
                {
                    hospital: "Hosp. Clima",
                    regiao: "Candeias",
                    municipio: "Candeias"
                },
                {
                    hospital: "Hosp. Português",
                    regiao: "Graça",
                    municipio: "Salvador"
                },
                {
                    hospital: "SOKIDS",
                    regiao: "Centro",
                    municipio: "Lauro de Freitas"
                }
            ])
        } else if (plano.includes("Executivo")) {
            redes.push.apply(redes, [
                {
                    hospital: "Hosp. Unimed de Feira de Santana",
                    regiao: "Caseb",
                    municipio: "Feira de Santana"
                },
                {
                    hospital: "Hospital Incar",
                    regiao: "Centro",
                    municipio: "Santo Antonio de Jesus"
                },
                {
                    hospital: "Sta. Casa de Misericórdia de Ilhéus",
                    regiao: "Centro",
                    municipio: "Ilhéus"
                }, 
                {
                    hospital: "Hosp. Calixto Midjei Filho",
                    regiao: "Pontalzinho",
                    municipio: "Itabuna"
                },
                {
                    hospital: "Hosp. da Sagrada Familia",
                    regiao: "Bonfim",
                    municipio: "Salvador"
                }, 
                {
                    hospital: "Hosp. da Cidade",
                    regiao: "Caixa D'Agua",
                    municipio: "Salvador"
                },
                {
                    hospital: "Hosp. da Bahia",
                    regiao: "Pituba",
                    municipio: "Salvador"
                },
                {
                    hospital: "Hosp. Jorge Valente",
                    regiao: "Federação",
                    municipio: "Salvador"
                },
                {
                    hospital: "Hosp. Santa Izabel",
                    regiao: "Nazare",
                    municipio: "Salvador"
                },
                {
                    hospital: "Hosp. São Rafael",
                    regiao: "Pau de Lima",
                    municipio: "Salvador"
                },
                {
                    hospital: "Hosp. Clima",
                    regiao: "Candeias",
                    municipio: "Candeias"
                },
                {
                    hospital: "Hosp. Português",
                    regiao: "Graça",
                    municipio: "Salvador"
                },
                {
                    hospital: "SOKIDS",
                    regiao: "Centro",
                    municipio: "Lauro de Freitas"
                },
                {
                    hospital: "Hosp. Aliança",
                    regiao: "Rio Vermelho",
                    municipio: "Salvador"
                }
            ])
        }

        return this.showRedes(redes);
    }

    redesDF(plano) {
        var redes = [];
        if (plano.includes("Clássico")) {
            redes.push.apply(redes, [
                {
                    hospital: "Hosp. Santa Helena",
                    regiao: "Asa Norte",
                    municipio: "Brasília"
                },
                {
                    hospital: "Hob Brasília",
                    regiao: "Asa Sul",
                    municipio: "Brasília"
                }
            ])
        } else if (plano.includes("Estilo")) {
            redes.push.apply(redes, [
                {
                    hospital: "Hosp. Santa Helena",
                    regiao: "Asa Norte",
                    municipio: "Brasília"
                },
                {
                    hospital: "Hob Brasília",
                    regiao: "Asa Sul",
                    municipio: "Brasília"
                },
                {
                    hospital: "Hosp. Santa Marta",
                    regiao: "Taguatinga",
                    municipio: "Brasília"
                }, 
                {
                    hospital: "Hosp. São Mateus",
                    regiao: "Cruzeiro",
                    municipio: "Brasília"
                }
            ])
        } else if (plano.includes("Absoluto")) {
            redes.push.apply(redes, [
                {
                    hospital: "Hosp. Santa Helena",
                    regiao: "Asa Norte",
                    municipio: "Brasília",
                },
                {
                    hospital: "Hob Brasília",
                    regiao: "Asa Sul",
                    municipio: "Brasília"
                },
                {
                    hospital: "Hosp. Santa Marta",
                    regiao: "Taguatinga",
                    municipio: "Brasília"
                }, 
                {
                    hospital: "Hosp. São Mateus",
                    regiao: "Cruzeiro",
                    municipio: "Brasília"
                },
                {
                    hospital: "Hosp. Daher Lago Sul",
                    regiao: "Lago Sul",
                    municipio: "Brasília"
                }, 
                {
                    hospital: "Hosp. Alvorda de Brasília",
                    regiao: "Asa Sul",
                    municipio: "Brasília"
                },
                {
                    hospital: "Hosp. do Coração do Brasil",
                    regiao: "Asa Sul",
                    municipio: "Brasília"
                }
            ])
        } else if (plano.includes("Superior")) {
            redes.push.apply(redes, [
                {
                    hospital: "Hosp. Santa Helena",
                    regiao: "Asa Norte",
                    municipio: "Brasília",
                },
                {
                    hospital: "Hob Brasília",
                    regiao: "Asa Sul",
                    municipio: "Brasília"
                },
                {
                    hospital: "Hosp. Santa Marta",
                    regiao: "Taguatinga",
                    municipio: "Brasília"
                }, 
                {
                    hospital: "Hosp. São Mateus",
                    regiao: "Cruzeiro",
                    municipio: "Brasília"
                },
                {
                    hospital: "Hosp. Daher Lago Sul",
                    regiao: "Lago Sul",
                    municipio: "Brasília"
                }, 
                {
                    hospital: "Hosp. Alvorda de Brasília",
                    regiao: "Asa Sul",
                    municipio: "Brasília"
                },
                {
                    hospital: "Hosp. do Coração do Brasil",
                    regiao: "Asa Sul",
                    municipio: "Brasília"
                },
                {
                    hospital: "Hosp. Brasília",
                    regiao: "Lago Sul",
                    municipio: "Brasília"
                },
                {
                    hospital: "Prontonorte",
                    regiao: "Asa Norte",
                    municipio: "Brasília"
                }
            ])
        } else if (plano.includes("Executivo")) {
            redes.push.apply(redes, [
                {
                    hospital: "Hosp. Santa Helena",
                    regiao: "Asa Norte",
                    municipio: "Brasília",
                },
                {
                    hospital: "Hob Brasília",
                    regiao: "Asa Sul",
                    municipio: "Brasília"
                },
                {
                    hospital: "Hosp. Santa Marta",
                    regiao: "Taguatinga",
                    municipio: "Brasília"
                }, 
                {
                    hospital: "Hosp. São Mateus",
                    regiao: "Cruzeiro",
                    municipio: "Brasília"
                },
                {
                    hospital: "Hosp. Daher Lago Sul",
                    regiao: "Lago Sul",
                    municipio: "Brasília"
                }, 
                {
                    hospital: "Hosp. Alvorda de Brasília",
                    regiao: "Asa Sul",
                    municipio: "Brasília"
                },
                {
                    hospital: "Hosp. do Coração do Brasil",
                    regiao: "Asa Sul",
                    municipio: "Brasília"
                },
                {
                    hospital: "Hosp. Brasília",
                    regiao: "Lago Sul",
                    municipio: "Brasília"
                },
                {
                    hospital: "Prontonorte",
                    regiao: "Asa Norte",
                    municipio: "Brasília"
                },
                {
                    hospital: "Hosp. Sírio-Libanês Brasília",
                    regiao: "Asa Sul",
                    municipio: "Brasília"
                }
            ])
        }

        return this.showRedes(redes);
    }

    showRedes(redes) {
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

    redes() {
        var uf = this.props.contato.praca ? this.props.contato.praca : "";
        var plano = this.props.plano.produto ? this.props.plano.produto : "" ;
        if (uf.includes("SP")) {
            return this.redesSP(plano);            
        } else if (uf.includes("BA")) {
            return this.redesBA(plano);
        } else if (uf.includes("DF")) {
            return this.redesDF(plano);
        }
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
                        {this.redes()}
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