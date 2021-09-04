import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  baseUrl: string = 'https://jsonplaceholder.typicode.com/';


  
  constructor(private http: HttpClient) { }

  public addTodo(todo: Todo) {
    return this.http.post(`${this.baseUrl}todos`, todo);
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
