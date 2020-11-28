import React from 'react';

import mostrarSenha from '../../assets/svg/mostrarSenha.svg';
import ocultarSenha from '../../assets/svg/ocultarSenha.svg';

import './styles.css';

export function InputMostrarSenha(props) {
	const { senhaExposta, setSenhaExposta } = props;
	return (
		<input
			className="mostrarSenha"
			src={senhaExposta ? mostrarSenha : ocultarSenha}
			alt="Mostrar Senha"
			type="image"
			onClick={(event) => {
				event.preventDefault();
				setSenhaExposta(!senhaExposta);
			}}
		></input>
	);
}
