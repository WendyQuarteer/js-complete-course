const tvShows = [
    `legion`,
    `sneaky pete`,
    `santa clarita diet`,
    `riverdale`,
    `the young pope`,
    `a series of unfortunate events`,
    `taboo`,
    `colony`,
    `24: legacy`,
    `speechless`,
    `scherlock`,
    `stranger things`,
    `this is us`,
    `timeless`,
    `the oa`,
];

let ol = document.querySelector("ol")
let rev = tvShows.reverse();
rev.forEach((show) => {
    let li = document.createElement('li');
    li.innerText = show;
    ol.appendChild(li);
});

