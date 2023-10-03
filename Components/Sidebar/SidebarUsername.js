import { LitElement, html, css } from '../../lit.js';
import DarkStyles from '../styles/DarkStyles.js';
import DefaultStyles from '../styles/DefaultStyles.js';
import SidebarUsernameStyles from '../styles/SidebarUsernameStyles.js';
import '../styles/TypeStyles.js';

class SidebarUsername extends LitElement {
	static styles = [SidebarUsernameStyles, DarkStyles, DefaultStyles];
	static properties = {
		imageSrc: { type: String, attribute: 'image' },
		username: { type: String, attribute: 'username' },
		account: { type: String, attribute: '@account' }
	};

	constructor() {
		super();
		this.imageSrc = '';
		this.username = 'Username';
		this.account = '@account';
	}

	render() {
		// SVG render with outline icon
		return html`
			<div class="username">
				<img src=${this.imageSrc} />
				<section class="username__profile">
					<type-style class="size-16px bold username__text username__text--name" username=${this.username}>${this.username}</type-style>
					<type-style class="size-14px regular username__text username__text--account" account=${this.account}>${this.account}</type-style>
				</section>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M6 13.5C6.828 13.5 7.5 12.828 7.5 12C7.5 11.172 6.828 10.5 6 10.5C5.172 10.5 4.5 11.172 4.5 12C4.5 12.828 5.172 13.5 6 13.5ZM12 13.5C12.828 13.5 13.5 12.828 13.5 12C13.5 11.172 12.828 10.5 12 10.5C11.172 10.5 10.5 11.172 10.5 12C10.5 12.828 11.172 13.5 12 13.5ZM18 13.5C18.828 13.5 19.5 12.828 19.5 12C19.5 11.172 18.828 10.5 18 10.5C17.172 10.5 16.5 11.172 16.5 12C16.5 12.828 17.172 13.5 18 13.5Z" fill="#264459" />
				</svg>
			</div>
		`;
	}
}

customElements.define('sidebar-username', SidebarUsername);
