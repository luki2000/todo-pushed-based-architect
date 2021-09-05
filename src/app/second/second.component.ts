import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo/todo.model';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {


  public $todos: Observable<Todo[]> | null = null;

  constructor(private todoService: TodoService){}

  ngOnInit() {
    this.$todos = this.todoService.getTodos();
  }
}
