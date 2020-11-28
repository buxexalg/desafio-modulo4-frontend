import './styles.css';

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { LoginPage } from './pages/Login';

export default function App() {
	return (
		<BrowserRouter>
			<div className="conteudo">
				<Switch>
					<Route
						exact
						path={['/', '/cadastro', '/recuperar-senha']}
						component={LoginPage}
					/>
					<Route path="*" render={() => <h1>404</h1>} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}
