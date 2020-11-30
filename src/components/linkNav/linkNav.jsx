import React from 'react';

import { Link } from 'react-router-dom';

import './styles.css';

export function LinkNav(props) {
	return (
		<Link to={props.link}>
			<li className="linkNav">
				<img src={props.src} alt={props.alt} />
				<span>{props.textoLink}</span>
			</li>
		</Link>
	);
}
