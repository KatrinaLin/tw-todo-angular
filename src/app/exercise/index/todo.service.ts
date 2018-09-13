import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  todoUrl = "http://localhost:3000/api/todos";

  getList(): Observable<any[]> {
    console.log(this.http.get<any[]>(this.todoUrl));
    return this.http.get<any[]>(this.todoUrl);
  }

}
