import React, {Component} from 'react';
import '../Card/style.css';


class Card extends Component{

    constructor(props){
        super(props);
        this.state = {  
            dados: {       
                cardinfo1:{
                    id: 1,
                    nome: 'Card 1 nome',
                    local: 'Card 1 local',
                    logo : 'https://i.imgur.com/3aZOmfy.png'
                },
                cardinfo2:{
                    id: 2,
                    nome: 'Card 2 nome',
                    local: 'Card 2 local',
                    logo : 'https://i.imgur.com/BAeIz5B.png'
                },
                cardinfo3:{
                    id: 3,
                    nome: 'Card 3 nome',
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
            }
            
        };
        this.mostrarconteudo = this.mostrarconteudo.bind(this);
        this.renderCard = this.renderCard.bind(this);
    }

    mostrarconteudo(nomecard){
      var conteudo = document.getElementById(nomecard);
       if(conteudo.style.display === 'none'){
            conteudo.style.display = 'block'
       }else if(conteudo.style.display === ''){
            conteudo.style.display = 'block'
       }else if(conteudo.style.display === 'block'){
            conteudo.style.display = 'none';
       }
    }

    renderCard(values) {
        return(
                    <div className="coluna-card">
                         <div id="card" className="card">
                         <img onClick={() => this.mostrarconteudo(`card${values.id}`)} src={values.logo} alt={`card${values.id}`}/>
                             <div id={`card${values.id}`} className="conteudo-card">
                                 <div className="informacoes">
                                     <span>{values.nome}</span>
                                     <span>{values.local}</span>
                                 </div>
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
            </div>
        );
    }
}

export default Card;