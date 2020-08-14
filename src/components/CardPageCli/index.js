import React from 'react';
import styled from './styled.css'

export default ({dados}) => {

    const verifyFnction = (e) => {
        alert('clicado')
    }

    return(
        <div id={dados.id} className="cardPageCli" onClick={verifyFnction}>
            <div className="body">
                <span className="span-body">{dados.nome}</span>
            </div>
            <div className="card-footer">
                <span>clique para selecionar {dados.nome}</span>
            </div>
        </div>
    )
}