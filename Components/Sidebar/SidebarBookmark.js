import { LitElement, html, css } from '../../lit.js';
import DarkStyles from '../styles/DarkStyles.js';
import DefaultStyles from '../styles/DefaultStyles.js';
import SidebarButtonStyles from '../styles/SidebarButtonStyles.js';

class SidebarBookmark extends LitElement {
	static styles = [DarkStyles, DefaultStyles, SidebarButtonStyles];

	static properties = {
		toggle: { type: Boolean }
	};

	constructor() {
		super();
		this.toggle = true;
	}

	svgOutline() {
		return html`<svg width="18" height="21" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M16.9 20.5C16.743 20.5 16.588 20.45 16.458 20.356L9.00001 14.928L1.54201 20.358C1.31401 20.522 1.01201 20.548 0.760006 20.418C0.510006 20.291 0.350006 20.033 0.350006 19.751V2.60001C0.350006 1.36001 1.36001 0.350006 2.60001 0.350006H15.398C16.638 0.350006 17.648 1.36001 17.648 2.60001V19.75C17.648 20.032 17.49 20.29 17.238 20.418C17.132 20.473 17.015 20.5 16.898 20.5H16.9ZM9.00001 13.25C9.15501 13.25 9.31001 13.298 9.44001 13.394L16.15 18.277V2.60001C16.15 2.18801 15.813 1.85001 15.4 1.85001H2.60001C2.18701 1.85001 1.85001 2.18801 1.85001 2.60001V18.277L8.56001 13.394C8.69001 13.298 8.84501 13.25 9.00001 13.25Z" fill="#172936" />
						</svg>`
	}

	svgFilled() {
		return html`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M19.9 23.5C19.7 23.5 19.6 23.5 19.5 23.4L12 17.9L4.49999 23.3C4.29999 23.5 3.99999 23.5 3.69999 23.4C3.49999 23.3 3.29999 23 3.29999 22.7V5.59999C3.29999 4.39999 4.29999 3.39999 5.49999 3.39999H18.3C19.5 3.39999 20.5 4.39999 20.5 5.59999V22.7C20.5 23 20.3 23.2 20.1 23.4C20.1 23.5 20 23.5 19.9 23.5V23.5Z" fill="white" />
		</svg> `;
	}

	render() {
		// SVG render with outline icon
		return  html`
					<div @click=${this._switchToggle}>
					${this.toggle ? this.svgOutline() : this.svgFilled()}
						<p>bookmark</p>
					</div>
			  `
			;
	}

	_switchToggle() {
		this.toggle = !this.toggle;
	}
}

customElements.define('sidebar-bookmark', SidebarBookmark);
