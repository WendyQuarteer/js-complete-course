/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function getValue() {

    // your code here
    let name = prompt("Please enter your name", "Your name here")
    let gender = prompt( "Please enter your gender here", "Your gender here")
    let town = prompt("Please enter your town here", "Your town here")
    let data = confirm("your name is: " + name + "\r\ngender: " + gender + "\r\ntown: " + town)
    while (data === false) {
       getValue()
    }



})();
