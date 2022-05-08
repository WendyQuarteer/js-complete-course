/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
document.getElementById("addition").addEventListener("click", add);
function add() {
    let one = parseInt(document.getElementById("op-one").value)
    let two = parseInt(document.getElementById("op-two").value)
    let addIs = (one + two);
    let msg = (addIs);
    alert(msg);
}
document.getElementById("substraction").addEventListener("click", substract);
function substract() {
    let one = parseInt(document.getElementById("op-one").value)
    let two = parseInt(document.getElementById("op-two").value)
    let subIs = (one - two);
    let msg = (subIs);
    alert(msg);
}
document.getElementById("multiplication").addEventListener("click", multiply);
function multiply() {
    let one = parseInt(document.getElementById("op-one").value)
    let two = parseInt(document.getElementById("op-two").value)
    let multiIs = (one * two);
    let msg = (multiIs);
    alert(msg);
}
document.getElementById("division").addEventListener("click", divide);
function divide() {
    let one = parseInt(document.getElementById("op-one").value)
    let two = parseInt(document.getElementById("op-two").value)
    let diviIs = (one / two);
    let msg = (diviIs);
    alert(msg);
}


