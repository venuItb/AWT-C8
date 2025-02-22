
// Generator function
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}
// Using the generator function
const generator = numberGenerator();

console.log(generator.next().value);  // Output: 1
console.log(generator.next().value);  // Output: 2
console.log(generator.next().value);  // Output: 3
console.log(generator.next().value);  // Output: 4
console.log(generator.next().done);   // Output: true

