import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo/todo.model';

const httpOptions = {
  headers: new HttpHeaders({ 'content-type': 'application/json'}),
};


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  baseUrl: string = 'http://localhost:3000/';


  
  constructor(private http: HttpClient) { }

  public addTodo(task: string) {
    const todo: Todo = {
      id: Math.floor(Math.random() * 100),
      title: task,
      userId: 1,
      completed: false
    }
    this.http.post(`${this.baseUrl}todos`, todo, httpOptions).subscribe();
  }

  public getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.baseUrl}todos`);
  }

  /*public updateTodo(id: number, todo: Todo) {
    return this.http.put(`${this.baseUrl}todos/${id}`, todo).subscribe();
  }*/

  public deleteTodo(id: number) {
    this.http.delete(`${this.baseUrl}todos/${id}`).subscribe();
  }
}
