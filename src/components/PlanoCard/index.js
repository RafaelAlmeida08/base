import React, {Component} from 'react';

export default function PlanoCard(props) {
    const {img} = props;
    return (
        <div className="item">
            <img src={img} alt="plano"></img> 
        </div>
    );
}