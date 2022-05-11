/* becode/javascript
 *
 * /06-dom/03-select-three/script.js - 6.3: sélection multiple par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



    // your code here
//select all elements by classname.
let targ = document.getElementsByClassName("target") ;
//make sure all are selected with for-loop and replace their content.
for (let i = 0; i < targ.length; i++) {
    targ[i].innerHTML = "owned"
}

