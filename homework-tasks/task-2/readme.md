#1. Implement .SelectMany in javascript

##Description

Given an array of arrays, make a function that will return a simple array of all the items.

E.g. Given

```
let src = [
    [1, 2, 3, 4],
    [2, 7, 8, 9],
    [1, 2, 3, 4],
];
```
it should return

```
dest = [1, 2, 3, 4, 2, 7, 8, 9, 1, 2, 3, 4];
```

#2. Use that function to get a list of numbers and return a list of all their digits.
I.e. for: `[1, 123, 567]` it should return `[1, 1, 2, 3, 5, 6, 7]`

(try to write #2 with and without the select many function, to feel the difference)

