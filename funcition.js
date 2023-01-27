



function myFunc(theArr) {
    theArr[0] = 30;
  }
  
  const arr = [45];
  
  console.log(arr[0]); // 45
  myFunc(arr);
  console.log(arr[0]); // 30
  

function sum(a, b, c, d, e){
    console.log(a, b, c, d, e);
    var sum = a + b + c + d + e;
    console.log(sum);
}

sum(1, 2, 3, 4, 5);

function mul(num1, num2, num3,){
    console.log(num1, num2, num3);
    var mul = num1 * num2 * num3;
    console.log(mul);
}

mul(11, 22, 33);