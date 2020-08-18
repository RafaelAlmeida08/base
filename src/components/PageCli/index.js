import React from 'react';
import {useParams} from 'react-router-dom';
import './styled.css'
import CardPageCli from './../CardPageCli';

const Pagecli = () => {

   let {data} = useParams();

    let dados = JSON.parse(atob(data))

    /*
        ----Para Debug---
    const dados = [
        {id:1, nome:"Plano 1", total:100.00, logo:"caminho logo 1"},
        {id:2, nome:"Plano 2", total:200.00, logo:"caminho logo 2"},
        {id:3, nome:"Plano 3", total:300.00, logo:"caminho logo 3"},
        {id:4, nome:"Plano 4", total:400.00, logo:"caminho logo 4"},
        {id:4, nome:"Plano 4", total:400.00, logo:"caminho logo 4"}
    ]*/

   
    return (
        <div className="pageCli">
            {console.log(dados)}
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
                        { dados.map( (data) => {
                            return <CardPageCli dados={data} />
                        } ) }
                    </div>
                </div>
            </div>
        </div>
    )

}


export default Pagecli;