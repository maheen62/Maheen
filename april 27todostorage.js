// THIS IS FOR INLY TO GET THE ITEM 

// let todoInpElement = document.getElementById("todo-item-inp");
// let todoBtnElement = document.getElementById("todo-add-btn");
// let todoListItem = document.getElementById("todo-list-item")

// let itemNo = 1;

// function addItem(){
//     // console.log("btn is clicked");
//     // console.log(todoInpElement.value);
//     if( todoInpElement.value == ""){
//         console.log(window.alert("Type something to add in todo list"))
//     }else{
//     todoListItem.innerHTML += `<li id = "${itemNo}"> ${todoInpElement.value} <button onclick = "deleteItem('${itemNo}')">delete Item </button></li>`
//     }
// }

// function deleteItem(id){
//     // console.log(id)
//     let liElement = document.getElementById(id)
//     liElement.remove();
// }


// THIS FOR STORINGTHE ITEM OR TODOD LIST PERMANENTLY IN LOCAL STORAGE

let todoInpElement = document.getElementById("todo-item-inp");
let todoBtnElement = document.getElementById("todo-add-btn");
let todoListItem = document.getElementById("todo-list-item")

let itemNo = 1;

let todoItemfromLocalStorage = JSON.parse(localStorage.getItem("todoItem"))
todoItemfromLocalStorage.map((item , i) =>{
    // console.log(item)
    todoListItem.innerHTML +=`<li> ${ item }  <button onclick = "deleteitem(${i})">Delete Item </button></li>`

})

function addItem(){
    let todoItemfromLocalStorage = JSON.parse(localStorage.getItem("todoItem"));
    // console.log(todoItemfromLocalStorage);
    if( todoItemfromLocalStorage == null){
        let todoItem = [];
        todoItem.push( todoInpElement.value );
        localStorage.setItem("todoItem" , JSON.stringify(todoItem));
        location.reload();
    }else{
        let todoItemfromLocalStorage = JSON.parse(localStorage.getItem("todoItem"));
        todoItemfromLocalStorage.push( todoInpElement.value );
    console.log(todoItemfromLocalStorage);
    localStorage.setItem("todoItem" , JSON.stringify(todoItemfromLocalStorage) );
    location.reload();

    }

}


function deleteitem(id){
    // console.log(id)
    let todoItemfromLocalStorage = JSON.parse(localStorage.getItem("todoItem"));
    todoItemfromLocalStorage.splice( id , 1)
     console.log(todoItemfromLocalStorage);
     localStorage.setItem( "todoItem" , JSON.stringify(todoItemfromLocalStorage));
     location.reload();
    
}






 // EXPLAINATION FOR TODOD LIST TO ADD THE ITEM IN LOCAL STORAGE
/*

1 . FIRST THING IS THAT WHENEVER THE the additem button is clicked the funtion shoud get called and the arrays are created and the arrays are should put inside the local storage
2 . in second point we need creat a array called todoItems { let todoItem = [] } -> like this in that arra we need to put the items like whatever we type in input feild , 
LIKE THIS -> we need to pust the input value like { todoItem.pust( todoInpElement.value )  } after pusing the value , we need to take the array and stored in to the local storage
 3 .localStorage.setItem("todoItem" , JSON.stringify(todoItem)) this is how we pushed or created the todo array inside the local storage
 4 . after pushed into the local storage we are facing the prablem like the value is updating from item1 to item2 but that should not happen , and everytime when we typing the item the new array is created
 5 . the important thing is when we try to store the first item the , initially the local storage doesnot have any thing , after adding the second item noe we have something in localstorage  now we dont get null 
 NOW THE PROBLEM IS{ the second item is going to be the first item in localstorage } 
 THE CODE KNOW THAT WHICH ITEM IS FIRST ADDED IN TO THE LOCAL STORAGE 
 let todoItemfromLocalStorage = JSON.parse(localStorage.getItem("todoItem"));
    console.log(todoItemfromLocalStorage);
6 . after this we will use the if condition to create a singlr  array  for all the items
if( todoItemfromLocalStorage == null){
        let todoItem = [];
        todoItem.push( todoInpElement.value );
        localStorage.setItem("todoItem" , JSON.stringify(todoItem))
    }
BUT WITH THIS IF CONDITION THE ARRAY IS CREATED BUT ONLY THE SINGLE ITEM IS STORED THE SEND ITEM IS NOT STORED 
TO RESOLVE THIS PROBLEM

7 . TO GET THE ITEM2 IN TO THE { 1 . first we need to get todo list from the local storage and i should append item2 into that array then put the updated array back inside the local storage}
todoItemfromLocalStorage --> this is called appended array

8 . if we want to store the items continuosly , we need store the appended array in to the local storage
    localStorage.setItem("todoItem" ,JSON.stringify(todoItemfromLocalStorage) ) --> with this we successfully stored the items one by one in the local storage

9 . NOW WE HAVE TO DISPLAY IT ON THE DOM
TO DISPLAY IT ON THE DOM WE HAVE TAKE THE ORDER LIST AND MAP THE ARRAY ONE BY ONE

let todoItemfromLocalStorage = JSON.parse(localStorage.getItem("todoItem"))
todoItemfromLocalStorage.map((item , i) =>{
    // console.log(item)
    todoListItem.innerHTML +=`<li> ${ item }</li>`

})
HERE ABOVE WE ARE PLACING THE ITEMS IN LIST ITEM INSTEAD OF INPUT VALUE BECAUSE WE ARE MMAPING THE ARRAY AND WE PLCAED THE ITEMS AS A VALUE HERE

WITH THE ABOVE CODE WE GET A ITEMS WHICH STORED IN THE LOCAL STORAGE BUT IF WE TRY TO ADD THE ANOTHE ITEM IT WILL ADD IN THE LOCAL STORAGE BUT NOT IN THE DOM , IT WILL APPEAR IN THE DOM WHEN WE REFRESH THE PAGE
now how we solve the pronlem is --> whenever we add the item i want to refresh my page and display the items onthe DOM
to refresh the we have method call ---->{ location.reload() }

10 . WE NEED TO ADD THE { DELETE BUTTON } 
to this we gave (onclick) event with (deleteitem) function
THIS  IS THE CODE TO GET THE IT OF {DELETEITEM} BUTTON
todoItemfromLocalStorage.map((item , i) =>{
    // console.log(item)
    todoListItem.innerHTML +=`<li> ${ item }  <button onclick = "deleteitem(${i})">Delete Item </button></li>`

})
    function deleteitem(id){
    console.log(id)

11 . To remove the item from the localstorage , 
1. we need to get the items from the localstorage 
2 . second thimg id that we need to use the (splice) to remove the items from the local storage
3 . after clicking on the delete item we will get the { updated array in console}
4 . we need to put the updated array in local storage

function deleteitem(id){
    // console.log(id)
    let todoItemfromLocalStorage = JSON.parse(localStorage.getItem("todoItem"));
    todoItemfromLocalStorage.splice( id , 1)
     console.log(todoItemfromLocalStorage);
     localStorage.setItem( "todoItem" , JSON.stringify(todoItemfromLocalStorage));
    
}
LIKE THE ABOVE CODE     

*/