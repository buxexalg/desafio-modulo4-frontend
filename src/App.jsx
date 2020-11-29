import './styles.css';

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { LoginPage } from './pages/Login';
import { HomePage } from './pages/Home';

export default function App() {
	const [token, setToken] = React.useState(null);
	return (
		<BrowserRouter>
			<div className="conteudo">
				<Switch>
					<Route
						exact
						path={['/', '/cadastro', '/recuperar-senha']}
						render={(props) => (
							<LoginPage token={token} setToken={setToken} />
						)}
					/>
					<Route
						exact
						path="/home"
						render={(props) => (
							<HomePage token={token} setToken={setToken} />
						)}
					/>
					<Route path="*" render={() => <h1>404</h1>} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}
