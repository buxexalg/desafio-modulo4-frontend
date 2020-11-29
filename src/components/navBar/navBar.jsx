import React from 'react';

import { LinkNav } from '../linkNav/linkNav';
import { BotaoLogin } from '../../components/botaoLogin/botaoLogin';

import logo from '../../assets/images/logo-branca.png';
import clientes from '../../assets/images/clientes.png';
import cobrancas from '../../assets/images/cobrancas.png';
import home from '../../assets/images/home.png';

import './styles.css';

export function NavBar(props) {
	return (
		<div className="navBar">
			<div>
				<img src={logo} alt="Logo Academy" />
				<nav>
					<ul>
						<LinkNav
							src={clientes}
							alt={'Link para Home'}
							to="/home"
							textoLink="HOME"
						/>
						<LinkNav
							src={cobrancas}
							alt={'Link para Cobranças'}
							to="/cobrancas"
							textoLink="COBRANÇAS"
						/>
						<LinkNav
							src={home}
							alt={'Link para Clientes'}
							to="/clientes"
							textoLink="CLIENTES"
						/>
					</ul>
				</nav>
				<BotaoLogin id="botaoCobranca" conteudo="Criar cobrança" />
			</div>
		</div>
	);
}
