/**
 * @copyright meheliroy 2024
 */

'use strict';


/**
 * Attaches an event listener to a collection of DOM elements
 * @param {Array<HTMLElement>} $elements - An array od DOM elements to attach the event listener to.
 * @param {string} eventType - The type of event to listen for(e.g.,'click','mouseover')
 * @param {Function} callback - The function to be executed when the event occurs
 */


const addEventOnElements = function ($elements, eventType, callback) {
    console.log($elements);
    $elements.forEach($element => $element.addEventListener(eventType, callback));
}


export {
    addEventOnElements
}