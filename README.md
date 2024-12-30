# JavaScript Null Value Handling Error

This repository demonstrates a common error in JavaScript: improper handling of null values. The function `foo` attempts to add two numbers, but does not correctly handle cases where one or both inputs are null. This leads to unexpected null return values instead of a more graceful error handling. The solution provided demonstrates how to correctly handle null values, and offers alternative approaches.

## Bug

The `bug.js` file contains the erroneous code. Running this code with null values results in null returns. 

## Solution

The `bugSolution.js` file provides a corrected version of the function, using conditional checks and default values to gracefully handle potential null inputs.