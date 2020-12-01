import React from 'react';

import printer from '../../assets/images/printer.png';

import { StatusCobranca } from '../statusCobranca/statusCobranca';

import './styles.css';

export function CardRelatorioCobrancas(props) {
	return (
		<tr className="CardRelatorioCobrancas">
			<td>{props.cliente}</td>
			<td>{props.descricao}</td>
			<td>{'R$' + props.valor / 100}</td>
			<StatusCobranca status={props.status} />
			<td>{props.vencimento}</td>
			<td>
				<button>
					<img src={printer} alt="Gerar boleto" />
				</button>
			</td>
		</tr>
	);
}
