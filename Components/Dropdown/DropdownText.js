import { LitElement, html, css } from '../../lit.js';
import DarkStyles from '../styles/DarkStyles.js';
import DefaultStyles from '../styles/DefaultStyles.js';
import DropdownStyles from '../styles/DropdownStyles.js';
import '../styles/TypeStyles.js';

class DropdownText extends LitElement {
	static styles = [DarkStyles, DefaultStyles, DropdownStyles];

	static properties = {
		text: { type: 'String', attribute: 'label' }
	};

	constructor() {
		super();
		this.text = 'placeholder text';
	}

	render() {
		return html`
			<div>
				<type-style label=${this.text} class="size-20px regular">${this.text}</type-style>
			</div>
		`;
	}
}

customElements.define('dropdown-text', DropdownText);
