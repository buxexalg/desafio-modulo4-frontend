import React from 'react';
import { Link, useLocation, Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { BotaoLogin } from '../../components/botaoLogin/botaoLogin';
import { InputLogin } from '../../components/inputLogin/inputLogin';
import { fazerRequisicaoComBody } from '../../utils/requisicoes';

import logo from '../../assets/images/logo.png';
import './styles.css';
import { LoginContainer } from '../../App';

require('dotenv').config();

export function LoginPage() {
	const currentPath = useLocation().pathname;
	const [senhaExposta, setSenhaExposta] = React.useState(false);
	const { login, apiURL } = LoginContainer.useContainer();

	const { register, handleSubmit, errors, trigger, reset } = useForm({
		mode: 'all',
	});

	const nomeInputRef = React.useRef();
	const emailInputRef = React.useRef();

	React.useEffect(() => trigger(), [trigger]);

	const qtdErros = Object.keys(errors).length;

	return (
		<div className="main">
			<div className="areaLogin">
				<img src={logo} alt="Logo Academy" />
				{currentPath === '/' && (
					<form
						onSubmit={handleSubmit(async (dados) => {
							await login(dados.email, dados.senha);
							reset();
						})}
					>
						<InputLogin
							label="E-mail"
							type="email"
							name="email"
							placeholder="exemplo@email.com"
							register={(element) => {
								emailInputRef.current = element;
								register({
									required: true,
									validate: () => element.checkValidity(),
								})(element);
							}}
						/>
						<InputLogin
							label="Senha"
							type={!senhaExposta ? 'password' : 'text'}
							name="senha"
							placeholder={null}
							senhaExposta={senhaExposta}
							setSenhaExposta={setSenhaExposta}
							register={register({ required: true })}
						/>
						<BotaoLogin conteudo="Entrar" disable={qtdErros > 0} />
					</form>
				)}
				{currentPath === '/cadastro' && (
					<form
						onSubmit={handleSubmit(async (dados) => {
							fazerRequisicaoComBody(
								apiURL + '/usuarios',
								'POST',
								dados
							)
								.then((response) => response.json())
								.then((responseJson) => {
									window.location.href = '/';
								});
						})}
					>
						<InputLogin
							label="Nome"
							type="text"
							name="nome"
							placeholder={null}
							register={(element) => {
								nomeInputRef.current = element;
								register({
									required: true,
									validate: () => element.checkValidity(),
								})(element);
							}}
						/>
						<InputLogin
							label="E-mail"
							type="email"
							name="email"
							placeholder="exemplo@gmail.com"
							register={(element) => {
								emailInputRef.current = element;
								register({
									required: true,
									validate: () => element.checkValidity(),
								})(element);
							}}
						/>
						<InputLogin
							label="Senha"
							type={!senhaExposta ? 'password' : 'text'}
							name="senha"
							placeholder={null}
							senhaExposta={senhaExposta}
							setSenhaExposta={setSenhaExposta}
							register={register({ required: true })}
						/>

						<BotaoLogin
							conteudo="Criar conta"
							disable={qtdErros > 0}
						/>
					</form>
				)}{' '}
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
