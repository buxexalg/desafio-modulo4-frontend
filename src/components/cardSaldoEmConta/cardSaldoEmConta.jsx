import React from 'react';

import iconeSaldo from '../../assets/images/saldo.png';

import './styles.css';

export function CardSaldoEmConta() {
	const [saldo, setSaldo] = React.useState('0');

	return (
		<div className="saldoEmConta">
			<ul>
				<li>
					<img src={iconeSaldo} alt="Ícone dinheiro" />
					<span>Saldo em conta</span>
				</li>
				<li>{'R$' + saldo * 100}</li>
			</ul>
		</div>
	);
}
