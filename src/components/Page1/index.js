import React, {Component} from 'react';
import '../Page1/style.css';
import Pageselecao from '../Pageselecao';
import InputMask from "react-input-mask";
import data from '../../jsonformatter.json';

class Page1 extends Component{
    constructor(props){
        super(props);
        this.state = {
            contato: {
                nome:               '',
                cidade:             '',
                telefone:           '',
                consultor:          '',
                telefone_contato:   '',
                celular_consultor:  '',
                email_consultor:    ''
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
                "59 ou +" : 0  
            },            
        };
        
        this.modal          = this.modal.bind(this);
        this.cadastrar      = this.cadastrar.bind(this);
        this.contato        = this.contato.bind(this);
        this.cidade         = this.cidade.bind(this);
        this.telefone       = this.telefone.bind(this);
        this.setRange       = this.setRange.bind(this);
        this.setTotalCred   = this.setTotalCred.bind(this);
        this.setDataContato = this.setDataContato.bind(this);
        this.getEstado      = this.getEstado.bind(this);
        this.getCidadesOf   = this.getCidadesOf.bind(this);
        this.createOptions  = this.createOptions.bind(this);
    }

   componentDidMount(){
        document.getElementById('container').style.display = 'none';         
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

    telefone(event) {
        this.setState(prevState => (
            {
                contato: {
                    ...prevState.telefone,
                    telefone: document.getElementById('input-telefone').value
                }
            }
        ));        
        event.preventDefault();
    }

    cidade(event){
        console.log(document.getElementById('select-estado').value);
        this.setState(prevState => (
            {
                contato: {
                    ...prevState.contato,
                    cidade: document.getElementById('select-estado').value
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

    setDataContato() {            
            var option = document.getElementById('select-estado').value;
            var cidade = document.getElementById(option).attributes['data-praca'].value;
            let dataContato = {
                nome: document.getElementById('input-contato').value,
                telefone: document.getElementById('input-telefone').value,
                cidade: document.getElementById('select-estado').value,
                consultor: document.getElementById('input-consultor').value,
                telefone_consultor: document.getElementById('input-telefone-consultor').value,
                celular_consultor: document.getElementById('input-celular-consultor').value,
                email_consultor: document.getElementById('input-email').value,
                praca: cidade
            }
            this.setState({contato: dataContato});

    }

    pagina2(e){
        document.getElementById('PrimeiroConteudo').style.display = 'none';
        document.getElementById('container').style.display = '';
        e.preventDefault();
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

    getCidadesOf(estado) {
        let cidades = [];
        data.tbl_cidade.filter((index) => {
            if(index.uf === estado) {
                var objCidade = {
                    nome: index.cidade, 
                    ibge: index.codigo_ibge
                }
                cidades.push(objCidade);
            }
        });

        return cidades;
    }

    createOptions(estado, cidade) {
        var select = document.getElementById('select-estado');
        var option = document.createElement('option');
        option.value = cidade.ibge;
        option.id = cidade.ibge;
        var praca = document.createAttribute("data-praca");
        var required = document.createAttribute("required");
        praca.value = cidade.nome + " - " + estado;
        required.value = true;
        option.setAttributeNode(praca);
        option.setAttributeNode(required);
        var optionText = document.createTextNode(cidade.nome + " - " + estado);
        option.appendChild(optionText);
        select.appendChild(option);
    }

    getEstado(e) {
        console.log(e.target.value);
        var cidades = this.getCidadesOf(e.target.value);
        var select = document.getElementById('select-estado');
        select.innerHTML = '';
        cidades.map((index) => {
            this.createOptions(e.target.value, index);
        });
        select.style.display = 'unset';
    }
    
    render(){
        return(
            <> 
               <div id="PrimeiroConteudo" className="container">
                    <div id="page1">
                        <form onSubmit={this.cadastrar , this.pagina2} className="form" id="form">
                            <div className="box">
                                <div className="box-superior">
                                    <h1>Dados básicos</h1>
                                </div>
                                <hr />
                                <p>( <sup>*</sup> ) Campos obrigatório</p>
                                <div className="box-contato">
                                    <div className="contato-first">
                                        <label>
                                            Cliente <sup>*</sup>
                                        </label>
                                        <div id="div-input">
                                            <input 
                                                required 
                                                id="input-contato" 
                                                type="text" 
                                                className="input-text"
                                            />
                                        </div>
                                    </div>
                                    <div className="contato-second">
                                        <div className="box-telefone">
                                            <label>
                                                Telefone <sup>*</sup>
                                            </label>
                                            <div id="div-input" >                                              
                                                <InputMask  
                                                    required
                                                    id="input-telefone"
                                                    type="text" 
                                                    mask="(99) 99999-9999"
                                                />
                                            </div>
                                                                            
                                        </div>
                                    </div>                                    
                                </div>
                                
                                <div className="box-meio">
                                    <div className="box-cidade">
                                        <label>
                                            Praça <sup>*</sup>
                                        </label>
                                            <select required id="select1" onChange={(e) => this.getEstado(e)}>
                                                <option selected disabled>Selecione UF...</option>
                                                <option value="SP">
                                                    SP
                                                </option>
                                                <option value="BA">
                                                    BA
                                                </option>
                                                <option value="DF">
                                                    DF
                                                </option>
                                            </select>
                                            <select required id="select-estado">
                                                <option selected disabled>Selecione estado...</option>
                                            </select>
                                    </div>
                                    <div className="box-cred">
                                        <label>
                                            Vidas <sup>*</sup>
                                        </label>
                                        <input 
                                            id="select2" 
                                            value={this.state.totalcred === 0 ? "" : this.state.totalcred} 
                                            onFocus={this.modal} 
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="box-corretor">
                                    <div className="box-contato">
                                        <div className="contato-first">
                                            <label>
                                                Nome do consultor <sup>*</sup>
                                            </label>
                                            <div id="div-input">
                                                <input 
                                                    required 
                                                    id="input-consultor" 
                                                    type="text" 
                                                    className="input-text"
                                                />
                                            </div>
                                        </div>
                                        <div className="contato-second">
                                            <div className="box-telefone">
                                                <label for="input-telefone-consultor">
                                                    Telefone <sup>*</sup>
                                                </label>
                                                <div id="div-input" >                                              
                                                    <InputMask  
                                                    required
                                                    id="input-telefone-consultor"
                                                    type="text" 
                                                    mask="(99) 99999-9999" 
                                                    />
                                                </div>                               
                                            </div>
                                        </div>                                    
                                    </div>
                                    <div className="box-meio">
                                        <div className="box-cidade">
                                            <label for="input-celular-consultor">
                                                Celular <sup>*</sup>
                                            </label>
                                            <div id="div-input" >                                              
                                                <InputMask
                                                    required
                                                    id="input-celular-consultor"
                                                    type="text" 
                                                    mask="(99) 99999-9999" 
                                                />
                                            </div>   
                                        </div>
                                        <div className="box-cred">
                                            <label for="input-email">
                                                E-mail <sup>*</sup>
                                            </label>
                                            <div id="div-input">
                                                <input 
                                                    required 
                                                    id="input-email" 
                                                    type="email" 
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="box-inferior">
                                    <button type="submit" onClick={this.setDataContato}>Confirmar</button>
                                </div>
                            </div>
                        </form>
                        <div id="myModal">
                            <div id="modal-content">                            
                                <div className="box-superior">
                                    <div className="box-superior-esquerda">
                                        <h1>Beneficiários</h1>
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
                </div>
                <Pageselecao 
                    telefone={this.state.contato.telefone} 
                    contato={this.state.contato} 
                    range={this.state.range}
                    vidas={this.state.totalcred}
                />
            </>
           
            )
    }

}

export default Page1;