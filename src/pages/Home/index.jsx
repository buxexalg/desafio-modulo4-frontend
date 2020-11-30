/* eslint-disable no-unused-vars */
import React from 'react';

import { fazerRequisicaoComBody } from '../../utils/requisicoes';

import { HeaderHome } from '../../components/headerHome/headerHome';

import clientes from '../../assets/images/clientes.png';
import cobrancas from '../../assets/images/cobrancas.png';

import './styles.css';
import { ContextoToken } from '../../App';
import { NavBar } from '../../components/navBar/navBar';
import { BannerRelatorio } from '../../components/bannerRelatorio/bannerRelatorio';

export function HomePage() {
	const { token, setToken } = React.useContext(ContextoToken);

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
									spanValor="0"
								/>
								<BannerRelatorio
									classe="vermelho"
									spanBanner="Inadimplentes"
									spanValor="0"
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
									spanValor="0"
								/>
								<BannerRelatorio
									classe="vermelho"
									spanBanner="Vencidas"
									spanValor="0"
								/>
								<BannerRelatorio
									classe="verde"
									spanBanner="Pagas"
									spanValor="0"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
