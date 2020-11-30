import React from 'react';

import { InputMostrarSenha } from '../inputMostrarSenha/inputMostrarSenha';
import buscar from '../../assets/images/buscar.png';

import './styles.css';

export function InputBusca(props) {
	return (
		<>
			<input
				type={props.type}
				name={props.name}
				placeholder={props.placeholder}
				ref={props.register}
				className="inputComponenteBusca"
			/>
			<input type="image" src={buscar} alt="Buscar" className="inputImagemBusca" />
			<input type="submit" value="Buscar" className="inputBotaoBusca" />
		</>
	);
}
