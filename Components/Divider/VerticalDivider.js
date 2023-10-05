import { LitElement, html, css } from '../../lit.js';

class VerticalDivider extends LitElement {
	static styles = [
		css`
			:host {
				display: flex;
			}
			:host(.dark) svg rect {
				fill: var(--secondary-25);
			}
			:host(.default) svg rect {
				fill: var(--gray-95);
			}
		`
	];

	render() {
		return html` <svg width="1px" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect width="1px" height="100%" fill="" />
		</svg>`;
	}
}

customElements.define('vertical-divider', VerticalDivider);
