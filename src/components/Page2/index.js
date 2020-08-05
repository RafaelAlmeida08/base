import React, {Component} from 'react';
import Page3 from '../Page3';

class Page2 extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        };

        this.pagina1 = this.pagina1.bind(this);
    }

    pagina1(){
        document.getElementById('TerceiroConteudo').style.display = 'none';
        document.getElementById('SegundoConteudo').style.display = 'none';
        document.getElementById('PrimeiroConteudo').style.display  = 'initial';
    }

    pagina3(){
        document.getElementById('SegundoConteudo').style.display = 'none';
        document.getElementById('TerceiroConteudo').style.display = 'initial';
    }

    render(){
        return(
            <div id="SegundoConteudo" className="container">
                <div id="page2">
                    <div className="dropdown-contato">
                        <p id="nome-contato">Contato: {this.props.contato["nome"]}</p>
                        <span id="dropdown-arrow">
                            <img src={require('../images/arrow-down.svg')} alt="arrow"></img>
                        </span>
                    </div>

                        <div>

                        </div>

                        <div className="selection-saude">
                            <div className="box-superior">
                                <h1>Saúde</h1>
                            </div>

                            <div className="group-button">
                                <button>
                                    PF
                                </button>
                                <button>
                                    PME
                                </button>
                                <button>
                                    Adesão
                                </button>
                            </div>

                            <div id="search">
                                <span>
                                    <img src={require('../images/search.svg')} alt="search"></img>
                                </span>
                                <input type="text" placeholder="Pesquisa..." aria-placeholder="Pesquisa"/>
                            </div>

                            <div id="grid">
                                    <div className="item">
                                        <img src={require('../images/Ameno-Saúde.png')} alt="plano"></img>
                                    </div>
                                    <div className="item">
                                        <img src={require('../images/Ameno-Saúde.png')} alt="plano"></img>
                                    </div>
                                    <div className="item">
                                        <img src={require('../images/Ameno-Saúde.png')} alt="plano"></img>
                                    </div>
                                    <div className="item">
                                        <img src={require('../images/Ameno-Saúde.png')} alt="plano"></img>
                                    </div>
                                    <div className="item">
                                        <img src={require('../images/Ameno-Saúde.png')} alt="plano"></img>
                                    </div>
                                    <div className="item">
                                        <img src={require('../images/Ameno-Saúde.png')} alt="plano"></img>
                                    </div>
                                    <div className="item">
                                        <img src={require('../images/Ameno-Saúde.png')} alt="plano"></img>
                                    </div>
                                    <div className="item">
                                        <img src={require('../images/Ameno-Saúde.png')} alt="plano"></img>
                                    </div>
                            </div>

                            <div className="box-inferior">
                                <button onClick={this.pagina1}>Voltar</button>
                            </div>
                        </div>
                        <button onClick={this.pagina3}>Próxima tela</button>
             <Page3/>
         </div>
         </div>
        )
    }

}

export default Page2; 