/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



    // your code here
//set function for when hoovering over the image.
document.querySelector("img").onmouseover = function changeSourceAttribute() {
//get the value of data-hover attribute.
    const ToValue = document.querySelector("img").dataset.hover;
    console.log(ToValue + " Value of data-hover attribute");
document.querySelector("img").src = ToValue ;

}



