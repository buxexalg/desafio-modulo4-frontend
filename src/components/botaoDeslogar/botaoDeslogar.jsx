import React from 'react';

import './styles.css';

import logouticon from '../../assets/images/log-out.png';

import { LoginContainer } from '../../App';

export function BotaoDeslogar() {
	const { logout, token } = LoginContainer.useContainer();
	return (
		<a href="/" className="botaoDeslogar" onClick={() => logout()}>
			<img src={logouticon} alt="Logout" />
			<span>Deslogar</span>
		</a>
	);
}
