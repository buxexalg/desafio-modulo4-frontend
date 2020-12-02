import React from 'react';

import './styles.css';

import logout from '../../assets/images/log-out.png';

export function BotaoDeslogar() {
	return (
		<a href="/" className="botaoDeslogar">
			<img src={logout} alt="Logout" />
			<span>Deslogar</span>
		</a>
	);
}
