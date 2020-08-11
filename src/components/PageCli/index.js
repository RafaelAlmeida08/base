import React from 'react';
import {useParams} from 'react-router-dom';

const Pagecli = () => {

   let {data} = useParams();

    //let dataJson = JSON.parse(data);

    let dados = JSON.parse(atob(data))

    console.log(dados)

   
    return (
        <div>
            {dados.map( (data, index) => {
                return (
                <>
                    <p key={data.id.toString()} >Nome do Plano: {data.nome}</p>
                    <p key={data.id.toString()} >total: {data.total}</p>
                    <p key={data.id.toString()} >logo: {data.logo}</p>
                </>
                )
            } )}
        </div>
    )


}


export default Pagecli;