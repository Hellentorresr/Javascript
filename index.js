let arbol = "arbol con grandes hojas verdes y puede ser grandes y pequenos";

/* console.log(arbol.split('')); */

//codigo html
let codigoHtml = `
    <li>hola uno</li>
    <li>hola dos</li>
    <li>hola tres</li>`;

/* console.log(codigoHtml);

let number = new Number(5);
console.log(number)

console.log(Boolean(0));
console.log(Boolean(-7));
console.log(Boolean(''));
console.log(Boolean(' ')); */

let casa;
console.log(casa);

let probarSiesUnFNumero = 'hola' * 3.7
console.log(probarSiesUnFNumero);


//Fuctions declaration
function thisIsAFunction() {
    console.log('hi');
}


//calling the function
thisIsAFunction();

//function returning a value
function aFunctionRetorning() {
    // A function can return diferents data type
    return 'The function has return a string'
}

let printTheFunction = aFunctionRetorning();
console.log(printTheFunction);


//function with Parameters
function doIt(nomberOne, nomberTwo) {
    let mult = nomberOne * nomberTwo;
    let div = nomberOne / nomberOne;

    return `The multiplication is: ${mult} and the divition is: ${div}`
}

let Operations = doIt(5, 5);

console.log(Operations);


//function declaration VR function expression
//a function declaration can be invoked from any part in our code even when we havent set it

//function expression
const expression = function () {
    console.log('This is a function expression that was assigned to a variable');
    //cannot be call before initialization
}

expression();


////
////
////
// Array, we can use const or let to declare an array
const firstArray = [];
const secondArray = [1, true, 'hi there', ['a', 'b', 'c'],
    [1, 2, 3]
];
console.log(secondArray);
console.log(secondArray[0]);
console.log(secondArray[4][1]);

// Other way to declare an array
// ECMAScript 2015 also known as ES6
const a = ['one', 'two', 'three', 8, 9, 10];
//console.log(a);
a.push("black");
//a.pop();remove the last element from the array
console.log(a);


//
//
//Method to execute a function for each element of an array
//convert elements of an array to elements i of html
//index to set an id to a each element

a.forEach(function (i, index) {
    console.log(`<li id="${index}">${i}</i>`);
});