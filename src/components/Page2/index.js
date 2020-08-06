import React, {Component} from 'react';
import Modal from '../Modal';

class Page2 extends Component{
    constructor(props){
        super(props);
        this.state = {
            isVisible: false,
            planoEscolhido: 'Plano'
        };
        
        this.click = this.click.bind(this);
    }

    click(e) {

         this.setState({
            isVisible: true,
            planoEscolhido:e.target.id
        });
    }

    render(){
        return(
            <div id="SegundoConteudo" className="container">
                <div id="page2">
                    <div className="dropdown-contato">
                        <p id="nome-contato">Contato: {/*this.props.contato["nome"]*/}</p>
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
                                        <img id="img1" src={require('../images/Ameno-Saúde.png')} onClick={this.click} alt="plano"></img>
                                    </div>
                                    <div className="item">
                                        <img id="img2" src={require('../images/Ameno-Saúde.png')} onClick={this.click} alt="plano"></img>
                                    </div>
                                    <div className="item">
                                        <img id="img3" src={require('../images/Ameno-Saúde.png')} onClick={this.click} alt="plano"></img>
                                    </div>
                                    <div className="item">
                                        <img id="img4" src={require('../images/Ameno-Saúde.png')} onClick={this.click} alt="plano"></img>
                                    </div>
                                    <div className="item">
                                        <img id="img5" src={require('../images/Ameno-Saúde.png')} onClick={this.click} alt="plano"></img>
                                    </div>
                                    <div className="item">
                                        <img id="img6" src={require('../images/Ameno-Saúde.png')} onClick={this.click} alt="plano"></img>
                                    </div>
                                    <div className="item">
                                        <img id="img7" src={require('../images/Ameno-Saúde.png')} onClick={this.click} alt="plano"></img>
                                    </div>
                                    <div className="item">
                                        <img id="img8" src={require('../images/Ameno-Saúde.png')} onClick={this.click} alt="plano"></img>
                                    </div>
                            </div>

                            <div className="box-inferior">
                                <button onClick={this.pagina1}>Voltar</button>
                                {/*<button onClick={this.pagina3}>Próxima tela</button>*/}
                            </div>
                        </div>
                        {/*<button onClick={this.pagina3}>Próxima tela</button>*/}
                </div>
                    {/*<Page3/>*/}
                    {this.state.isVisible ? <Modal onClose={() => this.setState({isVisible: false}) } plano={this.state.planoEscolhido} /> : null}
            </div>
        )
    }

}

export default Page2; 