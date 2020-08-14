import React from 'react';
import styled from './styled.css'

export default ({dados}) => {

    const verifyFnction = (e) => {
        {console.log(dados)}
    }

    return(
        <div id={dados.id} className="cardPageCli" onClick={verifyFnction}>
            <div className="body">
                <p className="desc">Produto</p>
                <span className="span-body">{dados.produto}</span>
                <p className="desc">Contratação</p>
                <span className="span-body">{dados.contratacao}</span>
                <p className="desc">Abrangencia</p>
                <span className="span-body">{dados.abrangencia}</span>
            </div>
            <div className="card-footer">
                <span>clique para selecionar {dados.nome}</span>
            </div>
        </div>
    )
}