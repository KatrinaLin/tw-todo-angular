import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {Todo} from "./todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  todoUrl = "http://localhost:3000/api/todos";

  getList(): Observable<Todo[]> {
    console.log(this.http.get<Todo[]>(this.todoUrl));
    return this.http.get<Todo[]>(this.todoUrl);
  }

}
