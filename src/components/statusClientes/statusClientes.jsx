import React from 'react';

import pendente from '../../assets/images/pendente.png';
import pago from '../../assets/images/pago.png';

import './styles.css';

export function StatusClientes(props) {
	if (props.status === 'EM DIA') {
		return (
			<td>
				<span className="statusEmDia">EM DIA</span>
			</td>
		);
	} else if (props.status === 'INADIMPLENTE') {
		return (
			<td>
				<span className="statusInadimplente">INADIMPLENTE</span>
			</td>
		);
	}
}
