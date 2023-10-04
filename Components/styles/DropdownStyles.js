import { css } from '../../lit.js';

const DropdownStyles = css`
	:host,
	div {
		display: inline-flex;
		align-items: center;
		gap: 16px;
		border-radius: none;
		cursor: pointer;
		transition: all 100ms ease-out;
	}

	div {
		padding: 16px;
	}
`;

export default DropdownStyles;
