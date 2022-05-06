/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


// your code here
document.getElementById('run').addEventListener("click", getAge);

function getAge() {
    const dateNow = new Date();
    console.log(dateNow)
    let yearNow = dateNow.getFullYear()
    const DbYear = document.getElementById('dob-year').value;
    let monthNow = dateNow.getMonth();
    const DbMonth = document.getElementById('dob-month').value;
    if (monthNow < DbMonth) {
        yearNow--;
    }
    const dayNow = dateNow.getDay();
    const DbDay = document.getElementById('dob-day').value;
    if (dayNow < DbDay) {
        monthNow--;
    }
    const currentYear = new Date(yearNow, monthNow, dayNow)
    const BdayDate = new Date(DbYear, DbMonth, DbDay);
    console.log("birthday date " + BdayDate)
    const age = currentYear.getFullYear() - BdayDate.getFullYear()
    console.log("calculation years: " + age)
    let msg = ("You are " + age + " years old!")
    alert(msg);
}

