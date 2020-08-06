import React, {Component} from 'react';
import './modal.css';


class Modal extends Component {

	constructor(props) {
		super(props);
		this.state = {
			planoEscolhido: 'Escolha um plano',
			planoDetalhado: 'Detalhe do plano'
		}

		this.hendleCloseClick = this.hendleCloseClick.bind(this);
		this.submit = this.submit.bind(this);
	}


	hendleCloseClick(e) {
		if (e.target.id == "modal") {
			this.props.onClose();
		}
	}

	submit() {

		alert(`plano: ${this.props.plano} , select1: ${this.state.planoEscolhido}, select2: ${this.state.planoDetalhado} `);
	}



	render() {
		return (
			<div id="modal" className="modal" onClick={this.hendleCloseClick} >
				<div className="containerModal">
					<div className="header">
						<p className="brand">Sul América</p>
						<button className="close" onClick={this.props.onClose} ><span className="close">&times;</span></button>
					</div>
					<div className="content" >
							<select className="selectModal" value={this.state.planoEscolhido} onChange={ e => this.setState({planoEscolhido:e.target.value}) }>
								<option value="">{this.state.planoEscolhido}</option>
								<option value="Sul América - Qualicorp">Sul América - Qualicorp</option>
								<option value="Sul América - Qualicorp2">Sul América - Qualicorp2</option>
							</select>
							<select className="selectModal" value={this.state.planoDetalhado} onChange={ e => this.setState({planoDetalhado:e.target.value}) }>
								<option value="">{this.state.planoDetalhado}</option>
								<option value="Sul América 506 Hospitalar - Qualicorp">Sul América 506 Hospitalar - Qualicorp</option>
								<option value="Sul América 506 Hospitalar - Qualicorp3">Sul América 506 Hospitalar - Qualicorp3</option>
							</select>
					</div>
					<div className="buttonArea">
						<button onClick={this.submit} className="submit">Enviar</button>
					</div>
				</div>
			</div>
		)
	}

}


export default Modal;