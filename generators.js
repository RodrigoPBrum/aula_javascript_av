//symbols
/*
const uniqueId = Symbol('Hello');
// const uniqueId2 = Symbol('Hello');

// console.log(uniqueId === uniqueId2);

const obj = {
    [uniqueId]: 'Hello'
};

console.log(obj);

Symbol.iterator;
Symbol.split;
Symbol.toStringTag;

// const obj = {
//     [Symbol.iterator](){

//     }
// }

const arr = [1, 2, 3, 4]

const str = 'Digital Innovation One';

const it = arr[Symbol.iterator]();

while (true) {
    let { value, done } = it.next()

    if (done) {
        break;
    }
    console.log(value);
}

for (let value of str) {
    console.log(value);
};


// const it = obj[Symbol.iterator]();

console.log(it.next());

//tornar obj iteravel
const obj = {
    values: [1, 2, 3, 4],
    [Symbol.iterator]() {
        let i = 0;

        return {
            next: () => {
                i++;

                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                };
            }
        }; 
    }
};


// for (let value of obj) {
//     console.log(value);
// }

// const arr2 = [...obj];

// console.log(arr2);

//Generators
// */
// function* hello() {
//     console.log('Hello');
//     yield;

//     console.log('From');
//     yield;

//     console.log('Function!');

// }

// const it = hello(); 

// console.log(it.next()); 
// console.log(it.next()); 
// console.log(it.next()); 


function* naturalNumbers() {
    let number = 0;
    while (true) {
        yield number;
        number++;
    }
}

const it = naturalNumbers();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

//Generators

const obj = {
    values: [1, 2, 3, 4],
    *[Symbol.iterator]() {
        for (var i = 0; i < this.values.length; i++) {
            yield this.values[i];
        }
    }
};

for (let value of obj) {
    console.log(value);
}

