import React from 'react';
import './styles.css';

export function BotaoLogin(props) {
	return (
		<button className="botaoLogin" type="submit">
			{props.conteudo}
		</button>
	);
}
