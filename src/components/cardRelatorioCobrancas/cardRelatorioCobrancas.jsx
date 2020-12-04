import React from 'react';

import printer from '../../assets/images/printer.png';

import { StatusCobranca } from '../statusCobranca/statusCobranca';

import './styles.css';

export function CardRelatorioCobrancas(props) {
	
	const data = props.vencimento.split('T')[0];
	const data0 = data.split('-').reverse().join('/');
	return (
		<tr className="CardRelatorioCobrancas">
			<td>{props.cliente}</td>
			<td>{props.descricao}</td>
			<td>{'R$' + props.valor / 100}</td>
			<StatusCobranca
				status={props.status}
				idcobranca={props.idcobranca}
			/>
			<td>{data0}</td>
			<td>
				<a href={props.linkdoboleto}>
					<img src={printer} alt="Gerar boleto" />
				</a>
			</td>
		</tr>
	);
}
