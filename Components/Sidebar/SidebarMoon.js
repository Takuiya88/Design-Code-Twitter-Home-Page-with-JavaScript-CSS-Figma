import { LitElement, html, css } from '../../lit.js';
import DarkStyles from '../styles/DarkStyles.js';
import DefaultStyles from '../styles/DefaultStyles.js';
import SidebarButtonStyles from '../styles/SidebarButtonStyles.js';

class SidebarMoon extends LitElement {
	static styles = [DarkStyles, DefaultStyles, SidebarButtonStyles];

	static properties = {
		toggle: { type: Boolean }
	};

	constructor() {
		super();
		this.toggle = true;
	}

	render() {
		return this.toggle
			? html`
					<div @click=${this._switchToggle}>
						<p>moon</p>
						<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect width="48" height="48" rx="24" fill="none" />
							<path d="M21.37 17.51C21.19 18.15 21.1 18.82 21.1 19.5C21.1 23.58 24.42 26.9 28.5 26.9C29.18 26.9 29.85 26.81 30.49 26.63C29.45 29.19 26.93 31 24 31C20.14 31 17 27.86 17 24C17 21.07 18.81 18.55 21.37 17.51ZM24 15C19.03 15 15 19.03 15 24C15 28.97 19.03 33 24 33C28.97 33 33 28.97 33 24C33 23.54 32.96 23.08 32.9 22.64C31.92 24.01 30.32 24.9 28.5 24.9C25.52 24.9 23.1 22.48 23.1 19.5C23.1 17.69 23.99 16.08 25.36 15.1C24.92 15.04 24.46 15 24 15Z" fill="#172936" />
						</svg>
					</div>
			  `
			: html`
					<div @click=${this._switchToggle}>
						<p>moon</p>
						<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M24 15C19.03 15 15 19.03 15 24C15 28.97 19.03 33 24 33C28.97 33 33 28.97 33 24C33 23.54 32.96 23.08 32.9 22.64C31.92 24.01 30.32 24.9 28.5 24.9C25.52 24.9 23.1 22.48 23.1 19.5C23.1 17.69 23.99 16.08 25.36 15.1C24.92 15.04 24.46 15 24 15Z" fill="white" />
						</svg>
					</div>
			  `;
	}

	_switchToggle() {
		this.toggle = !this.toggle;
	}
}

customElements.define('sidebar-moon', SidebarMoon);
