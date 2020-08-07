import React, {Component} from 'react';
import '../Card/style.css';


class Card extends Component{

    constructor(props){
        super(props);
        this.state = {  
            dados: {       
                cardinfo1:{
                    id: 1,
                    nome: 'Ameno',
                    local: 'Card 1 local',
                    logo : 'https://i.imgur.com/3aZOmfy.png'
                },
                cardinfo2:{
                    id: 2,
                    nome: 'HBC',
                    local: 'Card 2 local',
                    logo : 'https://i.imgur.com/BAeIz5B.png'
                },
                cardinfo3:{
                    id: 3,
                    nome: 'Qualicorp',
                    local: 'Card 3 local',
                    logo : 'https://i.imgur.com/3aZOmfy.png'
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
            favoritos: []
            
        };

        this.mostrarconteudo = this.mostrarconteudo.bind(this);
        this.renderCard = this.renderCard.bind(this);
        this.favoritos = this.favoritos.bind(this);

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

    favoritos(nomeinput){
        var joined = this.state.favoritos.concat(nomeinput);        
        var inputcampo = document.getElementById(nomeinput);
        var posicao = inputcampo.value;
        if(inputcampo.checked===true){
            this.setState({ favoritos: joined });
        }
    }

    renderCard(values) {
        return(
                <div id="card" className="card">
                    <img src={values.logo} alt={`card${values.id}`} onClick={() => this.mostrarconteudo(`card${values.id}`)}/>
                    <div id={`card${values.id}-info`} className="conteudo-card">
                        <div className="informacoes">
                            <table>
                                <tr>
                                    <td>
                                        {values.nome}
                                    </td>
                                    <td>
                                        <input type="checkbox" value="1" id={`card${values.id}`} onClick={() => this.favoritos(`card${values.id}`)}/>
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

        cardDados.push(this.state.dados);

        Object.keys(cardDados[0]).forEach( (values) => { obj.push(this.renderCard(cardDados[0][values])) })

        return(
            <div className="Cards">
                {obj}
                <h1>Cards selecionados: {this.state.favoritos}</h1>
            </div>
        )
    }
}

export default Card;