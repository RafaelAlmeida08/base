import React, {Component} from 'react';
import '../Card/style.css';


class Card extends Component{

    constructor(props){
        super(props);
        this.state = {           
            cardinfo1:{
                nome: 'Card 1 nome',
                local: 'Card 1 local',
                logo : 'https://i.imgur.com/3aZOmfy.png',                
            },
            cardinfo2:{
                nome: 'Card 2 nome',
                local: 'Card 2 local',
                logo : 'https://i.imgur.com/BAeIz5B.png'
            },
            cardinfo3:{
                nome: 'Card 3 nome',
                local: 'Card 3 local',
                logo : 'https://i.imgur.com/3aZOmfy.png'
            },

            cardinfo4:{
                nome: 'Card 4 nome',
                local: 'Card 4 local',
                logo : 'https://i.imgur.com/BAeIz5B.png'
            },

            cardinfo5:{
                nome: 'Card 5 nome',
                local: 'Card 5 local',
                logo : 'https://i.imgur.com/3aZOmfy.png'
            },

            cardinfo6:{
                nome: 'Card 6 nome',
                local: 'Card 6 local',
                logo : 'https://i.imgur.com/BAeIz5B.png'
            },

            cardinfo7:{
                nome: 'Card 7 nome',
                local: 'Card 7 local',
                logo : 'https://i.imgur.com/3aZOmfy.png'
            },

            cardinfo8:{
                nome: 'Card 8 nome',
                local: 'Card 8 local',
                logo : 'https://i.imgur.com/BAeIz5B.png'
            },

            favoritos : [
                
            ]
               

            
            
        };
        this.mostrarconteudo = this.mostrarconteudo.bind(this);
        this.favoritos = this.favoritos.bind(this);
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
    favoritos(nomeinput){
        var joined = this.state.favoritos.concat(nomeinput);        
        var inputcampo = document.getElementById(nomeinput);
        var posicao = inputcampo.value;
        if(inputcampo.checked===true){
            this.setState({ favoritos: joined });
        }
       
        
    }

    render(){
        return(
            <div id="cards">
                <div className="linha-card">
                    <div className="coluna-card">
                        <div id="card1" className="card" onClick={() => this.mostrarconteudo('conteudo-card1')} >
                            <input type="checkbox" value="1" id="c1" onClick={() => this.favoritos('c1')}/>
                            <img src={this.state.cardinfo1['logo']} alt="card1"/>
                                <div id="conteudo-card1" className="conteudo-card">
                                    <div className="informacoes">
                                        <span>{this.state.cardinfo1['nome']}</span>
                                        <span>{this.state.cardinfo1['local']}</span>
                                    </div>
                                </div>
                        </div>
                    </div> 
                    <div className="coluna-card">
                        <div id="card2" className="card" onClick={() => this.mostrarconteudo('conteudo-card2')}>
                            <input type="checkbox" value="2" id="c2" onClick={() => this.favoritos('c2')}/>
                            <img src={this.state.cardinfo2['logo']} alt="card2"/>
                                <div id="conteudo-card2" className="conteudo-card">
                                    <div className="informacoes">
                                        <span>{this.state.cardinfo2['nome']}</span>
                                        <span>{this.state.cardinfo2['local']}</span>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="coluna-card">
                        <div id="card3" className="card" onClick={() => this.mostrarconteudo('conteudo-card3')}>
                        <input type="checkbox" value="3" id="c3" onClick={() => this.favoritos('c3')}/>
                            <img src={this.state.cardinfo3['logo']} alt="card3"/>
                                <div id="conteudo-card3" className="conteudo-card">
                                    <div className="informacoes">
                                        <span>{this.state.cardinfo3['nome']}</span>
                                        <span>{this.state.cardinfo3['local']}</span>
                                    </div>
                                </div>
                        </div>
                    </div> 
                    <div className="coluna-card">
                        <div id="card4" className="card" onClick={() => this.mostrarconteudo('conteudo-card4')}>
                            <input type="checkbox" value="4" id="c4" onClick={() => this.favoritos('c4')}/>
                            <img src={this.state.cardinfo4['logo']} alt="card4"/>
                                <div id="conteudo-card4" className="conteudo-card">
                                    <div className="informacoes">
                                        <span>{this.state.cardinfo4['nome']}</span>
                                        <span>{this.state.cardinfo4['local']}</span>
                                    </div>
                                </div>
                        </div>
                    </div>   
                </div>
                <div className="linha-card">
                    <div className="coluna-card">
                            <div id="card5" className="card" onClick={() => this.mostrarconteudo('conteudo-card5')}>
                                <input type="checkbox" value="5" id="c5" onClick={() => this.favoritos('c5')}/>
                                <img src={this.state.cardinfo5['logo']} alt="card5"/>
                                    <div id="conteudo-card5" className="conteudo-card">
                                        <div className="informacoes">
                                            <span>{this.state.cardinfo5['nome']}</span>
                                            <span>{this.state.cardinfo5['local']}</span>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="coluna-card">
                            <div id="card6" className="card" onClick={() => this.mostrarconteudo('conteudo-card6')}>
                                <input type="checkbox" value="6" id="c6" onClick={() => this.favoritos('c6')}/>
                                <img src={this.state.cardinfo6['logo']} alt="card6"/>
                                    <div id="conteudo-card6" className="conteudo-card">
                                        <div className="informacoes">
                                            <span>{this.state.cardinfo6['nome']}</span>
                                            <span>{this.state.cardinfo6['local']}</span>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="coluna-card">
                            <div id="card7" className="card" onClick={() => this.mostrarconteudo('conteudo-card7')} >
                                <input type="checkbox" value="7" id="c7" onClick={() => this.favoritos('c7')}/>
                                <img src={this.state.cardinfo7['logo']} alt="card7"/>
                                    <div id="conteudo-card7" className="conteudo-card">
                                        <div className="informacoes">
                                            <span>{this.state.cardinfo7['nome']}</span>
                                            <span>{this.state.cardinfo7['local']}</span>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="coluna-card">
                            <div id="card8" className="card" onClick={() => this.mostrarconteudo('conteudo-card8')}>
                                <input type="checkbox" value="8" id="c8" onClick={() => this.favoritos('c8')}/>
                                <img src={this.state.cardinfo1['logo']} alt="card8"/>
                                    <div id="conteudo-card8" className="conteudo-card">
                                        <div className="informacoes">
                                            <span>{this.state.cardinfo8['nome']}</span>
                                            <span>{this.state.cardinfo8['local']}</span>
                                        </div>
                                    </div>
                            </div>
                        </div> 
                </div>   

                <h1>Cards selecionados: {this.state.favoritos}</h1>
               

            </div>
        );
    }
}

export default Card;