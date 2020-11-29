import React from 'react';

import { IconeUsuario } from '../iconeUsuario/iconeUsuario';
import { CardSaldoEmConta } from '../cardSaldoEmConta/cardSaldoEmConta';

import './styles.css';

export function HeaderHome(props) {
	return (
		<div className="headerHome">
			<CardSaldoEmConta />
			<div>
				<IconeUsuario />
			</div>
		</div>
	);
}
