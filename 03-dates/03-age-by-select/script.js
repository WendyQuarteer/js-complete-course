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
    /*If the current month is less than the birth month, the current year will not be counted.
    To get the month's difference, we will subtract by adding the total number of months (12) to the current month.*/
    const dayNow = dateNow.getDay();
    const DbDay = document.getElementById('dob-day').value;
    if (dayNow < DbDay) {
        monthNow--;
    }
    /*If the current date is less than the date (birthdate) entered by the user,
    that month will not be counted as the month is not completed. Otherwise, we
    will add the number of month days (30 or 31) to the current date to get the difference between them.*/
    const currentYear = new Date(yearNow, monthNow, dayNow)
    const BdayDate = new Date(DbYear, DbMonth, DbDay);
    console.log("birthday date " + BdayDate)
    const age = currentYear.getFullYear() - BdayDate.getFullYear()
    /*Finally, we just need to subtract the date, month and year after satisfying the above two conditions.*/
    console.log("calculation years: " + age)
    let msg = ("You are " + age + " years old!")
    alert(msg);
}

