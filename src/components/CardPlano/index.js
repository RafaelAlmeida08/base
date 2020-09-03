import React from 'react';
import './cardplano.css';

export default function CardPlano(props) {
    const {plano} = props;
    
    let sele_plano = ''; 
    
    function passapage3(plano){
       props.passapage3(plano);
    }

    function getTotal(total) {
        sele_plano = props.plano;
        sele_plano.preco = props.plano.preco;
        return total;
    }

    function vender(e) { 

       window.location.href = "https://tecsaude.planium.io/web/venda/blank?tipocontratacao=ad&codigoproduto="+plano.btxplano+"&entidadecnpj="+ e.target.id + "&indicador=orcamento";

    }

    return (
        <div className="card-plano" id={plano.btxplano}>
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
                        R$ {getTotal(plano.preco)}
                    </h1>
                </div>
                <div className="ansbox">
                    <small>ANS n° - {plano.registroans}</small>
                </div>
                <div className="card-plano-datas">
                    <table key={plano.btxplano}>
                        <tr>
                            <td>
                                Vidas
                            </td>
                            <td>
                                {props.vidas}
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
                                <strong>Coparticipação</strong>
                            </td>
                            <td>
                                <strong>{plano.coparticipacao}</strong>
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
                <button id="btn-vender" id={plano.entidade} onClick={ vender }>Vender </button>
            </div>
        </div>
    );
}

