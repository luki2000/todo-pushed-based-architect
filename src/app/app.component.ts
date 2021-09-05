import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './models/todo/todo.model';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(){}

}
