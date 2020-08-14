import React from 'react';
import styled from './styled.css'

export default ({dados}) => {

    const verifyFnction = (e) => {
        {console.log(dados)}
    }

    return(
        <div id={dados.id} className="cardPageCli" onClick={verifyFnction}>
            <div className="card-footer">
                <span>{dados.produto}</span>
            </div>
            <div className="body">
                <p className="desc">Total</p>
                    <span className="span-body">R$: {dados.total.toFixed(2)}</span>
                <p className="desc">Contratação</p>
                    <span className="span-body">{dados.contratacao}</span>
                <p className="desc">Abrangência</p>
                    <span className="span-body">{dados.abrangencia}</span>
            </div>
        </div>
    )
}