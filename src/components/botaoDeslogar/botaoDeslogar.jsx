import React from 'react';

import './styles.css';

import logout from '../../assets/images/log-out.png';

export function BotaoDeslogar(props) {
	return (
		<button>
			<img src={logout} alt="Logout" />
			<span>Deslogar</span>
		</button>
	);
}