/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BotaoLogin } from '../../components/botaoLogin/botaoLogin';
import { IconeUsuario } from '../../components/iconeUsuario/iconeUsuario';
import { useForm } from 'react-hook-form';

import { fazerRequisicaoComBody } from '../../utils/requisicoes';

import logo from '../../assets/images/logo.png';
import './styles.css';

export function HomePage(props) {
	const { token, setToken } = props;

	return (
		<>
			<div className="navBar">
				<img src={logo} alt="Logo Academy" />
				<nav>
					<ul>
						<li>
							<Link to="/home">Home</Link>
						</li>
						<li>
							<Link to="/cobrancas">Cobranças</Link>
						</li>
						<li>
							<Link to="/clientes">Clientes</Link>
						</li>
					</ul>
				</nav>
				<BotaoLogin conteudo="Criar cobrança" />
			</div>
			<div className="conteudoHome"></div>
			<div className="usuario">
				<IconeUsuario />
			</div>
		</>
	);
}
