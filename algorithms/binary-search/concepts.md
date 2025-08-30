# Concepts
* Highly efficient algorithm used to find the position of a target value within a sorted array or list.

1. Start with two pointers:
    * low → beginning of the array
    * high → end of the array

2. Find the middle index:
    mid = (low + high) // 2

3. Compare the middle element with the target:
    * If it's equal → found!
    * If target is smaller → search the left half
    * If target is larger → search the right half

Repeat until the element is found or the search range is empty.