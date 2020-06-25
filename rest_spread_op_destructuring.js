//maneira antes do ECMS6
function sum (a, b) {
    var value = 0;

    for (var i = 0; i < arguments.length; i++) {
        value += arguments[1];
    }
    return value
}

console.log(sum(5, 5, 5, 2, 3));

// rest operator ... retorna um array e pode ser manipulado com metodos de arrays

function sum (...args) {
    return args.reduce((acc, value) => acc + value, 0);
}

console.log(sum(5, 5, 5, 2, 3));

//rest operator ... com mais parametros
const sum = (a, b, ...rest) => {
    console.log(a, b, rest);
};

console.log(sum(5, 5, 5, 2, 3));
// 5 5 [5, 2, 3]

//spread operator ...quebra listas e passa como args

const multiply = (...args) => args.reduce((acc, value) => acc * 
value, 1)

const sum = (...rest) => {
    return multiply(...rest);
};

console.log(sum(5, 5, 5, 2, 3));

//strings, arrays, objetos literais e objetos iteraveis

const str = 'Digital Innovation One';

function logArgs(...args) {
    console.log(args);
};

logArgs(...str);

//arrays
const arr = [1, 2, 3, 4];

function logArgs(a, b, c) {
    console.log(a, b, c);
};

//combinando arrays
arr2 = arr.concat([5, 6, 7]);

//maneira mais facil

const arr2 = [...arr, 5, 6, 7];

const arr3 = [...arr2, ...arr, 0, 0, 0];

const arrClone = [...arr];

console.log(arrClone);

logArgs(...arr);

//objetos literais

const obj = {
    test: 123
};

const obj2 = {
    ...obj,
    test2: 'hello'
};

//a ordem do spread faz diferença, prevalece o ultimo

const obj2 = {
    ...obj,
    test: 456
};

console.log(obj2);

const objMerged = {
    ...obj,
    ...obj2
};

console.log(objMerged);

//clone de objetos
const obj2 = {...obj};

//não altera propriedade do primeiro obj (clone raso - porque os segundos niveis são alterados)

const obj = {
    test: 123,
    subObj: {
        test: 123
    }
};

const obj2 = {...obj};

//sem alterar a propriedade do primeiro
const obj2 = {...obj, subObj: { ...obj.subObj } };

obj2.subObj.test = 456;
//altera a propridade do objeto 1
console.log(obj);


//forma antiga
var arr = ['Apple','Banana','Orange', ['tomato']];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];

//destructuring Assignment

var [apple2, banana2, Orange2, [tomato2]] = ['Apple','Banana','Orange',  ['tomato']];

console.log(tomato2);

//forma antiga 

var obj = {
    name: 'Rodrigo',
    props: {
        age: 30,
        favoriteColors: ['black', 'blue']
    }
};

var age = obj.props.age;
var color1 = obj.props.favoriteColors[0];

var name = obj.name;

//destructuring Assignment - obj

var { name } = obj;

console.log(name);

//destructuring Assignment - obj literal

var [apple2] = arr;
var { 
    props: { age: age2, favoriteColors: [color1, color2] } 
} = obj;

console.log(age);

var { name: name2 } = obj;

console.log(name2);

console.log(color1);


var arr = [{name: 'apple', type: 'fruit'}];

var fruit1 = arr[0].name;

var [{ name: fruitName }] = arr;

console.log(fruitName);

//function

function sum(arr) {
    return arr[0] + arr[1];
};


//destructuring in function
function sum([a, b] = [0, 0]) {
    return a + b;
};

console.log(sum(5, 5));

function sum({ a, b }) {
    return a + b;
};

console.log(sum({ a:5, b:5 }));
