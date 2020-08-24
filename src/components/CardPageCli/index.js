import React from 'react';
import './styled.css';

export default ({dados}) => {

    const verifyFunction = (e) => {
        console.log(dados)
    }

    return(
        <div id={dados.id} className="cardPageCli" onClick={verifyFunction}>
            <div className="card-footer">
                <span>{dados.produto}</span>
            </div>
            <div className="body">
                <p className="desc">Preço</p>
                    <span className="span-body">R$: {dados.preco}</span>
                <p className="desc">Contratação</p>
                    <span className="span-body">{dados.contratacao}</span>
                <p className="desc">Abrangência</p>
                    <span className="span-body">{dados.abrangencia}</span>
            </div>
        </div>
    )
}