/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// your code here
document.getElementById("run").addEventListener("click", () => {
    //1.select all id's
    let table = document.querySelectorAll("#n-1, #n-2, #n-3, #n-4, #n-5, #n-6, #n-7, #n-8, #n-9, #n-10");
    //4.Because these exact numbers are needed for the next functions(smallest, biggest,...) a new string is created called numbers
    let numbers = []
    //2.for every index a random number between 1 and 100 will be assigned)
    for (let i = 0; i < 10; i++) {
        console.log(table[i])
        let random = (Math.floor((Math.random() * 100)));
        //3.the index inside the table will change it's content to the template literal:random
        //template literal with placeholder transforms the array into a string
        table[i].textContent = `${random}`;
        //5.now the random numbers are pushed into the array: numbers
        numbers.push(random);
    }
    //reduce makes sure every element in variable is seen, this can also been done with loop function
    document.getElementById("min").innerHTML = numbers.reduce(() => Math.min(...numbers));
    document.getElementById("max").innerHTML = numbers.reduce(() => Math.max(...numbers));
    document.getElementById("sum").innerHTML = numbers.reduce((prev, current) => (prev + current));
    let sum = 0
    numbers.forEach(num => {
        sum = sum + num
    })
    let average = sum / numbers.length
    document.getElementById("average").innerText = `${average}`;
    console.log(numbers);
})





