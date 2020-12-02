import React from 'react';

import { fazerRequisicaoComBody } from '../../utils/requisicoes';
import { useForm } from 'react-hook-form';

import './styles.css';
import { ContextoToken } from '../../App';
import { NavBar } from '../../components/navBar/navBar';
import { BotaoLogin } from '../../components/botaoLogin/botaoLogin';

export function EditarCliente() {
	const { token, setToken } = React.useContext(ContextoToken);

	const { register, handleSubmit, errors, trigger } = useForm({
		mode: 'all',
	});

	const nomeInputRef = React.useRef();
	const emailInputRef = React.useRef();
	const cpfInputRef = React.useRef();
	const telefoneInputRef = React.useRef();

	React.useEffect(() => trigger(), [trigger]);

	const qtdErros = Object.keys(errors).length;

	return (
		<div className="paginaEditarCliente">
			<NavBar />
			<div className="conteudoEditarCliente">
				<h1>{'// EDITAR CLIENTE'}</h1>
				<div className="formEditarCliente">
					<form
						onSubmit={handleSubmit(async (dados) => {
							console.log(dados);
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
						<div className="botoesEditarCliente">
							<a href="/home">Cancelar</a>
							<BotaoLogin
								disable={qtdErros > 0}
								conteudo="Criar cobrança"
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
