// Arrow function

var sum = (a, b) => a + b;

console.log(sum(5, 6));

// com statements é preciso usar chaves

var sum = (a, b) => {
    var x = 10;
    if (b < x) {
        b = x
    }
    return a + b;
}
console.log(sum(5, 6));

// com apenas um parametro pode omitir parenteses

var sum = a => a + 5;

// hash operator

var sum = (...a) => a;

// return implicito

var createObj = () => ({ teste: 123 });

console.log(createObj());

// função construtora, não é possivel usar arrow function

function Car() {
    this.foo = 'bar'
}
console.log(new Car());

//hosting não funciona com arrow function

log('teste')

function log(value) {
    console.log(value);
}

//arrow function utiliza o contexto léxico
//dispensa o uso do .bind(), ou variavel _that
var obj = {
    showContext: function showContext() {
        // this = obj

        setTimeout(() => {
            this.log('after 1000ms');
        }, 1000);
    },
    log: function log(value) {
        console.log(value);
    }
};

obj.showContext();



