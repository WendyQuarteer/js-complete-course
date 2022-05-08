/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

const performOperation = function (operation) {
    let one = document.getElementById("op-one").value;
    console.log(one);
    let two = document.getElementById("op-two").value;
    console.log(two);
    switch (operation) {
        case "addition":
            let plus = parseInt(one) + parseInt(two);
            alert("result = " + plus);
            break;
        case "substraction":
            let minus = parseInt(one) - parseInt(two);
            alert("result = " + minus);
            break;
        case "multiplication":
            let multiply = parseInt(one) * parseInt(two);
            alert("result = " + multiply);
            break;
        case "division":
            let divide = parseInt(one) / parseInt(two);
            alert("result = " + divide);
            break;
        default:
            alert("input fields are empty");
    };
};
Array.from(document.querySelectorAll("button.operator")).forEach(function ($btn) {
    $btn.addEventListener("click", function () {
        performOperation($btn.id);
    });
});

