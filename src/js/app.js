/**
 * @copyright meheliroy 2024
 */

'use strict';


/**
 * Module import
 */

import { 
    addEventOnElements, 
    getGreetingMsg, 
    activeNotebook, 
    makeElemEditable 
} from "./utils.js";
import { Tooltip } from "./components/Tooltip.js";

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


const /**  {Array<HTMLElement> */ $tooltipElems = document.querySelectorAll('[data-tooltip]');
$tooltipElems.forEach($elem => Tooltip($elem));


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


/**
 * Notebook create field
 */
const /** {HTMLElement} */ $sidebarList = document.querySelector('[data-sidebar-list]');
const /** {HTMLElement} */ $addNotebookBtn = document.querySelector('[data-add-notebook]');

/**
 * Shows a notebook creation field in the sidebar when the "Add Notebook" button is clicked.
 * The function dynamically adds a new notebook field element, makes it editable, and listens for
 * the 'Enter' key to create a new notebook when pressed.
 */
const showNotebookField = function () {
    const /** {HTMLElement} */ $navItem = document.createElement('div');
    $navItem.classList.add('nav-item');

    $navItem.innerHTML = `
        <span class="text text-large" data-notebook-field></span>

        <div class="state-layer"></div>
    `;

    $sidebarList.appendChild($navItem);

    const /** {HTMLElement} */ $navItemField = $navItem.querySelector('[data-notebook-field]');

    // Activates new created notebook and deactive the last one.
    activeNotebook.call($navItem);

    // Make notebook field content editable and focus
    makeElemEditable($navItemField);

    //When user press 'Enter' then create notebook
    $navItemField.addEventListener('keydown', createNotebook);

}

$addNotebookBtn.addEventListener('click', showNotebookField);

/**
 * Create new notebook
 * Creates a new notebook when the 'Enter' key is pressed while editing a notebook name field.
 * The new notebook is stored in the database.
 * 
 * @param {KeyboardEvent} event - The keyboard event that triggered notebook creation.
 */
const createNotebook = function (event) {

    if (event.key === 'Enter') {
        
        // Store new created notebook in database

    }
}