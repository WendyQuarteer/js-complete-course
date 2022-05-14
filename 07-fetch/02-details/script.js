/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    //add event for when you click the button
    document.getElementById("run").addEventListener("click", () => {
        //get value from input-field
        const input = document.getElementById("hero-id").value;
        //call the function getData which is going to relate on the input-value.
        getData(input).catch(error => alert("No hero with tis Id!"));
    })

    async function getData(string) {
        //await operator is used to wait for a promise
        const response = await fetch('../../_shared/api.json');
        //await promise to get the data
        const data = await response.json();
        //create a new var to link the input and heroId.
        const heroId = string;
        //create a new var to show the content of each hero as a string separately.
        const hero = data.heroes[heroId - 1];
        //now make a variable that will show the name of each hero.
        const heroName = hero.name;
        //make a variable for the alter-ego, and one for the powers
        const heroAltEgo = hero.alterEgo;
        const heroPowers = hero.abilities.join(", ");
        //make variable for the template
        const template = document.getElementById("tpl-hero");
        //make variable for target
        const target = document.getElementById("target");
        // make variable to clone the template. If true, then the node and its whole subtree,
        // including text that may be in child Text nodes, is also copied.
        // If false, only the node will be cloned. The subtree, including any text that the
        // node contains, is not cloned.
        const clone = template.content.cloneNode(true);
        clone.querySelector(".name").innerText = heroName;
        clone.querySelector(".alter-ego").innerText = heroAltEgo;
        clone.querySelector(".powers").innerText = heroPowers;
        //clone the template and insert it in the ol.
        target.appendChild(clone);
    }
})();
