import React from 'react';

import { InputMostrarSenha } from '../../components/inputMostrarSenha/inputMostrarSenha';

import './styles.css';

export function InputLogin(props) {
	return (
		<label className="labelInput">
			{props.label} <br />
			<input
				type={props.type}
				name={props.name}
				placeholder={props.placeholder}
			/>
			{props.name === 'password' && (
				<InputMostrarSenha
					senhaExposta={props.senhaExposta}
					setSenhaExposta={props.setSenhaExposta}
				/>
			)}
		</label>
	);
}
