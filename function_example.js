

function add(num1, num2){
    var maltiplication = num1 * num2; 
    return maltiplication;
}


var firstNumber = add (30, 40);
var secendNumber =add ( 10, 20);
var finalNumber = add (firstNumber, secendNumber);
console.log(finalNumber);



function add(num1, num2, num3, num4){
    console.log(num1, num2, num3, num4);
    let sum = num1 + num2 + num3 + num4;
    let average = sum / 4;
    return average;
}

let add1 = 20;
let add2 = 30;
let add3 = 40;
let add4 = 50;
let finalSum = add(add1, add2, add3, add4);
console.log(finalSum);