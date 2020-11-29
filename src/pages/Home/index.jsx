/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IconeUsuario } from '../../components/iconeUsuario/iconeUsuario';
import { useForm } from 'react-hook-form';

import { fazerRequisicaoComBody } from '../../utils/requisicoes';

import { HeaderHome } from '../../components/headerHome/headerHome';

import './styles.css';
import { ContextoToken } from '../../App';
import { NavBar } from '../../components/navBar/navBar';

export function HomePage(props) {
	const { token, setToken } = React.useContext(ContextoToken);

	return (
		<div className="home">
			<NavBar />
			<div className="conteudoHome">
				<HeaderHome />
				<div>
					
				</div>
			</div>
		</div>
	);
}
