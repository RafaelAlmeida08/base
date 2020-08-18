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

    function getTotal() {
        sele_plano = props.plano;
        return plano.preco;
    }

    return (
        <div className="card-plano">
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
                        R$ {getTotal()}
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
            </div>
        </div>
    );
}

