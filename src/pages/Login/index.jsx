import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { BotaoLogin } from '../../components/botaoLogin/botaoLogin';
import { InputLogin } from '../../components/inputLogin/inputLogin';
import { InputMostrarSenha } from '../../components/inputMostrarSenha/inputMostrarSenha';

import logo from '../../assets/images/logo.png';
import './styles.css';

export function LoginPage(props) {
	const currentPath = useLocation().pathname;
	const [senhaExposta, setSenhaExposta] = React.useState(false);

	return (
		<div className="main">
			<div className="areaLogin">
				<img src={logo} alt="Logo Academy" />
				{currentPath === '/' && (
					<>
						<InputLogin
							label="E-mail"
							type="email"
							name="email"
							placeholder="exemplo@gmail.com"
						/>
						<InputLogin
							label="Senha"
							type={!senhaExposta ? 'password' : 'text'}
							name="password"
							placeholder={null}
							senhaExposta={senhaExposta}
							setSenhaExposta={setSenhaExposta}
						/>

						<Link to="/recuperar-senha" className="esqueciSenha">
							Esqueci minha senha
						</Link>
						<BotaoLogin conteudo="Entrar" />
					</>
				)}
				{currentPath === '/cadastro' && (
					<>
						<InputLogin
							label="Nome"
							type="text"
							name="Nome"
							placeholder={null}
						/>
						<InputLogin
							label="E-mail"
							type="email"
							name="email"
							placeholder="exemplo@gmail.com"
						/>
						<InputLogin
							label="Senha"
							type={!senhaExposta ? 'password' : 'text'}
							name="password"
							placeholder={null}
							senhaExposta={senhaExposta}
							setSenhaExposta={setSenhaExposta}
						/>

						<BotaoLogin conteudo="Criar conta" />
					</>
				)}{' '}
				{currentPath === '/recuperar-senha' && (
					<>
						<p className="informacaoResetarSenha">
							Informe o e-mail associado a sua conta e vamos te
							enviar instruções para resetar sua senha
						</p>
						<InputLogin
							label="E-mail"
							type="email"
							name="email"
							placeholder="exemplo@gmail.com"
						/>
						<BotaoLogin conteudo="Recuperar senha" />
					</>
				)}
			</div>

			<div className="cadastreSe">
				{currentPath === '/recuperar-senha' && ''}
				{currentPath === '/cadastro' && (
					<span>
						Já possui uma conta? <Link to="/">Acesse agora!</Link>
					</span>
				)}
				{currentPath === '/' && (
					<span>
						Não tem uma conta?{' '}
						<Link to="/cadastro">Cadastre-se!</Link>
					</span>
				)}
			</div>
		</div>
	);
}
