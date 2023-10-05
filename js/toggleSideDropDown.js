export default function toggleSideDropDown() {
	const userNameIcon = document.querySelector('sidebar-username');
	userNameIcon.addEventListener('mouseover', () => {
		const dropdownUsername = document.querySelector('.dropdown-username');
		dropdownUsername.classList.toggle('hide');
	});
	userNameIcon.addEventListener('click', () => {
		const dropdownItem = document.querySelector('.dropdown-items');
		dropdownItem.classList.toggle('hide');
	});
}
