// declaring vars
const input = document.getElementById("input");
const Add = document.getElementById("add-btn");
const todosUL = document.getElementById("todos");
 
const todos = JSON.parse(localStorage.getItem("todos"));

 if (todos) {
 todos.forEach((todo) => {
    addTodo(todo);
 });
}
// clear input   
input.value="";
Add.addEventListener("click", (e) => {
    e.preventDefault(); 
   addTodo(); 
   });

function addTodo(){
const todo = input.value;

if(todo){ 
const list = document.createElement("li");
list.innerText=todo;
todosUL.append(list); 

// creating new link
const link = document.createElement('a');
link.className="delete-icon"
link.innerHTML='<i class="fas fa-times"></i>';
list.append(link)
todosUL.appendChild(list)
 //line strike
list.addEventListener("click",()=>{
list.classList.toggle('strike');
 updateLs();
});
 
 // remove task
 link.addEventListener('click',(e)=>{
    e.target.parentElement.parentElement. remove();
     updateLs();  
}); 

updateLs();   
}

}

 function updateLs(){
  const todosE1=document.querySelectorAll("li");
   const todos=[];
   todosE1.forEach((todoE1)=>{
     todos.push({
           text:todoE1.innerText,completed:todoE1.classList.contains("completed")
     });

   });       
      
      localStorage.setItem('todos',JSON.stringify(todos));
 }
