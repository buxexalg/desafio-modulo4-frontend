/* eslint-disable no-unused-vars */
import React from 'react';

import { fazerRequisicaoComBody } from '../../utils/requisicoes';
import { useForm } from 'react-hook-form';
import { HeaderHome } from '../../components/headerHome/headerHome';

import './styles.css';
import { LoginContainer } from '../../App';
import { NavBar } from '../../components/navBar/navBar';
import { InputBusca } from '../../components/inputBusca/inputBusca';
import { CardRelatorioClientes } from '../../components/cardRelatorioClientes/cardRelatorioClientes';
import { BotaoRedirect } from '../../components/botaoRedirect/botaoRedirect';

export function Clientes() {
	const { token, apiURL } = LoginContainer.useContainer();
	const [arrayClientes, setArrayClientes] = React.useState([]);
	const [offset, setOffset] = React.useState(0);
	const [busca, setBusca] = React.useState('');
	const [paginas, setPaginas] = React.useState(0);
	const [paginaAtual, setPaginaAtual] = React.useState(0);

	const paginacao = [];
	for (let i = 0; i < paginas; i++) {
		paginacao.push(
			<span
				onClick={() => {
					setOffset((i + 1) * 10);
				}}
			>
				{i + 1}
			</span>
		);
	}

	React.useEffect(() => {
		elementos = [];
		if (busca === '') {
			fetch(apiURL + `/clientes?clientesPorPagina=10&offset=${offset}`, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
				.then((response) => {
					return response.json();
				})
				.then(({ dados }) => {
					setPaginaAtual(dados.paginaAtual);
					setPaginas(dados.totalDePaginas);
					setArrayClientes(dados.clientes);
				})
				.catch((err) => {
					console.error(err);
				});
		} else {
			fetch(
				apiURL +
					`/clientes?busca=${busca}&clientesPorPagina=10&offset=${offset}`,
				{
					method: 'GET',
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			)
				.then((response) => {
					return response.json();
				})
				.then(({ dados }) => {
					console.log(dados);
					setPaginaAtual(dados.paginaAtual);
					setPaginas(dados.totalDePaginas);
					setArrayClientes(dados.clientes);
				})
				.catch((err) => {
					console.error(err);
				});
		}
	}, [offset]);

	let elementos = [];
	const { register, handleSubmit } = useForm();
	return (
		<div className="paginaClientes">
			<NavBar />
			<div className="conteudoClientes">
				<HeaderHome />
				<div className="Clientes">
					<div className="buscaClientes">
						<BotaoRedirect
							link="/adicionar-cliente"
							conteudo="Adicionar Cliente"
						/>
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
								{arrayClientes.forEach((elemento) => {
									elementos.push(
										<CardRelatorioClientes
											nome={elemento.nome}
											email={elemento.email}
											telefone={elemento.telefone}
											cobrancasFeitas={
												elemento.cobrancasfeitas
											}
											cobrancasRecebidas={
												elemento.cobrancasrecebidas
											}
											status={elemento.estaInadimplente}
										/>
									);
								})}
								{elementos}
							</table>
						</div>
					</div>
					<div className="paginacao">
						<div>
							<span
								onClick={() => {
									if (offset > 10) {
										setOffset(offset - 10);
									}
								}}
							>
								{'<'}
							</span>
							{paginacao}
							<span
								onClick={() => {
									setOffset(offset + 10);
								}}
							>
								{'>'}
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
