import './Components/Sidebar/SidebarBookmark.js';
import './Components/Sidebar/SidebarExplore.js';
import './Components/Sidebar/SidebarHome.js';
import './Components/Sidebar/SidebarList.js';
import './Components/Sidebar/SidebarLogo.js';
import './Components/Sidebar/SidebarMoon.js';
import './Components/Sidebar/SidebarMore.js';
import './Components/Sidebar/SidebarNotification.js';
import './Components/Sidebar/SidebarProfile.js';
import './Components/Sidebar/SidebarUsername.js';

import './Components/Button/PrimaryBtn.js';
import './Components/Dropdown/DropdownTopic.js';

// Functions
import themeSwitcher from './themeSwitcher.js';

// Grab body default shadow doms, moon icon
const moonIcon = document.querySelector('sidebar-moon');
const defaultElements = document.querySelectorAll('.default');
const body = document.querySelector('body');

// add click event to moon.
// Switch color elements and body bg

moonIcon.addEventListener('click', () => {
	themeSwitcher(body, defaultElements);
});

// Default background when first loading.
window.addEventListener('DOMContentLoaded', () => {
	body.classList.add('theme--default');
});
