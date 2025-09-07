# Big O Notation

Big O notation is a way to describe how efficient an algorithm is in terms of:

* Time complexity – how long it takes to run
* Space complexity – how much memory it uses

It helps you understand how an algorithm will scale as the input size (n) grows — whether it stays fast or slows down a lot.

Big O always refers to the worst-case scenario. Given a linear search, if the value 
we are looking is in the first index of the array, the best-case scenario, the actual time complexity would be O(1), and the worst-case O(N). Big O notation will always describe the worst-case scenario. 

## O(N)
Linear search. For N elements in the array, the algorithm will take N steps to find the search value, if such is at the end of the array, worst-case scenario. 

## O(log N)
For N data elements, the algorithm would take log2 N steps. If there are 8 elemenets, the algorithm would take three steps, since log2 8 = 3, in other words, how many times do we need to halve 8 by 2 until we ended up with 1, how many 2s would we have in our equation?
