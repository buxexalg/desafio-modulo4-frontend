import React from 'react';

import { fazerRequisicaoComBody } from '../../utils/requisicoes';
import { useForm } from 'react-hook-form';

import './styles.css';
import { LoginContainer } from '../../App';
import { NavBar } from '../../components/navBar/navBar';
import { BotaoLogin } from '../../components/botaoLogin/botaoLogin';
import { BotaoRedirect } from '../../components/botaoRedirect/botaoRedirect';

export function CriarCliente() {
	const { register, handleSubmit, errors, trigger } = useForm({
		mode: 'all',
	});

	const nomeInputRef = React.useRef();
	const emailInputRef = React.useRef();
	const cpfInputRef = React.useRef();
	const telefoneInputRef = React.useRef();

	React.useEffect(() => trigger(), [trigger]);

	const qtdErros = Object.keys(errors).length;

	const { token, apiURL } = LoginContainer.useContainer();

	return (
		<div className="paginaCriarCliente">
			<NavBar />
			<div className="conteudoCriarCliente">
				<h1>{'// CRIAR CLIENTE'}</h1>
				<div className="formCriarCliente">
					<form
						onSubmit={handleSubmit((dados, event) => {
							console.log(dados);
							fazerRequisicaoComBody(
								apiURL + '/clientes',
								'POST',
								dados,
								token
							);
							event.target.reset();
						})}
					>
						<label>
							<span>Nome</span> <br />
							<input
								type="text"
								name="nome"
								ref={(element) => {
									nomeInputRef.current = element;
									register({
										required: true,
										validate: () => element.checkValidity(),
									})(element);
								}}
							/>
						</label>
						<label>
							<span>E-mail</span> <br />
							<input
								type="email"
								name="email"
								ref={(element) => {
									emailInputRef.current = element;
									register({
										required: true,
										validate: () => element.checkValidity(),
									})(element);
								}}
							/>
						</label>
						<div className="finzinho">
							<label>
								<span> CPF </span> <br />
								<input
									type="text"
									name="cpf"
									ref={(element) => {
										cpfInputRef.current = element;
										register({
											required: true,
											validate: () =>
												element.checkValidity(),
										})(element);
									}}
								/>
							</label>
							<label>
								<span>Telefone</span> <br />
								<input
									type="tel"
									name="telefone"
									ref={(element) => {
										telefoneInputRef.current = element;
										register({
											required: true,
											validate: () =>
												element.checkValidity(),
										})(element);
									}}
								/>
							</label>
						</div>
						<div className="botoesCriarCliente">
							<BotaoRedirect link="/home" conteudo="Cancelar" />
							<BotaoLogin
								conteudo="Criar cobrança"
								disable={qtdErros > 0}
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
