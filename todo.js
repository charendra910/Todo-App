let todolist = [{
    item :'hari',
    duedate:"4/3/2014",
},
{
    item :'hari',
    duedate:"6//2/2021"
}
];
displayTodo();

function addTodo(){
   let inputElement = document.querySelector('#my-input');
   let dateElement = document.querySelector('#todo-date');

   let todoItems = inputElement.value;
   let dateItems = dateElement.value;

   todolist.push({item:todoItems,duedate:dateItems});

   inputElement.value = '';
   dateElement.value = '';
   displayTodo();
}

function displayTodo(){
    let containerElement = document.querySelector('.todo-container');
    let newHtml = '';

    for(let i=0; i<todolist.length; i++){
       let {item,duedate} = todolist[i];

     newHtml += `
     <span>${item}</span>
     <span>${duedate}</span>
     <button class = "todo-delete" onclick="todolist.splice(${i},1);
     displayTodo();">Delete</button>
     `;

    } 
    containerElement.innerHTML = newHtml;
}
