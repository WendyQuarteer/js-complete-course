/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


// your code here
//https://www.w3schools.com/jsref/dom_obj_table.asp


let targ = document.getElementById("target");
console.log(targ);

//create new element table.
    const table = document.createElement("table");
    console.log(table);
//create 10 rows (automatically added to the table); in each row one cell will be inserted.
    for (let i = 0; i < 10; i++) {
        table.insertRow(i).insertCell()
    }
//Insert the table inside the targ.
    targ.appendChild(table);




