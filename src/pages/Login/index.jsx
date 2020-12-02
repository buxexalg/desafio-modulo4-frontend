import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { BotaoLogin } from '../../components/botaoLogin/botaoLogin';
import { InputLogin } from '../../components/inputLogin/inputLogin';
import { fazerRequisicaoComBody } from '../../utils/requisicoes';

import logo from '../../assets/images/logo.png';
import './styles.css';
import { ContextoToken } from '../../App';

export function LoginPage() {
	const currentPath = useLocation().pathname;
	const [senhaExposta, setSenhaExposta] = React.useState(false);
	const { token, setToken } = React.useContext(ContextoToken);

	const { register, handleSubmit } = useForm();

	return (
		<div className="main">
			<div className="areaLogin">
				<img src={logo} alt="Logo Academy" />
				{currentPath === '/' && (
					<form
						onSubmit={handleSubmit(async (dados) => {
							console.log(dados);
							fazerRequisicaoComBody(
								'https://cubos-desafio-4.herokuapp.com/auth',
								'POST',
								dados
							)
								.then((response) => response.json())
								.then((responseJson) => {
									setToken(responseJson.dados.token);
								});
						})}
					>
						<InputLogin
							label="E-mail"
							type="email"
							name="email"
							placeholder="exemplo@email.com"
							register={register}
						/>
						<InputLogin
							label="Senha"
							type={!senhaExposta ? 'password' : 'text'}
							name="senha"
							placeholder={null}
							senhaExposta={senhaExposta}
							setSenhaExposta={setSenhaExposta}
							register={register}
						/>
						<BotaoLogin conteudo="Entrar" />
					</form>
				)}
				{currentPath === '/cadastro' && (
					<form
						onSubmit={handleSubmit(async (dados) => {
							fazerRequisicaoComBody(
								'https://cubos-desafio-4.herokuapp.com/auth',
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
							register={register}
						/>
						<InputLogin
							label="E-mail"
							type="email"
							name="email"
							placeholder="exemplo@gmail.com"
							register={register}
						/>
						<InputLogin
							label="Senha"
							type={!senhaExposta ? 'password' : 'text'}
							name="senha"
							placeholder={null}
							senhaExposta={senhaExposta}
							setSenhaExposta={setSenhaExposta}
							register={register}
						/>

						<BotaoLogin conteudo="Criar conta" />
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
