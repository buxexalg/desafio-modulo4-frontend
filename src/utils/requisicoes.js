function fazerRequisicaoComBody(url, metodo, conteudo = null, token) {
	return fetch(url, {
		method: metodo,
		headers: {
			'Content-Type': 'application/json',
			Authorization: token && `Bearer ${token}`,
		},
		body: JSON.stringify(conteudo),
	});
}

module.exports = { fazerRequisicaoComBody };
