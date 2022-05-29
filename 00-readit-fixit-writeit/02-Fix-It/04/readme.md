# FIX IT
## EX 04
* Why are we not seeing any tv shows? Look at the error message in the dev tools and solve it.
- unused constant: tvshows 
show.forEach => tvshows.forEach
- unused parameter: tvshows
(tvshows => document.write(wrapWithTag(show, `li`)));
=> (show => document.write(wrapWithTag(show, `li`)));
- void function return value is used
  `<${tagname}>${content}</${tagname}>`;
=> return `<${tagname}>${content}</${tagname}>`;

* There is still something else going wrong. Fix this as well. 
tagname => tagName