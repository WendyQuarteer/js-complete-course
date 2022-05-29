const tvshows = [
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

const wrapWithTag = (content, tagName) => {
  return `<${tagName}>${content}</${tagName}>`;
};

document.write(`<ol>`);
tvshows.forEach(show => document.write(wrapWithTag(show, 'li')));
document.write(`</ol>`);
