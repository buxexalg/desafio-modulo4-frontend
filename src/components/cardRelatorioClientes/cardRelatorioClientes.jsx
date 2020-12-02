import React from 'react';


import { StatusClientes } from '../statusClientes/statusClientes';
import phone from '../../assets/images/phone.png';
import email from '../../assets/images/email.png';
import edit from '../../assets/images/edit.png';

import './styles.css';

export function CardRelatorioClientes(props) {
	return (
		<tr className="CardRelatorioClientes">
			<td>
				<ul>
					<li>{props.nome}</li>
					<li>
						<img src={email} alt="Email" />
						{props.email}
					</li>
					<li>
						<img src={phone} alt="Telefone" />
						{props.telefone}
					</li>
				</ul>
			</td>
			<td>{'R$' + props.cobrancasFeitas / 100}</td>
			<td>{'R$' + props.cobrancasRecebidas / 100}</td>
			<StatusClientes status={props.status} />
			<td>
				<a href="/editar-cliente">
					<img src={edit} alt="Editar cliente" />
				</a>
			</td>
		</tr>
	);
}
