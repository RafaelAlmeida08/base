import React, {Component} from 'react';
import Page3 from '../Page3';

class Page2 extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        };

        this.pagina1 = this.pagina1.bind(this);
        this.pagina3 = this.pagina3.bind(this);
    }

    pagina1(){
        document.getElementById('page3').style.display  = 'none';
        document.getElementById('page2').style.display  = 'none';
        document.getElementById('page1').style.display  = 'initial';
    }

    pagina3(){
        document.getElementById('page2').style.display = 'none';
        document.getElementById('page3').style.display = 'initial';
    }

    openDropdown() {
        var dropdown = document.getElementById('dropdownBtn');
        var dropdownContent = document.getElementById('dropdown-content');

        dropdown.classList.add("btn-dropdown-abrir");
        dropdownContent.classList.remove("dropdown-content");
        dropdownContent.classList.add("content-dropdown-abrir");
    }

    render(){
        return(
            <div id="SegundoConteudo" className="container">

                <div id="page2">
                    <div id="dropdown">
                        <div id="dropdownBtn" className="dropdown-contato" onClick={this.openDropdown}>
                            <p id="nome-contato">Contato: {this.props.contato["nome"]}</p>
                            <span id="dropdown-arrow">
                                <img src={require('../images/arrow-down.svg')} alt="arrow"></img>
                            </span>
                        </div>
                        <div id="dropdown-content">
                            <p>Oi</p>
                        </div>
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