import React, {Component} from 'react';
import './sidebar.css';

export default function Sidebar(props) {
    return (
        <div id="sidebar">
            <div id="btn-group">
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