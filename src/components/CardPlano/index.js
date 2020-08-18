import React, { Component } from 'react';
import Page3 from '../Page3';
import './cardplano.css';
import data from '../../jsonformatter.json';

export default function CardPlano(props) {
    const {plano} = props;
    
    let sele_plano = ''; 
    
    

      function passapage3(plano){
       props.passapage3(plano);
    }

    function getTotal(plano) {
        let dataPlano = data.tbl_preco.filter((index) => {
            return index.btxplano == plano;
        });

        console.log(dataPlano);
        console.log(props.range);

        let total = 0;
        for (var [key, value] of Object.entries(props.range)) {
            switch (key) {
                case "00 a 18":
                    if (value > 0) {
                        total += dataPlano[0].preco[0] * value;
                    }
                    break;
                case "19 a 23":
                    if (value > 0) {
                        total += dataPlano[0].preco[1] * value;
                    }
                    break;
                case "24 a 28":
                    if (value > 0) {
                        total += dataPlano[0].preco[2] * value;
                    }
                    break;
                case "29 a 33":
                    if (value > 0) {
                        total += dataPlano[0].preco[3] * value;
                    }
                    break;
                case "34 a 38":
                    if (value > 0) {
                        total += dataPlano[0].preco[4] * value;
                    }
                    break;
                case "39 a 43": 
                    if (value > 0) {
                        total += dataPlano[0].preco[5] * value;
                    }
                    break;
                case "44 a 48":
                    if (value > 0) {
                        total += dataPlano[0].preco[6] * value;
                    }
                    break;
                case "49 a 53": 
                    if (value > 0) {
                        total += dataPlano[0].preco[7] * value;
                    }
                case "54 a 58":
                    if (value > 0) {
                        total += dataPlano[0].preco[8] * value;
                    }
                    break;
                case "59 ou +":
                    if (value > 0) {
                        total += dataPlano[0].preco[9] * value;
                    }
                default:
                    break;
            }
        }

        props.plano.total = total;
        sele_plano = props.plano;
        return total.toFixed(2);
    }

    function vender() {

    }

    return (
        <div className="card-plano" id={plano.btxplano}>
        {console.log(plano)}
            <div className="card-plano-header" role="header">
                <h2 className="card-plano-title">
                    {plano.produto}
                </h2>
            </div>
            <div className="card-plano-content">
                <div className="wrapper-total">
                    <h1 className="total-title">
                        Total
                    </h1>
                    <h1 className="total-valor">
                        R$ {getTotal(plano.btxplano)}
                    </h1>
                </div>
                <div className="card-plano-datas">
                    <table key={plano.btxplano}>
                        <tr>
                            <td>
                               Registro ANS
                            </td>
                            <td>
                                {plano.registroans}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Acomodação
                            </td>
                            <td>
                                {plano.acomodacao}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Coparticipação
                            </td>
                            <td>
                                {plano.coparticipacao}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Abrangencia
                            </td>
                            <td>
                                {plano.abrangencia}
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="card-plano-footer" role="footer">
                <button id="btnx" onClick={
                    () => {     
                        document.getElementById('group-cardplano').style.display    = 'none';
                        document.getElementById('header-comparativo').style.display = 'none';
                        document.getElementById('btn-voltar').style.display         = 'none';
                        document.getElementById('page3').style.display              = 'initial';
                        passapage3(sele_plano);
                    }}
                    
                    className="btn-footer">
                    + Informações
                </button>                 
                <button id="btn-vender" onClick={ () => {
                    window.location.href = "https://tecsaude.planium.io/web/venda/blank?tipocontratacao=ad&codigoproduto="+plano.btxplano+"&entidadecnpj="+ 0 + "&indicador=orcamento";
                }}>Vender
                    
                </button>
                               
            </div>
        </div>
    );
}

