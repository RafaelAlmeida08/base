import React from 'react';
import {useParams} from 'react-router-dom';

const Pagecli = () => {

    let {data} = useParams();

    /*let dataJson = JSON.parse(data);*/

    let dataJson = JSON.parse(atob(data))

    console.log(dataJson)
    
    return (
        <div>
            <p>Nome: {dataJson.nome} </p>
            <p>idade: {dataJson.idade} </p>
            <p>profissao: {dataJson.profissao} </p>
        </div>
    )


}


export default Pagecli;