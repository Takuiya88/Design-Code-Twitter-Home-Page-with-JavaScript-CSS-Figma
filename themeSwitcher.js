export default function themeSwitcher(body, elements) {
	switchBodyTheme(body);
	switchElementTheme(elements);
}

function switchBodyTheme(body) {
	if (body.classList.contains('theme--default')) {
		body.classList.remove('theme--default');
		body.classList.add('theme--dark');
	} else {
		body.classList.remove('theme--dark');
		body.classList.add('theme--default');
	}
}

function switchElementTheme(elements) {
	elements.forEach(element => {
		element.classList.toggle('dark');
		element.classList.toggle('default');
	});
}
