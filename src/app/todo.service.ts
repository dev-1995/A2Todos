import { Injectable } from '@angular/core';
import { Init } from './init-todos'; 
@Injectable()
export class TodoService extends Init {

  constructor() { 
  	super();
  	console.log(`Todo's Service Running`);
  	this.load();

   }

   getTodos()
   {
   	let todos = JSON.parse(localStorage.getItem('todos'));
   	return todos;
   }

   updateTodo(todoObj)
   {
   		let todos = JSON.parse(localStorage.getItem('todos'));
   		todos.push(todoObj);
   		localStorage.setItem('todos', JSON.stringify(todos));
   } 
   deleteTodo(task)
   {
   	let ntodo = JSON.parse(localStorage.getItem('todos'));
  	ntodo.splice(task,1);
  	  	
    localStorage.setItem('todos', JSON.stringify(ntodo));
   }
}
