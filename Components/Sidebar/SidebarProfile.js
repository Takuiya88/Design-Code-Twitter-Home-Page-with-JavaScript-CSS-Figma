import { LitElement, html, css } from '../../lit.js';
import DarkStyles from '../styles/DarkStyles.js';
import DefaultStyles from '../styles/DefaultStyles.js';
import SidebarButtonStyles from '../styles/SidebarButtonStyles.js';
import '../styles/TypeStyles.js';

class SidebarProfile extends LitElement {
	static styles = [DarkStyles, DefaultStyles, SidebarButtonStyles];

	static properties = {
		toggle: { type: Boolean }
	};

	constructor() {
		super();
		this.toggle = true;
	}

	svgOutline() {
		return html` <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M12 11.816C13.355 11.816 14.872 11.666 15.84 10.56C16.654 9.63001 16.918 8.19201 16.646 6.16801C16.266 3.34301 14.529 1.65601 12 1.65601C9.471 1.65601 7.734 3.34301 7.354 6.17001C7.082 8.19201 7.346 9.63001 8.16 10.56C9.128 11.667 10.645 11.816 12 11.816ZM8.84 6.36801C9.002 5.16801 9.627 3.15601 12 3.15601C14.373 3.15601 14.998 5.16901 15.16 6.36801C15.367 7.91801 15.217 8.99501 14.71 9.57301C14.255 10.093 13.444 10.316 12 10.316C10.556 10.316 9.745 10.093 9.29 9.57301C8.783 8.99501 8.633 7.91701 8.84 6.36801ZM20.28 19.236C19.403 15.71 15.998 13.246 12 13.246C8.002 13.246 4.597 15.71 3.72 19.236C3.548 19.928 3.692 20.636 4.115 21.176C4.523 21.696 5.155 21.996 5.848 21.996H18.152C18.845 21.996 19.477 21.696 19.885 21.176C20.309 20.636 20.452 19.929 20.279 19.236H20.28ZM18.704 20.252C18.578 20.412 18.388 20.498 18.152 20.498H5.848C5.613 20.498 5.422 20.413 5.296 20.252C5.159 20.078 5.116 19.84 5.176 19.598C5.886 16.743 8.693 14.748 12 14.748C15.307 14.748 18.114 16.742 18.824 19.598C18.884 19.84 18.841 20.078 18.704 20.252Z" fill="#172936" />
		</svg>`;
	}

	svgFilled() {
		return html` <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M12.225 12.165C10.869 12.165 9.35301 12.015 8.38501 10.909C7.57101 9.97903 7.30801 8.54103 7.58001 6.51703C7.96001 3.69103 9.69601 2.00403 12.226 2.00403C14.756 2.00403 16.493 3.69103 16.872 6.51703C17.144 8.54103 16.88 9.97703 16.066 10.909C15.096 12.015 13.581 12.164 12.226 12.164L12.225 12.165ZM18.074 22.015H6.37601C5.71301 22.015 5.12601 21.735 4.72601 21.229C4.30401 20.695 4.15001 19.959 4.31601 19.261C5.15001 15.731 8.40201 13.264 12.224 13.264C16.046 13.264 19.298 15.73 20.134 19.261C20.298 19.959 20.144 20.695 19.722 21.228C19.322 21.733 18.737 22.013 18.074 22.013V22.015Z" fill="white" />
		</svg>`;
	}

	render() {
		// SVG render with outline icon
		return html`
			<div @click=${this._switchToggle}>
				${this.toggle ? this.svgOutline() : this.svgFilled()}
				<type-style class="size-20px regular">profile</type-style>
			</div>
		`;
	}

	_switchToggle() {
		this.toggle = !this.toggle;
	}
}

customElements.define('sidebar-profile', SidebarProfile);
