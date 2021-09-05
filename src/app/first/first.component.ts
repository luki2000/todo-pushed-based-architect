import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo/todo.model';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  public $todos: Observable<Todo[]> | null = null;

  constructor(private todoService: TodoService){}

  ngOnInit() {
    this.$todos = this.todoService.getTodos();
  }

  // text input to add todos
  addTodo(task: string) {
    this.todoService.addTodo(task);
  }

  // display list of todos

  // delete a todo
  deleteTodo(id: number) {
    this.todoService.deleteTodo(id);
  }

}
