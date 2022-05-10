# READ IT
## EX 09
* Notice how the 2 map functions are attached to each other, this is called 'method chaining'

Function chaining is a pattern in JavaScript where multiple functions are called on the 
same object consecutively. Using the same object reference, multiple functions can be 
invoked. It increases the readability of the code and means less redundancy.
*[link](https://www.youtube.com/watch?v=Q4sYrKFJqPo)

* What does the parseTitle function do exactly?

It is assigning to give a function(all titles lower cases) to "title"

If a title starts with "the", then the console log will print the 
text:"Film met THE:" followed by the actual title.
and title will  be UPPER-CASED.

Otherwise, the title will be lower-cased and not shown in console.log

* Notice how all the code is in the shape of functions.

wrapWithTag, parseTitle, createList are assigning functions.