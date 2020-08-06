import React, {Component} from 'react';
import Page2 from '../Page2';

class Page1 extends Component{
    constructor(props){
        super(props);
        this.state = {
            contato: {
                nome: '',
                cidade: ''
            },
            totalcred: 0,
            range: {
                "00 a 18": "0",
                "19 a 23": "0",
                "24 a 28": "0",
                "29 a 33": "0",
                "34 a 38": "0",
                "39 a 43": "0",
                "44 a 48": "0",
                "49 a 53": "0",
                "54 a 58": "0",
                "59 ou +" : "0"  
            }
        };
        this.modal      = this.modal.bind(this);
        this.cadastrar  = this.cadastrar.bind(this);
        this.contato    = this.contato.bind(this);
        this.cidade     = this.cidade.bind(this);
        this.setRange   = this.setRange.bind(this);
        this.setTotalCred = this.setTotalCred.bind(this);
    }

    componentDidMount(){
        document.getElementById('page2').style.display = 'none';
        document.getElementById('page3').style.display = 'none';
    }

    cadastrar(e){
        document.getElementById('page1').style.display = "none";
        document.getElementById('page2').style.display = "initial";

        e.preventDefault();
    }

    contato(event) {
        this.setState(prevState => (
            {
                contato: {
                    ...prevState.contato,
                    nome: document.getElementById('input-contato').value
                }
            }
        ));        
        event.preventDefault();
    }

    cidade(event){
        this.setState(prevState => (
            {
                contato: {
                    ...prevState.contato,
                    cidade: document.getElementById('select1').value
                }
            }
        ));
        event.preventDefault();
    }

    setRange() {
        let ranges = document.getElementsByClassName('input-range');
        let range = Object.assign({}, this.state.range);
        for (var prop in ranges) {
            var key = ranges[prop].id;
            var value = ranges[prop].value;

            if (key !== undefined) {
                if (value === "") {
                    range[key] = 0;
                } else {
                    range[key] = value;
                }
            }
        }

        this.setState({range});
        return range;
    }

    setTotalCred() {     
        document.getElementById('myModal').style.display="none";
        var range = this.setRange();
        let total = 0;
        for (var prop in range) {
            total = total + parseInt(range[prop]);
        }

        this.setState({totalcred: total});
    }

    modal(){
        var modal   = document.getElementById("myModal");   
        var select2 = document.getElementById("select2");
        var span    = document.getElementsByClassName("close")[0];
        
        select2.onclick = function() {
          modal.style.display = "block";
        }
        
        span.onclick = function() {
          modal.style.display = "none";
        }
        
        window.onclick = function(event) {
          if (event.target === modal) {
            modal.style.display = "none";
          } 
        } 
    }
    
    render(){
        return(
               <div id="PrimeiroConteudo" className="container">
                    <div id="page1">
                        <form onSubmit={this.cadastrar} className="form" id="form">
                            <div className="box">
                                <div className="box-superior">
                                    <h1>Dados básicos</h1>
                                </div>
                                <div className="box-contato">
                                    <h3>Contato</h3>
                                    <div id="div-input">
                                        <input required id="input-contato" type="text" value={this.state.contato['nome']} onChange={this.contato}/>
                                        <img id="user" src={require('../images/user.png')} alt="user"/>
                                    </div>
                                </div>
                                <div className="box-meio">
                                    <div className="box-cidade">
                                        <h3>Cidade</h3>
                                            <select required id="select1" onChange={this.cidade}>
                                                <option value={this.state.contato["cidade"]}></option>
                                                <option value="Rio de Janeiro">Rio de Janeiro</option>
                                                <option value="Niteroi">Niterói</option>
                                                <option value="São Goncalo">São Gonçalo</option>
                                            </select>                                   
                                    </div>
                                    <div className="box-cred">
                                        <h3>Credenciados</h3>
                                        <input id="select2" value={this.state.totalcred} onFocus={this.modal} />
                                    </div>
                                </div>
                                <div className="box-inferior">
                                    <button type="submit">Confirmar</button>
                                </div>
                            </div>
                        </form>
                        <div id="myModal">
                            <div id="modal-content">                            
                                <div className="box-superior">
                                    <div className="box-superior-esquerda">
                                        <h1>Credenciados</h1>
                                    </div>
                                    <div className="box-superior-direita">
                                        <span className="close">&times;</span>
                                    </div>
                                </div>
                                <div className="modal-linha">
                                    <div className="modal-linha-bloco">
                                            <label>00 a 18</label>
                                            <input id="00 a 18" type="number" className="input-range"/>
                                    </div> 
                                    <div className="modal-linha-bloco">
                                            <label>19 a 23</label>
                                            <input id="19 a 23" type="number" className="input-range"/>
                                    </div>    
                                    <div className="modal-linha-bloco">
                                            <label>24 a 28</label>
                                            <input id="24 a 28" type="number" className="input-range"/>
                                    </div>    
                                    <div className="modal-linha-bloco">
                                            <label>29 a 33</label>
                                            <input id="29 a 33" type="number" className="input-range"/>
                                    </div>    
                                    <div className="modal-linha-bloco">
                                            <label>34 a 38</label>
                                            <input id="34 a 38" type="number" className="input-range"/>
                                    </div>                                   
                                </div>      
                                <div className="modal-linha">
                                    <div className="modal-linha-bloco">
                                        <label>39 a 43</label>
                                        <input id="39 a 43" type="number" className="input-range"/>
                                    </div> 
                                    <div className="modal-linha-bloco">
                                        <label>44 a 48</label>
                                        <input id="44 a 48" type="number" className="input-range"/>
                                    </div>    
                                    <div className="modal-linha-bloco">
                                        <label>49 a 53</label>
                                        <input id="49 a 53" type="number" className="input-range"/>
                                    </div>    
                                    <div className="modal-linha-bloco">
                                        <label>54 a 58</label>
                                        <input id="54 a 58" type="number" className="input-range"/>
                                    </div>    
                                    <div className="modal-linha-bloco">
                                        <label>59 ou +</label>
                                        <input id="59 ou +" type="number" className="input-range"/>
                                    </div>                                                                   
                                </div>
                                <div className="btnmodal">
                                    <button onClick={this.setTotalCred}>Confirmar</button>     
                                </div>                                              
                            </div>                         
                        </div>
                   </div>
                
                   <Page2 range={this.state.range} contato={this.state.contato}/>
               </div>


            )
    }

}

export default Page1;