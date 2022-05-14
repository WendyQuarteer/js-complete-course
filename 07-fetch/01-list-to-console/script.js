/* becode/javascript
 *
 * /09-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        getGithubData();
    })
    async function getGithubData() {
        //await operator is used to wait for a promise
        let data = await fetch('../../_shared/api.json');
        //await promise to get the data
        let main = await data.json();
        console.log(main);
    }
})();
