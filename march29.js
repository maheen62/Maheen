console.log(Number(true))
console.log(typeof(Number(true)))
console.log(Boolean(1))
console.log(typeof(Boolean(1)))


// pre incriment and post incriment

var num1 = 1 + 5;
var num2 = num1 / 4;
var num3 = 3 + 5;
var num4 = num3 / 4;
console.log(num2 + " " + num4)

// POST INCRIMENT

var num = 1;
console.log( num++ )
console.log(num)

var number = 10;
number++;
++number
console.log(number)

var x = 20;
++x;
console.log(x)


var input = 7;
var output1 = ++input + ++input + ++input; // 8 9 10  = 27
var output2 = input++ + input++ + input++; // 10 11 12 = 33
var output3 = input++ + ++input + input++;  // 13 15 15 = 43
console.log( output1  + " " + output2 + " " + output3)



