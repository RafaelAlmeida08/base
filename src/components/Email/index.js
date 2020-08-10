import React, {Component} from 'react';
import '../Email/style.css';

class Email extends Component{

    componentDidMount(){
       
    }

    render(){
        
        return(
            
                <div id="Modalemail" className="Modalemail">
                    <div className="modalemail-content">
                        <span className="fecharmodal">&times;</span>
                        <p>Caixa de e-mail</p>
                    </div>
                </div>
           
           
        )
    }
}

export default Email;