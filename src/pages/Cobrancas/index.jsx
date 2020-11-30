/* eslint-disable no-unused-vars */
import React from 'react';

import { fazerRequisicaoComBody } from '../../utils/requisicoes';
import { useForm } from 'react-hook-form';
import { HeaderHome } from '../../components/headerHome/headerHome';

import './styles.css';
import { ContextoToken } from '../../App';
import { NavBar } from '../../components/navBar/navBar';
import { InputBusca } from '../../components/inputBusca/inputBusca';

export function Cobrancas() {
	const { token, setToken } = React.useContext(ContextoToken);

	const { register, handleSubmit } = useForm();
	return (
		<div className="paginaCobrancas">
			<NavBar />
			<div className="conteudoCobrancas">
				<HeaderHome />
				<div className="cobrancas">
					<div className="buscaCobrancas">
						<form
							onSubmit={handleSubmit((dados, event) => {
								console.log(dados);
								event.target.reset();
							})}
						>
							<InputBusca
								type="text"
								name="textoDaBusca"
								placeholder="Procurar por Nome, E-mail ou CPF"
								register={register}
							/>
						</form>
					</div>
					<div className="conteudoListaDeCobrancas">
						<div className="headerListaDeCobrancas">
							
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
