import './styles.css';

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { LoginPage } from './pages/Login';
import { HomePage } from './pages/Home';
import { Cobrancas } from './pages/Cobrancas';
import { Clientes } from './pages/Clientes';
import { CriarCobranca } from './pages/CriarCobranca';
import { CriarCliente } from './pages/CriarCliente';
import { EditarCliente } from './pages/EditarCliente';

export const ContextoToken = React.createContext();

export default function App() {
	const [token, setToken] = React.useState(null); //useContext
	return (
		<BrowserRouter>
			<div className="conteudo">
				<Switch>
					<ContextoToken.Provider value={(token, setToken)}>
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
						{/* <Route path="*" render={() => <h1>404</h1>} /> */}
					</ContextoToken.Provider>
				</Switch>
			</div>
		</BrowserRouter>
	);
}
