import { css } from '../../lit.js';

const ButtonBaseStyles = css`
	:host,
	div {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		border-radius: 50px;
		cursor: pointer;
		font-weight: var(--regular-weight);
		color: var(--gray-100);
		transition: all 100ms ease-out;
	}
`;

export default ButtonBaseStyles;
