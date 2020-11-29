import React from 'react';

import { Link } from 'react-router-dom';

import './styles.css';

export function LinkNav(props) {
	return (
		<li className="linkNav">
			<img src={props.src} alt={props.alt} />
			<Link to={props.link}>{props.textoLink}</Link>
		</li>
	);
}
