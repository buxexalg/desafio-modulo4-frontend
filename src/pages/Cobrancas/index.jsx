import React from 'react';

import { fazerRequisicaoComBody } from '../../utils/requisicoes';
import { useForm } from 'react-hook-form';
import { HeaderHome } from '../../components/headerHome/headerHome';

import './styles.css';
import { LoginContainer } from '../../App';
import { NavBar } from '../../components/navBar/navBar';
import { InputBusca } from '../../components/inputBusca/inputBusca';
import { CardRelatorioCobrancas } from '../../components/cardRelatorioCobrancas/cardRelatorioCobrancas';

export function Cobrancas() {
	const { token, apiURL } = LoginContainer.useContainer();
	const [arrayCobrancas, setArrayCobrancas] = React.useState([]);
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
			fetch(
				apiURL + `/cobrancas?cobrancasPorPagina=10&offset=${offset}`,
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
					setPaginaAtual(dados.paginaAtual);
					setPaginas(dados.totalDePaginas);
					setArrayCobrancas(dados.cobrancas);
				})
				.catch((err) => {
					console.error(err);
				});
		} else {
			fetch(
				apiURL +
					`/cobrancas?busca=${busca}&cobrancasPorPagina=10&offset=${offset}`,
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
					setArrayCobrancas(dados.cobrancas);
				})
				.catch((err) => {
					console.error(err);
				});
		}
	}, [offset]);

	let elementos = [];
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
								setBusca(dados.textoDaBusca);
								setOffset(1);
								setOffset(0);
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
								{arrayCobrancas.forEach((elemento) => {
									elementos.push(
										<CardRelatorioCobrancas
											cliente={elemento.nome}
											descricao={
												elemento.descricaocobranca
											}
											valor={elemento.valorcobranca}
											status={elemento.status}
											vencimento={elemento.vencimento}
											link={elemento.linkdoboleto}
											idcobranca={elemento.idcobranca}
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
