//symbols

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

const arr2 = [...obj];

console.log(arr2);
