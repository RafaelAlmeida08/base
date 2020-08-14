import React, {Component} from 'react';
import './sidebar.css';
import data from '../../jsonformatter.json';

export default function Sidebar(props) {
    return (
        <div id="sidebar">
            <div id="logo">
                <img src={require('../images/logo_header.png')} alt="logo"/>
            </div>
            {props.contato.nome ? 
                <div id="dataContato">
                    <div id="nome">
                        <h2>Nome:</h2>
                        <p>{props.contato.nome}</p>
                    </div>
                    <div id="telefone">
                        <h2>Telefone:</h2>
                        <p>{props.contato.telefone}</p>
                    </div>
                </div>
            : ""}
        </div>
    );
}