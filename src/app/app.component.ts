import { Component } from '@angular/core';
import {TodoComponent} from './todo/todo.component';
import {TodoService} from './todo.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoService]
})
export class AppComponent {
  title = 'app'; 
}
