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