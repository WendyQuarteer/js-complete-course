/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



    // your code here
let img = document.getElementById("source").dataset.image ;
console.log(img)
let newImg = document.createElement("img");
newImg.src = img
//https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
document.getElementById("target").appendChild(newImg);
console.log(newImg)
