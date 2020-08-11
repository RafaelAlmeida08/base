import React, { Component } from 'react';
import Page3 from '../Page3';
import './cardplano.css';




export default function CardPlano(props) {
    const {plano} = props;

    function passapage3(plano){
       props.passapage3(plano);
    }

    return (
        <div className="card-plano">
            <div className="card-plano-header" role="header">
                <h2 className="card-plano-title">
                    {plano.nome}
                </h2>
            </div>
            <div className="card-plano-content">
                <div className="card-plano-logo">
                    <img src={plano.logo} alt="Logo" />
                </div>
                <div className="card-plano-datas">
                    <table key={plano.id}>
                        <tr>
                            <td>
                                Total
                            </td>
                            <td>
                                R$ {plano.total}
                            </td>
                        </tr>
                        <tr>
                            <td>
                               Modalidade 
                            </td>
                            <td>
                                Saúde Adesão
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Acomodação
                            </td>
                            <td>
                                Apartamento
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Coparticipação
                            </td>
                            <td>
                                Não
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
                        passapage3(plano);
                    }}
                    
                    className="btn-footer">
                    + Informações
                </button>
            </div>
        </div>
    );
}

