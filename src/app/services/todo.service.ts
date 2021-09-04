import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo/todo.model';

const httpOptions = {
  headers: new HttpHeaders({ 'content-type': 'application/json' }),
};


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  baseUrl: string = 'https://jsonplaceholder.typicode.com/';


  
  constructor(private http: HttpClient) { }

  public addTodo(task: string) {
    const todo: Todo = {
      id: Math.floor(Math.random() * 100),
      title: task,
      userId: 1,
      completed: false
    }
    console.log('add todo...')
    console.table(todo);

    const body = JSON.stringify(todo)

    return this.http.post(`${this.baseUrl}todos`, todo, httpOptions);
  }

  public getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.baseUrl}todos`);
  }

  public updateTodo(id: number, todo: Todo): Observable<Todo[]> {
    return this.http.put<Todo[]>(`${this.baseUrl}todos/${id}`, todo);
  }

  public deleteTodo(id: number): Observable<Todo[]> {
    return this.http.delete<Todo[]>(`${this.baseUrl}todos/${id}`);
  }
}
