function method1() {
    console.log('method called');
}

var obj = {
    method1
};

obj.method1();

//
var obj = {
    sum(a, b) {
        return a + b;
    }
}

console.log(obj);
console.log(obj.sum(4, 5));
