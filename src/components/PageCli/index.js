import React from 'react';
import {useParams} from 'react-router-dom';

const Pagecli = () => {

   let {data} = useParams();

    //let dataJson = JSON.parse(data);

    let dados = JSON.parse(atob(data))

    console.log(dados)

    /*const dados = [
        {id: 1, nome: 'plano 1', total: 100.00, logo: 'caminho logo 1'},
        {id: 2, nome: 'plano 2', total: 200.00, logo: 'caminho logo 2'},
        {id: 3, nome: 'plano 3', total: 300.00, logo: 'caminho logo 3'},
        {id: 4, nome: 'plano 4', total: 400.00, logo: 'caminho logo 4'},
        {id: 5, nome: 'plano 5', total: 500.00, logo: 'caminho logo 5'},
        {id: 6, nome: 'plano 6', total: 600.00, logo: 'caminho logo 6'}
    ]*/
   
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