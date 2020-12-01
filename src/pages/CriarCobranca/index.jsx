import React from 'react';

import { fazerRequisicaoComBody } from '../../utils/requisicoes';
import { useForm } from 'react-hook-form';

import './styles.css';
import { ContextoToken } from '../../App';
import { NavBar } from '../../components/navBar/navBar';
import { InputLogin } from '../../components/inputLogin/inputLogin';
import { BotaoLogin } from '../../components/botaoLogin/botaoLogin';

export function CriarCobranca() {
	const { token, setToken } = React.useContext(ContextoToken);

	const { register, handleSubmit } = useForm();
	return (
		<div className="paginaCriarCobranca">
			<NavBar />
			<div className="conteudoCriarCobranca">
				<h1>{'// CRIAR COBRANÇA'}</h1>
				<div className="formCobranca">
					<form>
						<select name="Clientes" id="clientes">
							<option value="a">a</option>
							<option value="a">a</option>
							<option value="a">a</option>
							<option value="a">a</option>
						</select>
						<textarea
							name="Descrição"
							id="descricao"
							cols="30"
							rows="10"
						>
							Descrição
						</textarea>
						<span>
							A descrição informada será impressa no boleto.
						</span>
						<InputLogin />
						<InputLogin />
						<div>
							<BotaoLogin />
							<BotaoLogin />
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
