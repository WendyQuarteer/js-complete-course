/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
// to get the value of an input: document.getElementById("element-id").value
// your code here
document.getElementById("run").addEventListener("click", function () {
    const number = parseInt(document.getElementById("number").value);
    if (number < 0) {
        alert("Factorial for negative number does not exist.");
    } else if (number === 0) {
        alert("Result is: 1");
    } else {
        let fact = 1;
        for (i = 1; i <= number; i++) {
            fact *= i;
        }
        alert("Result is: " + fact);
    }
});
