/* eslint-disable no-unused-vars */
import React from 'react';

import { fazerRequisicaoComBody } from '../../utils/requisicoes';
import { useForm } from 'react-hook-form';
import { HeaderHome } from '../../components/headerHome/headerHome';

import './styles.css';
import { ContextoToken } from '../../App';
import { NavBar } from '../../components/navBar/navBar';
import { InputBusca } from '../../components/inputBusca/inputBusca';
import { CardRelatorioClientes } from '../../components/cardRelatorioClientes/cardRelatorioClientes';

export function Clientes() {
	const { token, setToken } = React.useContext(ContextoToken);

	const { register, handleSubmit } = useForm();
	return (
		<div className="paginaClientes">
			<NavBar />
			<div className="conteudoClientes">
				<HeaderHome />
				<div className="Clientes">
					<div className="buscaClientes">
						<a
							href="/adicionar-cliente"
							className="botaoAdicionarCliente"
						>
							Adicionar Cliente
						</a>
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
					<div className="conteudoListaDeClientes">
						<div className="headerListaDeClientes">
							<table>
								<tr>
									<th>Cliente</th>
									<th>Cobranças Feitas</th>
									<th>Cobranças Recebidas</th>
									<th>Status</th>
								</tr>
							</table>
						</div>
						<div className="clientesListaDeClientes">
							<table>
								<CardRelatorioClientes
									nome="Aloalo Quem sou eu"
									email="email@email.com"
									telefone="+55 (71) 992216810"
									cobrancasFeitas="100000"
									cobrancasRecebidas="10000000000"
									status="EM DIA"
								/>
								<CardRelatorioClientes
									nome="Aloalo Quem sou eu"
									email="email@email.com"
									telefone="+55 (71) 992216810"
									cobrancasFeitas="100000"
									cobrancasRecebidas="10000000000"
									status="INADIMPLENTE"
								/>
								<CardRelatorioClientes
									nome="Aloalo Quem sou eu"
									email="email@email.com"
									telefone="+55 (71) 992216810"
									cobrancasFeitas="100000"
									cobrancasRecebidas="10000000000"
									status="EM DIA"
								/>
								<CardRelatorioClientes
									nome="Aloalo Quem sou eu"
									email="email@email.com"
									telefone="+55 (71) 992216810"
									cobrancasFeitas="100000"
									cobrancasRecebidas="10000000000"
									status="EM DIA"
								/>
								<CardRelatorioClientes
									nome="Aloalo Quem sou eu"
									email="email@email.com"
									telefone="+55 (71) 992216810"
									cobrancasFeitas="100000"
									cobrancasRecebidas="10000000000"
									status="INADIMPLENTE"
								/>
								<CardRelatorioClientes
									nome="Aloalo Quem sou eu"
									email="email@email.com"
									telefone="+55 (71) 992216810"
									cobrancasFeitas="100000"
									cobrancasRecebidas="10000000000"
									status="EM DIA"
								/>
								<CardRelatorioClientes
									nome="Aloalo Quem sou eu"
									email="email@email.com"
									telefone="+55 (71) 992216810"
									cobrancasFeitas="100000"
									cobrancasRecebidas="10000000000"
									status="EM DIA"
								/>
								<CardRelatorioClientes
									nome="Aloalo Quem sou eu"
									email="email@email.com"
									telefone="+55 (71) 992216810"
									cobrancasFeitas="100000"
									cobrancasRecebidas="10000000000"
									status="INADIMPLENTE"
								/>
								<CardRelatorioClientes
									nome="Aloalo Quem sou eu"
									email="email@email.com"
									telefone="+55 (71) 992216810"
									cobrancasFeitas="100000"
									cobrancasRecebidas="10000000000"
									status="EM DIA"
								/>
								<CardRelatorioClientes
									nome="Aloalo Quem sou eu"
									email="email@email.com"
									telefone="+55 (71) 992216810"
									cobrancasFeitas="100000"
									cobrancasRecebidas="10000000000"
									status="INADIMPLENTE"
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
