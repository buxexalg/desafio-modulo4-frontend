import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export function BotaoRedirect(props) {
	return (
		<Link to={props.link} className="botaoRedirect">
			{props.conteudo}
		</Link>
	);
}
