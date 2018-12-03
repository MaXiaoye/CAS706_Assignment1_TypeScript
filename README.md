# CAS706_Assignment1_TypeScript

Assignment 1
Generic Quicksort. Write 3 different versions of quicksort (in each language), which explicitly:

Sort a list of integers in ascending order
Sorts a list of ``anything'' via an externally provided comparison function.
Sorts a list of ``anything'' via an externally provided comparison function, and an externally provided partition function (which itself uses the comparison function).

I separate quicksort and partition function :)
Please compile quicksort.ts and then run quicksort.js as node application
Key functions:
Similar names and usage with Rust and Ocaml such that 
quicksortThree(list, left, right, comparisionIntDesc, partitionTwo): Where left and right are boundaries of array (0 and length-1 by default).
e.g. 
var list1 = [5,4,3,2,2,3,6,4,2,-1];
quicksortThree(list,0,9,comparisionIntDesc,partitionTwo)

List1 is
[ 5, 4, 3, 2, 2, 3, 6, 4, 2, -1 ]

Sorted list1 in ascending order:
[ -1, 2, 2, 2, 3, 3, 4, 4, 5, 6 ]

Sorted list1 in descending order:
[ 6, 5, 4, 4, 3, 3, 2, 2, 2, -1 ]

List2 is
[ 'abc', 'defg', 'zfasfasd', 'c', 'bAAAA' ]

Sorted list2 in length order:
[ 'zfasfasd', 'bAAAA', 'defg', 'abc', 'c' ]

Sorted list2 alphabetically:
[ 'abc', 'bAAAA', 'c', 'defg', 'zfasfasd' ]
