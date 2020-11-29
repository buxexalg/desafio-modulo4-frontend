import React from 'react';
import './styles.css';

export function BotaoLogin(props) {
	return (
		<button id={props.id} className="botaoLogin" type="submit">
			{props.conteudo}
		</button>
	);
}
