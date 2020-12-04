import React from 'react';

import pendente from '../../assets/images/pendente.png';
import pago from '../../assets/images/pago.png';

import './styles.css';

export function StatusClientes(props) {
	if (!props.status) {
		return (
			<td>
				<span className="statusEmDia">EM DIA</span>
			</td>
		);
	} else if (props.status) {
		return (
			<td>
				<span className="statusInadimplente">INADIMPLENTE</span>
			</td>
		);
	}
}
