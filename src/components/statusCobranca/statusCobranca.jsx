import React from 'react';

import pendente from '../../assets/images/pendente.png';
import pago from '../../assets/images/pago.png';

import { fazerRequisicaoComBody } from '../../utils/requisicoes';
import { LoginContainer } from '../../App';
import './styles.css';

export function StatusCobranca(props) {
	const { token, apiURL } = LoginContainer.useContainer();
	if (props.status === 'AGUARDANDO') {
		return (
			<td className="statusPendente">
				<button
					onClick={() => {
						fazerRequisicaoComBody(
							apiURL + '/cobrancas',
							'PUT',
							{ idDaCobranca: props.idcobranca },
							token
						);
					}}
				>
					<img src={pendente} alt="Pendente" />
				</button>
				<span>PENDENTE</span>
			</td>
		);
	} else if (props.status === 'PAGO') {
		return (
			<>
				<td className="statusPago">
					<button>
						<img src={pago} alt="Pago" />
					</button>
					<span>PAGO</span>
				</td>
			</>
		);
	} else if (props.status === 'VENCIDO') {
		return (
			<td className="statusVencido">
				<span>VENCIDO</span>
			</td>
		);
	}
}
