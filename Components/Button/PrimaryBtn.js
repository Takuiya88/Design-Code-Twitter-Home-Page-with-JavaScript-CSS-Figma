import { LitElement, html, css } from '../../lit.js';
import ButtonThemes from './BtnThemes.js';
import ButtonSizeStyles from './BtnSizeStyles.js';
import ButtonBaseStyles from './BtnBaseStyles.js';

class PrimaryButton extends LitElement {
	static styles = [ButtonThemes, ButtonSizeStyles, ButtonBaseStyles];

	static properties = {
		buttonLabel: { type: String, attribute: 'label' }
	};

	constructor() {
		super();
		this.buttonLabel = 'Defualt value';
	}

	render() {
		return html` <div label=${this.buttonLabel}>${this.buttonLabel}</div> `;
	}
}

customElements.define('primary-button', PrimaryButton);
