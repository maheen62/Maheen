
// PRIMITIVE DATA TYPE

 var num = 10;
 var num2 = num
 num = 30;
 console.log(num2)

 // NON PRIMITIVE DATA TYPE
 // storing didffernt data type

 var arr = [ 10 ,20, 30 , 40 , 50 , true , "array"]
 console.log(arr)

 var arr = [ 10 ,20, 30 , 40 , 50 , true , "array"]
 console.log(arr.length)

 var arr = [ 10 ,20, 30 , 40 , 50 , true , "array"]
 console.log( arr[6] )

 // UPDATING THE ARRAY

 var arr = [ 10 ,20, 30 , 40];
arr[1] = 90; 
console.log(arr)

// TAKING THE LENGTH OF THE ARRAY

var details = [ " john " , " graduated" , 30 , " race driver"]
console.log(details)
console.log(details [ details.length-1 ])

// POP Methos remove the last item of the of the array
console.log("POP method")
var details = [ " john " , " graduated" , 30 , " race driver"];
details.pop();
// details.pop();
// details.pop();
console.log(details)

// PUSH method it will add the items at the end oof the array
var details = [ " john " , " graduated" , 30 , " race driver"];
details.push( 90 , " Promoted");
console.log(details);

var details2 = [];
details2.push(30)
console.log(details2)
// SORT method it will put the all the things in accending order

var arr = [ 0 , 9, 8, 7 ,6 ,5, 4,3, 2, 1];
arr.sort();
console.log(arr);

// REVERSE method is going to put all the things in reverse order
var arr = [ 0 , 90, 80, 70 ,60 ,50 , 40,30, 20, 10];
arr.reverse();
console.log(arr)

// CONCAT method it will combine the array
var arr = [ 0 , 90, 80, 70 ,60 ,50 , 40,30, 20, 10];
var arr1 = [ 0 , 90, 80, 70 ,60 ,50 , 40,30, 20, 10];
console.log(arr.concat(arr1));



console.log("SPLICE METHOD")
// SPLICE method itwill help to get part of the array

var number = [0, 1, 2, 3, 4, 5, 6, 7, 8,9,10];
// console.log(number)
// number.splice( 2 , 8 , 800)
number.splice( 0 , 11 , 100)
console.log(number)






