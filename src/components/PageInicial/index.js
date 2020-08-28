import React, {Component} from 'react';
import Page1 from '../Page1/';
import './style.css';

class PageInicial extends Component {
    constructor(props){
        super(props);
        this.page1 = this.page1.bind(this);
    }


    page1() {
        var pageInicial = document.getElementById('wrapperPageInicial');
        var page1 = document.getElementById('PrimeiroConteudo');

        pageInicial.style.display = 'none';
        page1.style.display = 'unset';
    }
    
    render() {
        return(
            <>
                <div id="wrapperPageInicial">
                    <h1 className="textInicial">SEJA BEM-VINDO</h1>
                    <div id="wrapperInicial">
                        <div id="wrapperLogo">
                            <img id="LogoInicial" src={require('../images/logo.png')} alt="Logo" />
                        </div>
                    </div>
                    <h1 className="textInicial">FAÇA AQUI SUA COTAÇÃO PARA PLANOS COLETIVOS POR ADESÃO</h1>
                    <div id="footerInicial">
                        <button id="btnFooter" onClick={this.page1}>
                            <span>
                                <img id="btnImage" src={require('../images/pass.png')} alt="Passar" />
                            </span>
                        </button>
                    </div>
                </div>
                <Page1 />
            </>
        )
    }
}

export default PageInicial;