/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


// your code here
//addEventlistener for input with function
document.getElementById("pass-one").addEventListener("input", () => {
    //make a variable for the counter /10
    let counter = document.getElementById("counter");
    console.log(counter +" counter")
    //make a variable for the typed password
    let input = document.getElementById("pass-one");
    //inside the counter, the length and value of the password with /10 will be shown
    counter.innerHTML = input.value.length + "/10"
    console.log(input.value.length)
    // if the password value has a length longer than 9 the input value will change.
    if (input.value.length > 9) {
        //The substring() method extracts characters from start to end (exclusive) from a string, and returns the substring.
        //it does not change the original string.
        //now the value of the password will be the value with index from 0 to 9.  Which makes sure no extra numbers can be added.
        input.value = input.value.substring(0, 9)
    }
})
