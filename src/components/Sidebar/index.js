import React, {Component} from 'react';
import './sidebar.css';

export default function Sidebar(props) {
    return (
        <div id="sidebar">
            <div id="btn-group">
                <span>
                    <img src={require('../images/planium.png')} alt="logo"></img>
                </span>
                <button>
                    PF
                </button>
                <button>
                    PME
                </button>
                <button>
                    Adesão
                </button>
            </div>
        </div>
    );
}