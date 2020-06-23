
//b = b || 1;
// b = typeof b === 'undefined' ? 1 : b;

function multiply(a, b = a) {
    return a * b;
}

console.log(multiply(5));
console.log(multiply(5, 6));

//lazy evaluation
function randomNumber() {
    console.log('Generating a random number...')
    return Math.random() * 10;
}

function multiply(a, b = randomNumber()) {
    return a * b;
}

console.log(multiply(5));
