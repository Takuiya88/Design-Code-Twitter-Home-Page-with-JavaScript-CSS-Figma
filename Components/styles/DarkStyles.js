import { css } from '../../lit.js';

const DarkStyles = css`
	/*  Dark Classes */
	:host(.dark) svg path {
		fill: var(--gray-100);
	}
	:host(.dark) {
		background-color: var(--transparent-0);
		color: var(--gray-100);
		text-transform: capitalize;
	}
	:host(.dark:hover) {
		background-color: var(--transparent-10);
	}
	:host(.dark.active) {
		background-color: var(--transparent-25);
	}
	:host(.dark.active) p {
		font-weight: var(--bold-weight);
	}
`;

export default DarkStyles;
