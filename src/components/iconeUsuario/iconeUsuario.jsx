import React from 'react';

import './styles.css';

import iconePerfil from '../../assets/images/iconePerfil.png';

import { BotaoDeslogar } from '../botaoDeslogar/botaoDeslogar';

export function IconeUsuario(props) {
	const [deslogar, setDeslogar] = React.useState(false);
	return (
		<>
			<button onClick={() => setDeslogar(!deslogar)}>
				<img src={iconePerfil} alt="Foto de perfil do usuário" />
			</button>

			{deslogar && <BotaoDeslogar />}
		</>
	);
}
