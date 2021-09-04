import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './models/todo/todo.model';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public $todos: Observable<Todo[]> | null = null;

  constructor(private todoService: TodoService){}

  ngOnInit() {
    this.$todos = this.todoService.getTodos();
  }

  // text input to add todos
  addTodo(task: string) {
    console.log('current task', task);
  }

  // display list of todos

  // delete a todo

  // update a todo 

}
