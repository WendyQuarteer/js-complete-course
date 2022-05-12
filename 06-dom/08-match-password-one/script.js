/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


// your code here
// When
document.getElementById("run").addEventListener("click", function onChange() {
    const first = document.querySelector('input[name=pass-one]').value;
    console.log(first);
    const second = document.querySelector('input[name=pass-two]').value;
    console.log(second);
if (second !== first) {
    console.log("not ok")
    document.getElementById("pass-one").style.borderColor = "#FF0000";
    document.getElementById("pass-two").style.borderColor = "#FF0000";
} else {
    console.log("ok")
}
})
