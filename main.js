/*
To-Do list DOM notes
*users have the ability to add new to do items

-form
-text input box and submit ( get input form the use and add it to the list when they click submit)
-document.createElement to create the list items
-appendChild to add to our list

* Users have the ability to view to do items
- list to keep track of our todo items
-querySelectorAll can be utilized to access the array of your list items

    HTML
- empty list
- form
- buttons
- text input

    JS
-list items themselves


* Allow users to clear all to do items
*/

//Query Selectors
let todoForm = document.querySelector("#todoForm");
let todoInput = document.querySelector("#todoInput");
let toDoList = document.querySelector("#todoItems");
let toDoListItems = document.querySelectorAll("#todoItems li");
let removeAll = document.querySelector("#removeAll")
let remove = document.querySelector("#removeItems")
let submit = document.querySelector("#submit")
let addItems = document.querySelector("#addItems")


//EventListeners
todoForm.addEventListener("submit", function(event){
    event.preventDefault();
    //create new list item
    let newListItem = document.createElement("li");

    //give new list item text from textInput box
    newListItem.innerText = todoInput.value;

    //give new list item a strikeThrough with click
    newListItem.addEventListener("click", function(){
        newListItem.style.textDecoration = "line-through";
    })
    

    //clearing the input text box
    todoInput.value = "";

    //adding new items into list
     toDoList.appendChild(newListItem);
})


//Buttons EventListners
    addItems.addEventListener("click", function(){
        let newListItem = document.createElement("li");
        newListItem.innerText = todoInput.value;

        newListItem.addEventListener("click", function(){
            newListItem.style.textDecoration = "line-through";
        })

        todoInput.value = "";
        toDoListItems = document.querySelectorAll("#todoItems li");
        toDoList.appendChild(newListItem);
    })

    //REMOVE ITEMS - when clicked, remove specified items from toDoList
    remove.addEventListener("click", function(){
        toDoListItems = document.querySelectorAll("#todoItems li");

        for(let i = 0; i < toDoListItems.length; i++){
            
            if(toDoListItems[i].style.textDecoration === "line-through"){
                toDoListItems[i].remove();
                   
            }
    }})

    //REMOVE ALL - When clicked, remove all listItems from toDoList
    removeAll.addEventListener("click", function(){
        toDoListItems = document.querySelectorAll("#todoItems li");
        for(let i = 0; i < toDoListItems.length; i++){
            toDoListItems[i].remove();
        }  
        console.log("POST-REMOVAL");
        console.log(toDoListItems)
    })
   


      

    





    














