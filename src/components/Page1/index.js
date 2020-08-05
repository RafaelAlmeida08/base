import React, {Component} from 'react';
import Page2 from '../Page2';

class Page1 extends Component{
    constructor(props){
        super(props);
        this.state = {
            contato: {
                "nome": '',
                "cidade": ''
            },
            totalcred: 0,
            range: {
                "00 a 18": 0,
                "19 a 23": 0,
                "24 a 28": 0,
                "29 a 33": 0,
                "34 a 38": 0,
                "39 a 43": 0,
                "44 a 48": 0,
                "49 a 53": 0,
                "54 a 58": 0,
                "59 a +" : 0   
            }
        };
        this.modal      = this.modal.bind(this);
        this.cadastrar  = this.cadastrar.bind(this);
        this.contato    = this.contato.bind(this);
        this.cidade     = this.cidade.bind(this);
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
        this.setState({contato: {"nome": event.target.value}});
    }

    cidade(event){
        this.setState({contato: {"cidade": event.target.value}});
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
                                        <input required type="text" value={this.state.contato["nome"]} onChange={this.contato}/>
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
                                            <input onChange={(e) => this.setState({range: {"00 a 18": e.target.value}})} type="number"/>
                                    </div> 
                                    <div className="modal-linha-bloco">
                                            <label>19 a 23</label>
                                            <input onChange={(e) => this.setState({range: {"19 a 23": e.target.value}})} type="number"/>
                                    </div>    
                                    <div className="modal-linha-bloco">
                                            <label>24 a 28</label>
                                            <input onChange={(e) => this.setState({range: {"24 a 28": e.target.value}})} type="number"/>
                                    </div>    
                                    <div className="modal-linha-bloco">
                                            <label>29 a 33</label>
                                            <input onChange={(e) => this.setState({range: {"29 a 33": e.target.value} })} type="number"/>
                                    </div>    
                                    <div className="modal-linha-bloco">
                                            <label>34 a 38</label>
                                            <input onChange={(e) => this.setState({range: {"34 a 38": e.target.value}})} type="number"/>
                                    </div>                                   
                                </div>      
                                <div className="modal-linha">
                                    <div className="modal-linha-bloco">
                                        <label>39 a 43</label>
                                        <input onChange={(e) => this.setState({range: {"39 a 43": e.target.value}})} type="number"/>
                                    </div> 
                                    <div className="modal-linha-bloco">
                                        <label>44 a 48</label>
                                        <input onChange={(e) => this.setState({range: {"44 a 48": e.target.value} })} type="number"/>
                                    </div>    
                                    <div className="modal-linha-bloco">
                                        <label>49 a 53</label>
                                        <input onChange={(e) => this.setState({range: {"49 a 53": e.target.value}})} type="number"/>
                                    </div>    
                                    <div className="modal-linha-bloco">
                                        <label>54 a 58</label>
                                        <input onChange={(e) => this.setState({range: {"54 a 58": e.target.value}})} type="number"/>
                                    </div>    
                                    <div className="modal-linha-bloco">
                                        <label>59 ou +</label>
                                        <input onChange={(e) => this.setState({range: {"59 ou +": e.target.value}})} type="number"/>
                                    </div>                                                                   
                                </div>
                                <div className="btnmodal">
                                    <button onClick={(e) => {                                          
                                        document.getElementById('myModal').style.display="none";
                                        let total = this.state.totalcred;
                                        for (var prop in this.state.range) {
                                            total = total + parseInt(this.state.range[prop]);
                                        }

                                        this.setState({totalcred: total});
                                        }
                                        }>
                                        Confirmar</button>     
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