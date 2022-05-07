/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


// your code here

document.getElementById('run').addEventListener("click", getFridayThirteen);

function getFridayThirteen() {
    const input = document.getElementById('year').value;
    const year = input
    for (let month = 0; month < 11; month++) {
        const OneThree = new Date(year, month, 13);
        if (OneThree.getDay() === 5) {
            const arr = ['January', 'February', 'March', 'April', 'May', 'Jun', 'July', 'August', 'September', 'October', 'November', 'December'];
            document.write(arr[month] + " ");
        }
    }
}

