/* eslint-disable no-unused-vars */
import React from 'react';

import { fazerRequisicaoComBody } from '../../utils/requisicoes';

import { HeaderHome } from '../../components/headerHome/headerHome';

import clientes from '../../assets/images/clientes.png';
import cobrancas from '../../assets/images/cobrancas.png';

import './styles.css';
import { LoginContainer } from '../../App';
import { NavBar } from '../../components/navBar/navBar';
import { BannerRelatorio } from '../../components/bannerRelatorio/bannerRelatorio';

export function HomePage() {
	const { token, apiURL } = LoginContainer.useContainer();

	const [emDia, setEmDia] = React.useState(0);
	const [inadimplentes, setinadimplentes] = React.useState(0);
	const [previstas, setPrevistas] = React.useState(0);
	const [vencidas, setVencidas] = React.useState(0);
	const [pagas, setPagas] = React.useState(0);

	React.useEffect(() => {
		fetch(apiURL + '/relatorios', {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
			.then((response) => {
				return response.json();
			})
			.then(({ dados }) => {
				setEmDia(dados.relatorio.qtdClientesAdimplentes);
				setinadimplentes(dados.relatorio.qtdClientesInadimplentes);
				setPrevistas(dados.relatorio.qtdCobrancasPrevistas);
				setVencidas(dados.relatorio.qtdCobrancasVencidas);
				setPagas(dados.relatorio.qtdCobrancasPagas);
			})
			.catch((err) => {
				console.error(err);
			});
	}, [token]);

	return (
		<div className="home">
			<NavBar />
			<div className="conteudoHome">
				<HeaderHome />
				<div className="relatorio">
					<div className="seletorTempo">
						<button>Este mês</button>
						<button>Este ano</button>
						<button>Desde o início</button>
					</div>
					<div className="cardsRelatorio">
						<div className="cardRelatorio">
							<div className="headerCard">
								<img src={clientes} alt="Clientes" />
								<span>Clientes</span>
							</div>
							<div className="banners">
								<BannerRelatorio
									classe="verde"
									spanBanner="Em dia"
									spanValor={emDia}
								/>
								<BannerRelatorio
									classe="vermelho"
									spanBanner="Inadimplentes"
									spanValor={inadimplentes}
								/>
							</div>
						</div>
						<div className="cardRelatorio">
							<div className="headerCard">
								<img src={cobrancas} alt="Cobranças" />
								<span>Cobranças</span>
							</div>
							<div className="banners">
								<BannerRelatorio
									classe="azul"
									spanBanner="Previstas"
									spanValor={previstas}
								/>
								<BannerRelatorio
									classe="vermelho"
									spanBanner="Vencidas"
									spanValor={vencidas}
								/>
								<BannerRelatorio
									classe="verde"
									spanBanner="Pagas"
									spanValor={pagas}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
