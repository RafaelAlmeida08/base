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
                    logo : 'https://i.imgur.com/BAeIz5B.png',
                    total: '400.00'
                },

                cardinfo5:{
                    id: 5,
                    nome: 'Card 5 nome',
                    local: 'Card 5 local',
                    logo : 'https://i.imgur.com/3aZOmfy.png',
                    total: '500.00'
                },

                cardinfo6:{
                    id: 6,
                    nome: 'Card 6 nome',
                    local: 'Card 6 local',
                    logo : 'https://i.imgur.com/BAeIz5B.png',
                    total: '600.00'
                },

                cardinfo7:{
                    id: 7,
                    nome: 'Card 7 nome',
                    local: 'Card 7 local',
                    logo : 'https://i.imgur.com/3aZOmfy.png',
                    total: '700.00'
                },

                cardinfo8:{
                    id: 8,
                    nome: 'Card 8 nome',
                    local: 'Card 8 local',
                    logo : 'https://i.imgur.com/BAeIz5B.png',
                    total: '4800.00'
                }
            },
            favoritos: [ ]
            
        };

        this.mostrarconteudo = this.mostrarconteudo.bind(this);
        this.renderRow = this.renderRow.bind(this);
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
        var details = document.getElementById(inputID + '-row');

        if (details) {
            var plano = {
                btxplano: details.attributes['data-idplano'].value,
                registroans: details.attributes['data-registroans'].value,
                produto: details.attributes['data-produto'].value,
                contratacao: details.attributes['data-contratacao'].value,
                abrangencia: details.attributes['data-abrangencia'].value,
                segmentacao: details.attributes['data-segmentacao'].value,
                acomodacao: details.attributes['data-acomodacao'].value,
                coparticipacao: details.attributes['data-coparticipacao'].value,
                entidade: details.attributes['data-entidade'].value
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
        } else {
            console.log("vazio");
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

        document.getElementById('btn-1').style.display = 'none';

    }

    renderRow(values) {
        return(
                <tr 
                    id={values.btxplano + '-row'}
                    data-idplano={values.btxplano}
                    data-registroans={values.registroans}
                    data-produto={values.produto}
                    data-contratacao={values.tipocontratacao}
                    data-abrangencia={values.abrangencia}
                    data-segmentacao={values.segmentacao}
                    data-acomodacao={values.acomodacao}
                    data-coparticipacao={values.coparticipacao === true ? "Sim" : "Não"}
                    data-entidade={values.cnpj_entidade}
                >
                    <td>
                        {values.produto}
                    </td>
                    <td>
                        {values.acomodacao}
                    </td>
                    <td>
                        {values.abrangencia}
                    </td>
                    <td>
                        <input 
                            id={values.btxplano} 
                            type="checkbox" 
                            onClick={() => this.favoritos(values.btxplano)}/>
                    </td>
                </tr>
        )

    }

    render(){
        let obj = []
        let planos = this.state.favoritos;

        if (this.props.planos.length > 0) {
            this.props.planos.map((plano) => {
                obj.push(this.renderRow(plano[0]));
            });
        }

        return(
            <div className="wrapper">
                <div id="wrapper-cards">
                    <div className="Cards">
                        {this.props.planos.length > 0 ? 
                            <table>
                                <tr>
                                    <th>
                                        Nome
                                    </th>
                                    <th>
                                        Acomodação
                                    </th>
                                    <th>
                                        Abrangência
                                    </th>
                                    <th>
                                        Comparar
                                    </th>
                                </tr>
                                {obj}
                            </table>
                        : ""}
                    </div>
                        
                    {
                        planos.length > 1 ?
                        <div className="btn">
                            <button onClick={this.comparativo}>
                                Comparar Planos                           
                            </button>
                        </div> : "" 
                    }

                </div>
                <button id="btn-1" onClick={ () => {
                     document.getElementById('PrimeiroConteudo').style.display = '';
                     document.getElementById('container').style.display = 'none';                     
                }} >Voltar</button>
                <div id="wrapper-comparativo">
                   <Comparativo planos={planos} telefone={this.props.telefone} range={this.props.range}/>
                </div>
                
            </div>
        )
    }
}

export default Card;