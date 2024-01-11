/**
 * @copyright meheliroy 2024
 */

'use strict';


/**
 * Module import
 */

import { addEventOnElements, getGreetingMsg } from "./utils.js";

/**
 * Toggle sidebar in small screen
 */

const /** {HTMLElement} */ $sidebar = document.querySelector('[data-sidebar]');
const /** {Array<HTMLElement>} */ $sidebarTogglers = document.querySelectorAll('[data-sidebar-toggler]');
const /** {HTMLElement} */ $overlay = document.querySelector('[data-sidebar-overlay]');


addEventOnElements($sidebarTogglers, 'click', function () {
    $sidebar.classList.toggle('active');
    $overlay.classList.toggle('active');
});



/**
 * Initialize tooltip behavior for all DOM elements with 'data-tooltip' attribute.
 */
/**
 * Show greeting message on homepage
 */

const /** {HTMLElement} */ $greetElem = document.querySelector('[data-greeting]');
const /** {number} */ currentHour = new Date().getHours();
$greetElem.textContent = getGreetingMsg(currentHour);


/**
 * Show current date on homepage
 */

const /** {HTMLElement} */ $currentDateElen = document.querySelector('[data-current-date]');
$currentDateElen.textContent = new Date().toDateString().replace(' ',',  ');
