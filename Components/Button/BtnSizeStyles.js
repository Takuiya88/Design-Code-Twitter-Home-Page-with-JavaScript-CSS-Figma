import { css } from '../../lit.js';

const ButtonSizeStyles = css`
	:host(.default.large) {
		padding: 16px;
		font-size: 20px;
		line-height: 20px;
	}
	:host(.default.regular) {
		padding: 12px 16px;
		font-size: 14px;
		line-height: 14px;
	}

	:host(.dark.large) {
		padding: 16px;
		font-size: 20px;
		line-height: 20px;
	}
	:host(.dark.regular) {
		padding: 12px 16px;
		font-size: 14px;
		line-height: 14px;
	}
`;

export default ButtonSizeStyles;
