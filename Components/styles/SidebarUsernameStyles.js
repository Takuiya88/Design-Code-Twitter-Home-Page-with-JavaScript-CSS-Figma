import { css } from '../../lit.js';

const SidebarUsername = css`
	:host,
	.username {
		display: flex;
		align-items: center;
		flex-basis: 100%;
		gap: 16px;
		border-radius: 100px;
		transition: all 100ms ease-out;
	}

	div {
		padding: 16px;
	}

	:host .username img {
		width: 40px;
		height: 40px;
	}

	:host .username__profile {
		display: flex;
		flex-direction: column;
		gap: 4px;
		flex-grow: 1;
	}

	:host .username__profile p {
		margin: 0;
		padding: 0;
	}

	/* Common text styles */
	:host(.default) .username__text--name,
	:host(.dark) .username__text--name {
		font-size: 16px;
		font-weight: 700;
		line-height: 16px;
		letter-spacing: 0.25px;
	}

	/* Common account styles */
	:host(.default) .username__text--account,
	:host(.dark) .username__text--account {
		font-size: 14px;
		font-weight: 400;
		line-height: 14px;
		letter-spacing: 0;
	}

	:host(.default) .username__text--name {
		color: var(--secondary-25);
	}
	:host(.default) .username__text--account {
		color: var(--secondary-40);
	}

	:host(.dark) .username__text--name,
	:host(.dark) .username__text--account {
		color: var(--gray-100);
	}
`;

export default SidebarUsername;
