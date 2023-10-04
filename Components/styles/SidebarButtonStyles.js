import { css } from '../../lit.js';

const SidebarButtonStyles = css`
:host,
			div {
				font-family: Barlow;
				font-size: 20px;
				font-style: normal;
				font-weight: var(--regular-weight)
				line-height: 20px;
				display: inline-flex;
				align-items: center;
				gap: 12px;
				padding: 12px;
				border-radius: 50px;
				cursor: pointer;
			}
`;

export default SidebarButtonStyles;
