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
//get the value of data-image attribute.
//https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
const img = document.getElementById("source").dataset.image ;
console.log(img + "value of data-image attribute");
//create a new image-element
const newImg = document.createElement("img");
console.log(newImg + "new element");
//add the source of the image to the element
newImg.src = img
console.log(newImg.src +"new element +src");
//The appendChild() method appends a node (element) as the last child of an element.
//https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
document.getElementById("target").appendChild(newImg);
console.log(newImg + "new element inside Id-element");
//remove the first element
function removeFirst () {
img.remove();
}
