import React, {Component} from 'react';
import Page3 from '../Page3';



class Page2 extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        };
    }

   

    render(){
        return(            
         <div id="SegundoConteudo">
             <div id="page22">
                <h1>Página 2</h1>
                <button id="btn" onClick={() => {document.getElementById('page22').style.display='none' ; document.getElementById('page33').style.display='block'}} >Mostrar página 3</button>
             </div>
             <Page3/>
         </div>
        )
    }

}

export default Page2; 