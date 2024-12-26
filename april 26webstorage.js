// LOCAL STORAGE

// localStorage.setItem("Greetings" , "Hello");
// // localStorage.removeItem("Greetings")

// localStorage.setItem("value" , 10)
// localStorage.setItem("a" , 30)
// localStorage.setItem( "items" , 10+20)
// localStorage.removeItem("items")

// localStorage.clear();

// // session storage

// sessionStorage.setItem("greetings" , "helo");
// let result = sessionStorage.getItem("greetings");
// console.log(result);
// console.log(typeof(result));

// // local storage
// var number = 1
// localStorage.setItem("value" ,  number);

// var arr = [10 , 20 , 30 , 40]
// localStorage.setItem("arr" , arr);

// // we cant access the object directly in localstorage we want access it we neet convert the the local storage object in JASON formate

// var obj = {
//     Name : "maheen",
//     Age : 20
// }
//  localStorage.setItem("obj" , JSON.stringify(obj));
//  let result2 = localStorage.getItem("obj");
// console.log(JSON.parse(result2));

// local storage 

let array = [ 10,20,30,40,50];
localStorage.setItem( "array" ,JSON.stringify(array));
// console.log(array)
let resolve = localStorage.getItem("array");
console.log(JSON.parse(resolve));

// localStorage.clear();

localStorage.setItem( "Greeings" , "Hello");

