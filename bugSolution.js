function foo(a, b) {
  // Handle null values using the nullish coalescing operator (??)
  const numA = a ?? 0; 
  const numB = b ?? 0;

  return numA + numB;
}

console.log(foo(null, 5)); // Output: 5
console.log(foo(5, null)); // Output: 5
console.log(foo(5, 5));   // Output: 10
console.log(foo(null, null)); //Output: 0