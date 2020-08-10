import React, {Component} from 'react';
import '../Card/style.css';
import Comparativo from '../Comparativo';


class Card extends Component{

    constructor(props){
        super(props);
        this.state = {  
            dados: {       
                cardinfo1:{
                    id: 1,
                    nome: 'Ameno',
                    local: 'Card 1 local',
                    logo : 'https://i.imgur.com/3aZOmfy.png',
                    total: '200.00'
                },
                cardinfo2:{
                    id: 2,
                    nome: 'HBC',
                    local: 'Card 2 local',
                    logo : 'https://i.imgur.com/BAeIz5B.png',
                    total: '300.00'
                },
                cardinfo3:{
                    id: 3,
                    nome: 'Qualicorp',
                    local: 'Card 3 local',
                    logo : 'https://i.imgur.com/3aZOmfy.png',
                    total: '200.00'
                },

                cardinfo4:{
                    id: 4,
                    nome: 'Card 4 nome',
                    local: 'Card 4 local',
                    logo : 'https://i.imgur.com/BAeIz5B.png'
                },

                cardinfo5:{
                    id: 5,
                    nome: 'Card 5 nome',
                    local: 'Card 5 local',
                    logo : 'https://i.imgur.com/3aZOmfy.png'
                },

                cardinfo6:{
                    id: 6,
                    nome: 'Card 6 nome',
                    local: 'Card 6 local',
                    logo : 'https://i.imgur.com/BAeIz5B.png'
                },

                cardinfo7:{
                    id: 7,
                    nome: 'Card 7 nome',
                    local: 'Card 7 local',
                    logo : 'https://i.imgur.com/3aZOmfy.png'
                },

                cardinfo8:{
                    id: 8,
                    nome: 'Card 8 nome',
                    local: 'Card 8 local',
                    logo : 'https://i.imgur.com/BAeIz5B.png'
                }
            },
            favoritos: [ ]
            
        };

        this.mostrarconteudo = this.mostrarconteudo.bind(this);
        this.renderCard = this.renderCard.bind(this);
        this.favoritos = this.favoritos.bind(this);
        this.comparativo = this.comparativo.bind(this);

        };

    mostrarconteudo(id){
        var conteudo = document.getElementById(id + '-info');
        if (conteudo.style.display === 'none') {
            conteudo.style.display = 'block'
        } else if (conteudo.style.display === '') {
            conteudo.style.display = 'block'
        } else if (conteudo.style.display === 'block') {
            conteudo.style.display = 'none';
        }
    }

    favoritos(inputID){
        var input = document.getElementById(inputID);
        var details = document.getElementById(inputID + '-row')
        var plano = {
            id: details.attributes['data-id'].value,
            nome: details.attributes['data-nome'].value,
            total: details.attributes['data-total'].value,
            logo: details.attributes['data-logo'].value
        };

        var joined = this.state.favoritos.concat(plano);        
        if (input.checked === true){
            this.setState({ favoritos: joined });
            console.log(joined);
        } else {
            let state = this.state
            state.favoritos.splice(state.favoritos.findIndex(planos => planos.id === plano.id), 1);

            this.setState(state)
            console.log(state.favoritos)
        }
    }

    comparativo() {
        var wrapperCards = document.getElementById('wrapper-cards');
        wrapperCards.style.display = 'none';

        var sidebar = document.getElementById('sidebar');
        sidebar.style.display = 'none';

        var header = document.getElementById('pageselecao-header');
        header.style.display = 'none';

        var pageselecao = document.getElementById('PagSelecao');
        pageselecao.style.width = '100%';
        pageselecao.style.padding = '0px';
        
        var wrapperComparativo = document.getElementById('wrapper-comparativo');
        wrapperComparativo.style.display = 'initial'

    }

    renderCard(values) {
        return(
                <div id="card" className="card">
                    <img 
                        src={values.logo} 
                        alt={`card${values.id}`} 
                        onClick={() => this.mostrarconteudo(`${values.id}`)}
                    />
                    <div id={`${values.id}-info`} className="conteudo-card">
                        <div className="informacoes">
                            <table>
                                <tr>
                                    <td 
                                        id={`${values.id}-row`}
                                        data-id={values.id}
                                        data-nome={values.nome}
                                        data-total={values.total}
                                        data-logo={values.logo}
                                    >
                                        {values.nome}
                                    </td>
                                    <td>
                                        <input 
                                            type="checkbox" 
                                            value="1" 
                                            id={`${values.id}`} 
                                            onClick={
                                                () => this.favoritos(`${values.id}`)
                                            }
                                        />
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
        )

    }

    render(){

        let cardDados = []
        let obj = []
        let planos = this.state.favoritos;

        cardDados.push(this.state.dados);

        Object.keys(cardDados[0]).forEach( (values) => { obj.push(this.renderCard(cardDados[0][values])) })

        return(
            <div className="wrapper">
                <div id="wrapper-cards">
                    <div className="Cards">
                        {obj}
                    </div>

                    <div className="btn">
                        <button onClick={this.comparativo}>
                            Comparar Planos
                        </button>
                    </div>
                </div>
                <div id="wrapper-comparativo">
                   <Comparativo planos={planos}/>
                </div>

            </div>
        )
    }
}

export default Card;