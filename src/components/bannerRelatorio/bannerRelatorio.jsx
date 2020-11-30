import React from 'react';

import './styles.css';

export function BannerRelatorio(props) {
	return (
		<div className={props.classe + ' bannerRelatorio'}>
			<span>{props.spanBanner}</span>
			<span>{props.spanValor}</span>
		</div>
	);
}
