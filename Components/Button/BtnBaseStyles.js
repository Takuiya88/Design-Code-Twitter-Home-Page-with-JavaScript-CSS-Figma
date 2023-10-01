import { css } from "../../lit.js"


const ButtonBaseStyles = css`

			:host,
			div {
				display: inline-flex;
				align-items: center;
				border-radius: 50px;
				cursor: pointer;
				font-weight: var(--regular-weight);
				color: var(--gray-100);
			}
`


export default ButtonBaseStyles;