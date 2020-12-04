import React from 'react';

import iconeSaldo from '../../assets/images/saldo.png';
import { LoginContainer } from '../../App';

import './styles.css';

export function CardSaldoEmConta() {
	const [saldo, setSaldo] = React.useState(0);

	const { token, apiURL } = LoginContainer.useContainer();

	React.useEffect(() => {
		fetch(apiURL + '/relatorios', {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
			.then((response) => {
				return response.json();
			})
			.then(({ dados }) => {
				setSaldo(dados.relatorio.saldoEmConta);
			})
			.catch((err) => {
				console.error(err);
			});
	}, [token]);

	return (
		<div className="saldoEmConta">
			<ul>
				<li>
					<img src={iconeSaldo} alt="Ícone dinheiro" />
					<span>Saldo em conta</span>
				</li>
				<li>{'R$  ' + (saldo / 100).toFixed(2)}</li>
			</ul>
		</div>
	);
}
