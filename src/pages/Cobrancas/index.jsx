import React from 'react';

import { fazerRequisicaoComBody } from '../../utils/requisicoes';
import { useForm } from 'react-hook-form';
import { HeaderHome } from '../../components/headerHome/headerHome';

import './styles.css';
import { ContextoToken } from '../../App';
import { NavBar } from '../../components/navBar/navBar';
import { InputBusca } from '../../components/inputBusca/inputBusca';
import { CardRelatorioCobrancas } from '../../components/cardRelatorioCobrancas/cardRelatorioCobrancas';

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
							<table>
								<tr>
									<th>Cliente</th>
									<th>Descrição</th>
									<th>Valor</th>
									<th>Status</th>
									<th>Vencimento</th>
									<th>Boleto</th>
								</tr>
							</table>
						</div>
						<div className="cobrancasListaDeCobrancas">
							<table>
								<CardRelatorioCobrancas
									cliente="Fulano da Silva"
									descricao="100 coxinhas"
									valor="100000"
									status="PAGO"
									vencimento="10/10/2021"
								/>
								<CardRelatorioCobrancas
									cliente="Fulano da Silva"
									descricao="100 coxinhas"
									valor="100000"
									status="AGUARDANDO"
									vencimento="10/10/2021"
								/>
								<CardRelatorioCobrancas
									cliente="Fulano da Silva"
									descricao="100 coxinhas"
									valor="100000"
									status="VENCIDO"
									vencimento="10/10/2021"
								/>
								<CardRelatorioCobrancas
									cliente="Fulano da Silva"
									descricao="100 coxinhas"
									valor="100000"
									status="AGUARDANDO"
									vencimento="10/10/2021"
								/>
								<CardRelatorioCobrancas
									cliente="Fulano da Silva"
									descricao="100 coxinhas"
									valor="100000"
									status="PAGO"
									vencimento="10/10/2021"
								/>
								<CardRelatorioCobrancas
									cliente="Fulano da Silva"
									descricao="100 coxinhas"
									valor="100000"
									status="VENCIDO"
									vencimento="10/10/2021"
								/>
								<CardRelatorioCobrancas
									cliente="Fulano da Silva"
									descricao="100 coxinhas"
									valor="100000"
									status="PAGO"
									vencimento="10/10/2021"
								/>
								<CardRelatorioCobrancas
									cliente="Fulano da Silva"
									descricao="100 coxinhas"
									valor="100000"
									status="VENCIDO"
									vencimento="10/10/2021"
								/>
								<CardRelatorioCobrancas
									cliente="Fulano da Silva"
									descricao="100 coxinhas"
									valor="100000"
									status="PAGO"
									vencimento="10/10/2021"
								/>
								<CardRelatorioCobrancas
									cliente="Fulano da Silva"
									descricao="100 coxinhas"
									valor="100000"
									status="PAGO"
									vencimento="10/10/2021"
								/>
							</table>
						</div>
					</div>
					<div className="paginacao">
						<div>
							<span>{'<'}</span>
							<span>1</span>
							<span>1</span>
							<span>1</span>
							<span>1</span>
							<span>1</span>
							<span>1</span>
							<span>1</span>
							<span>1</span>
							<span>{'>'}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
