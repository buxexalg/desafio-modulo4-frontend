import './styles.css';

import React from 'react';
import PrivateRoute from './components/privateRoute/privateRoute';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { LoginPage } from './pages/Login';
import { HomePage } from './pages/Home';
import { Cobrancas } from './pages/Cobrancas';
import { Clientes } from './pages/Clientes';
import { CriarCobranca } from './pages/CriarCobranca';
import { CriarCliente } from './pages/CriarCliente';
import { EditarCliente } from './pages/EditarCliente';
import { createContainer } from 'unstated-next';
import { fazerRequisicaoComBody } from './utils/requisicoes';

require('dotenv').config();

function useLogin(estadoInicial = null) {
	const apiURL = 'http://localhost:8081';
	const [token, setToken] = React.useState(localStorage.getItem('token'));

	React.useEffect(() => {
		token
			? localStorage.setItem('token', token)
			: localStorage.removeItem('token');
	}, [token]);

	function login(email, senha) {
		fazerRequisicaoComBody(apiURL + '/auth', 'POST', {
			email,
			senha,
		})
			.then((res) => res.json())
			.then(({ dados }) => {
				if (dados.token) {
					setToken(dados.token);
					window.location.href = '/home';
				} else {
					alert('Usuário e/ou senha incorretos.');
				}
			});
	}

	function logout() {
		setToken(null);
	}

	return { token, login, logout, apiURL };
}

export const LoginContainer = createContainer(useLogin);

export default function App() {
	return (
		<BrowserRouter>
			<LoginContainer.Provider>
				<div className="conteudo">
					<Switch>
						<Route
							exact
							path={['/', '/cadastro']}
							component={LoginPage}
						/>
						<Route exact path="/home" component={HomePage} />
						<Route exact path="/cobrancas" component={Cobrancas} />
						<Route
							exact
							path="/criar-cobranca"
							component={CriarCobranca}
						/>
						<Route exact path="/clientes" component={Clientes} />
						<Route
							exact
							path="/adicionar-cliente"
							component={CriarCliente}
						/>
						<Route
							exact
							path="/editar-cliente"
							component={EditarCliente}
						/>
						<Route exact path="*" component={() => <h1>404</h1>} />
					</Switch>
				</div>
			</LoginContainer.Provider>
		</BrowserRouter>
	);
}
