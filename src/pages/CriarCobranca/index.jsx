import React from 'react';

import { fazerRequisicaoComBody } from '../../utils/requisicoes';
import { useForm } from 'react-hook-form';

import './styles.css';
import { ContextoToken } from '../../App';
import { NavBar } from '../../components/navBar/navBar';
import { BotaoLogin } from '../../components/botaoLogin/botaoLogin';

export function CriarCobranca() {
	const { token, setToken } = React.useContext(ContextoToken);

	const { register, handleSubmit, errors, trigger } = useForm({
		mode: 'all',
	});

	const clienteInputRef = React.useRef();
	const descricaoInputRef = React.useRef();
	const valorInputRef = React.useRef();
	const vencimentoInputRef = React.useRef();

	React.useEffect(() => trigger(), [trigger]);

	const qtdErros = Object.keys(errors).length;

	return (
		<div className="paginaCriarCobranca">
			<NavBar />
			<div className="conteudoCriarCobranca">
				<h1>{'// CRIAR COBRANÇA'}</h1>
				<div className="formCriarCobranca">
					<form
						onSubmit={handleSubmit(async (dados) => {
							console.log(dados);
						})}
					>
						<label>
							<span> Cliente</span> <br />
							<select
								name="Clientes"
								id="clientes"
								className="selectCriarCobrancas"
								ref={(element) => {
									clienteInputRef.current = element;
									register({
										required: true,
										validate: () => element.checkValidity(),
									})(element);
								}}
							>
								<option value="" disabled selected>
									Selecione a cliente
								</option>
								<option value="a">a</option>
								<option value="a">a</option>
								<option value="a">a</option>
							</select>
						</label>
						<label>
							<span>Descrição</span> <br />
							<textarea
								name="Descrição"
								id="descricao"
								cols="30"
								rows="10"
								ref={(element) => {
									descricaoInputRef.current = element;
									register({
										required: true,
										validate: () => element.checkValidity(),
									})(element);
								}}
							></textarea>
							<br />
							<span className="descricaoTextarea">
								A descrição informada será impressa no boleto.
							</span>
						</label>
						<div className="finzinho">
							<label>
								<span> Valor </span> <br />
								<input
									type="money"
									name="valor"
									ref={(element) => {
										valorInputRef.current = element;
										register({
											required: true,
											validate: () =>
												element.checkValidity(),
										})(element);
									}}
								/>
							</label>
							<label>
								<span>Vencimento</span> <br />
								<input
									type="date"
									name="vencimento"
									ref={(element) => {
										vencimentoInputRef.current = element;
										register({
											required: true,
											validate: () =>
												element.checkValidity(),
										})(element);
									}}
								/>
							</label>
						</div>
						<div className="botoesCriarCobranca">
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
