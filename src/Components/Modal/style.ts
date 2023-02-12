/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const layout = css({
	width: '100vw',
	minWidth: '600px',
	height: '100vh',

	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
});

export const modalLayout = css({
	width: '30%',
	height: '30%',
	background: 'pink',

	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'space-evenly',

	padding: '2%',
});

export const question = css({
	fontSize: '20px',
	fontWeight: 600,
});

export const buttonContainer = css({
	width: '100%',
	display: 'flex',
	justifyContent: 'space-evenly',
});

export const button = css({});
