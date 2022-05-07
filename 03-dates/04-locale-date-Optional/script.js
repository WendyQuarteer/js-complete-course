/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


// to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

// your code here
/*https://docs.microsoft.com/en-us/dotnet/standard/base-types/custom-date-and-time-format-strings*/
const options = {weekday: 'long', day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit'};
const now = new Date().toLocaleDateString("en-BE", options).replace(',', '')
    .replace(':', 'h');
document.getElementById("target").innerHTML = now;

console.log(now)
console.log(options)
console.log(new Date)