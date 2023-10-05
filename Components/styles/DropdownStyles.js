import { css } from '../../lit.js';

const DropdownStyles = css`
	:host,
	div {
		display: flex;
		flex-basis: 100%;
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
