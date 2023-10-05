import { LitElement, html, css } from '../../lit.js';

class Divider extends LitElement {
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
		return html` <svg width="100%" height="1" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect width="100%" height="1" fill="" />
		</svg>`;
	}
}

customElements.define('horizontal-divider', Divider);
