import { Component, OnInit } from '@angular/core';
import {TodoService} from '../todo.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
	todo;
	newtodo;
  constructor(private _todoService : TodoService) { }

  ngOnInit() {
  	this.todo =  this._todoService.getTodos();
  }

  addTodo()
  {
    let todoObj= {
      task:this.newtodo,
      done:false
    };
    this.todo.push(todoObj);
    this._todoService.updateTodo(todoObj);
    this.newtodo = '';

  }
  deleteTodo(task)
  {
    this.todo.splice(this.todo.indexOf(task),1);
    
    
    this._todoService.deleteTodo(this.todo.indexOf(task)); 
  }
}
