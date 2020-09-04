import React from 'react';
import './styled.css'
import CardPageCli from './../CardPageCli';

const Pagecli = ({data}) => {

    let dados = JSON.parse(atob(data))

    console.log(dados)

    
        /* ----Para Debug---
    const dados = [
        {id:1, nome:"Plano 1", preco:100.00, logo:"caminho logo 1"},
        {id:2, nome:"Plano 2", preco:200.00, logo:"caminho logo 2"},
        {id:3, nome:"Plano 3", preco:300.00, logo:"caminho logo 3"},
        {id:4, nome:"Plano 4", preco:400.00, logo:"caminho logo 4"},
        {id:4, nome:"Plano 4", preco:400.00, logo:"caminho logo 4"}
    ]*/

   
    return (
        <div className="pageCli">
            <div className="containerPageCli">
                <div className="sideBarPageCli">
                    <img src="/icone_cotacao.png" />
                </div>
                <div className="PageBody">
                    <div className="titlePageCli">
                        <img src={'https://tecsaude.planium.io/custom/tecsaude/web/common/images/logo_header.png'} />
                        <p>Segue abaixo sua cotação</p>
                    <hr/>
                    </div>
                    <div className="areaCards">
                        { dados.planos.map( (data) => {
                            return <CardPageCli dados={data} />
                        } ) }
                    </div>
                </div>
            </div>
        </div>
    )

}


export default Pagecli;